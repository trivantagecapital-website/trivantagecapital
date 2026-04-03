'use client';

import { useState } from 'react';

const inputClass = (hasError) =>
  `w-full border border-primary/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all ${
    hasError ? 'border-red-400 bg-red-50' : ''
  }`;

const errorClass = 'mt-1 text-xs text-red-500';

export default function InvestCallbackForm() {
  const [name, setName]   = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors]       = useState({});
  const [status, setStatus]       = useState('idle');
  const [serverError, setServerError] = useState('');

  // OTP state
  const [otpStatus, setOtpStatus]       = useState('idle');
  const [otpToken, setOtpToken]         = useState('');
  const [otp, setOtp]                   = useState('');
  const [otpError, setOtpError]         = useState('');
  const [verifiedToken, setVerifiedToken] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (otpStatus !== 'idle') {
      setOtpStatus('idle');
      setOtpToken('');
      setOtp('');
      setOtpError('');
      setVerifiedToken('');
    }
  }

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  function validate() {
    const e = {};
    if (!name.trim()) e.name = 'Name is required.';
    if (!email.trim()) {
      e.email = 'Email is required.';
    } else if (!emailIsValid) {
      e.email = 'Enter a valid email address.';
    } else if (otpStatus !== 'verified') {
      e.email = 'Please verify your email address.';
    }
    if (!phone.trim()) {
      e.phone = 'Phone number is required.';
    } else if (!/^\+?[\d\s\-()\u200B]{10,15}$/.test(phone.trim())) {
      e.phone = 'Enter a valid phone number.';
    }
    return e;
  }

  async function handleSendOtp() {
    setOtpStatus('sending');
    setOtpError('');
    try {
      const res = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      const json = await res.json();
      if (!res.ok) {
        setOtpStatus('idle');
        setOtpError(json.error || 'Failed to send code.');
      } else {
        setOtpToken(json.token);
        setOtpStatus('sent');
      }
    } catch {
      setOtpStatus('idle');
      setOtpError('Failed to send code. Please try again.');
    }
  }

  async function handleVerifyOtp() {
    setOtpStatus('verifying');
    setOtpError('');
    try {
      const res = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: otpToken, otp }),
      });
      const json = await res.json();
      if (!res.ok) {
        setOtpStatus('sent');
        setOtpError(json.error || 'Invalid code.');
      } else {
        setVerifiedToken(json.verifiedToken);
        setOtpStatus('verified');
        setOtp('');
        setErrors((prev) => ({ ...prev, email: undefined }));
      }
    } catch {
      setOtpStatus('sent');
      setOtpError('Verification failed. Please try again.');
    }
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setErrors({});
    setStatus('loading');
    setServerError('');

    const data = new FormData();
    data.append('name', name.trim());
    data.append('email', email.trim());
    data.append('phone', phone.trim());
    data.append('verifiedToken', verifiedToken);

    try {
      const res  = await fetch('/api/callback', { method: 'POST', body: data });
      const json = await res.json();
      if (!res.ok) {
        setServerError(json.error || 'Something went wrong.');
        setStatus('error');
      } else {
        setStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setOtpStatus('idle');
        setOtpToken('');
        setVerifiedToken('');
      }
    } catch {
      setServerError('Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-8 gap-3">
        <span className="material-symbols-outlined text-4xl text-primary">check_circle</span>
        <p className="text-primary font-semibold">Request Submitted</p>
        <p className="text-primary/60 text-sm">Our advisors will contact you within 24 hours.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-xs font-bold uppercase tracking-widest text-primary/40 underline hover:text-primary transition-colors"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">

      {/* Name */}
      <div>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass(!!errors.name)}
        />
        {errors.name && <p className={errorClass}>{errors.name}</p>}
      </div>

      {/* Email + OTP */}
      <div>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            readOnly={otpStatus === 'verified'}
            className={`${inputClass(!!errors.email)} flex-1 ${otpStatus === 'verified' ? 'opacity-70' : ''}`}
          />
          {otpStatus === 'verified' ? (
            <span className="shrink-0 flex items-center px-3 text-sm font-semibold text-green-600">
              &#10003; Verified
            </span>
          ) : (
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={!emailIsValid || otpStatus === 'sending' || otpStatus === 'verifying'}
              className="shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary rounded hover:bg-primary/20 transition-all disabled:opacity-40"
            >
              {otpStatus === 'sending'
                ? 'Sending...'
                : otpStatus === 'sent'
                ? 'Resend'
                : 'Send Code'}
            </button>
          )}
        </div>
        {errors.email && <p className={errorClass}>{errors.email}</p>}
        {otpError && otpStatus === 'idle' && <p className={errorClass}>{otpError}</p>}
      </div>

      {/* OTP input */}
      {(otpStatus === 'sent' || otpStatus === 'verifying') && (
        <div>
          <div className="flex gap-2">
            <input
              type="text"
              inputMode="numeric"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className={`${inputClass(!!otpError)} flex-1 tracking-widest`}
              placeholder="6-digit verification code"
              maxLength={6}
            />
            <button
              type="button"
              onClick={handleVerifyOtp}
              disabled={otp.length !== 6 || otpStatus === 'verifying'}
              className="shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-widest bg-primary text-white rounded hover:opacity-90 transition-all disabled:opacity-40"
            >
              {otpStatus === 'verifying' ? 'Verifying...' : 'Verify'}
            </button>
          </div>
          {otpError && <p className={errorClass}>{otpError}</p>}
          <p className="mt-1 text-xs text-primary/40">
            Check your inbox for the 6-digit code &middot; Valid for 10 minutes
          </p>
        </div>
      )}

      {/* Phone */}
      <div>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass(!!errors.phone)}
        />
        {errors.phone && <p className={errorClass}>{errors.phone}</p>}
      </div>

      {serverError && <p className="text-xs text-red-500">{serverError}</p>}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-primary text-white py-3 rounded font-medium hover:opacity-90 transition disabled:opacity-60"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit Request'}
      </button>

      <p className="text-[11px] text-primary/70 text-center">
        By clicking submit, you agree to our Privacy Policy &amp; Terms of Engagement.
      </p>

    </form>
  );
}
