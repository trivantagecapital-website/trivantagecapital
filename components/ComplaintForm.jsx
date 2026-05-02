'use client';

import { useState } from 'react';

const inputClass = (hasError) =>
  `w-full border rounded px-4 py-2.5 text-sm text-primary placeholder-primary/30 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all ${
    hasError ? 'border-red-400 bg-red-50' : 'border-primary/15 bg-white'
  }`;

const labelClass =
  'block text-xs font-bold uppercase tracking-widest text-primary/70 mb-2';

const errorClass = 'mt-1 text-xs text-red-500';

const INITIAL = {
  name: '', lodgedBy: '', address: '', pincode: '',
  state: '', city: '', mobile: '', email: '', pan: '', clientId: '', details: '',
};

export default function ComplaintForm() {
  const [form, setForm]               = useState(INITIAL);
  const [errors, setErrors]           = useState({});
  const [status, setStatus]           = useState('idle');
  const [serverError, setServerError] = useState('');

  // Email OTP state
  const [otpStatus, setOtpStatus]       = useState('idle'); // idle | sending | sent | verifying | verified
  const [otpToken, setOtpToken]         = useState('');
  const [otp, setOtp]                   = useState('');
  const [otpError, setOtpError]         = useState('');
  const [verifiedToken, setVerifiedToken] = useState('');

  const set = (field) => (e) =>
    setForm((f) => ({
      ...f,
      [field]: field === 'pan' ? e.target.value.toUpperCase() : e.target.value,
    }));

  function handleEmailChange(e) {
    set('email')(e);
    if (otpStatus !== 'idle') {
      setOtpStatus('idle');
      setOtpToken('');
      setOtp('');
      setOtpError('');
      setVerifiedToken('');
    }
  }

  function validate() {
    const e = {};
    if (!form.name.trim())     e.name    = 'Name is required.';
    if (!form.address.trim())  e.address = 'Address is required.';
    if (!form.pincode.trim())  e.pincode = 'Pincode is required.';
    if (!form.state.trim())    e.state   = 'State/UT is required.';
    if (!form.city.trim())     e.city    = 'City is required.';
    if (!form.mobile.trim()) {
      e.mobile = 'Mobile number is required.';
    } else if (!/^\d{10}$/.test(form.mobile.trim())) {
      e.mobile = 'Enter a valid 10-digit mobile number.';
    }
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = 'Enter a valid email address.';
    } else if (otpStatus !== 'verified') {
      e.email = 'Please verify your email address.';
    }
    if (!form.pan.trim()) {
      e.pan = 'PAN is required.';
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(form.pan.trim())) {
      e.pan = 'Enter a valid PAN (e.g. ABCDE1234F).';
    }
    if (!form.clientId.trim()) e.clientId = 'Client ID is required.';
    if (!form.details.trim())  e.details  = 'Please describe your complaint.';
    return e;
  }

  async function handleSendOtp() {
    setOtpStatus('sending');
    setOtpError('');
    try {
      const res = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email.trim() }),
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
    Object.entries(form).forEach(([k, v]) => data.append(k, v));
    data.append('verifiedToken', verifiedToken);

    try {
      const res  = await fetch('/api/complaint', { method: 'POST', body: data });
      const json = await res.json();
      if (!res.ok) {
        setServerError(json.error || 'Something went wrong.');
        setStatus('error');
      } else {
        setStatus('success');
        setForm(INITIAL);
        setOtpStatus('idle');
        setOtpToken('');
        setVerifiedToken('');
      }
    } catch {
      setServerError('Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite" className="flex flex-col items-center justify-center text-center py-20 gap-4">
        <span className="material-symbols-outlined text-5xl text-primary" aria-hidden="true">check_circle</span>
        <h3 className="serif-heading text-2xl text-primary">Complaint Submitted</h3>
        <p className="text-primary/60 text-sm max-w-sm">
          Your complaint has been registered successfully. We will review it and get back to you.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-xs font-bold uppercase tracking-widest text-primary/40 underline hover:text-primary transition-colors"
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
        <label htmlFor="grievance-name" className={labelClass}>
          Investor Name <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="grievance-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'grievance-name-error' : undefined}
          placeholder="Name"
          value={form.name}
          onChange={set('name')}
          className={inputClass(!!errors.name)}
        />
        {errors.name && (
          <p id="grievance-name-error" className={errorClass}>{errors.name}</p>
        )}
      </div>

      {/* Complaint Lodged By */}
      <div>
        <label htmlFor="grievance-lodged-by" className={labelClass}>
          Complaint Lodged By
        </label>
        <input
          id="grievance-lodged-by"
          name="lodgedBy"
          type="text"
          autoComplete="off"
          placeholder="Self / Authorised Representative"
          value={form.lodgedBy}
          onChange={set('lodgedBy')}
          className={inputClass(false)}
        />
      </div>

      {/* Address */}
      <div>
        <label htmlFor="grievance-address" className={labelClass}>
          Correspondence Address <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="grievance-address"
          name="address"
          type="text"
          autoComplete="street-address"
          required
          aria-required="true"
          aria-invalid={!!errors.address}
          aria-describedby={errors.address ? 'grievance-address-error' : undefined}
          placeholder="Street, Area, Landmark"
          value={form.address}
          onChange={set('address')}
          className={inputClass(!!errors.address)}
        />
        {errors.address && (
          <p id="grievance-address-error" className={errorClass}>{errors.address}</p>
        )}
      </div>

      {/* Pincode */}
      <div>
        <label htmlFor="grievance-pincode" className={labelClass}>
          Pincode <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="grievance-pincode"
          name="pincode"
          type="text"
          inputMode="numeric"
          autoComplete="postal-code"
          required
          aria-required="true"
          aria-invalid={!!errors.pincode}
          aria-describedby={errors.pincode ? 'grievance-pincode-error' : undefined}
          placeholder="6-digit pincode"
          value={form.pincode}
          onChange={set('pincode')}
          className={inputClass(!!errors.pincode)}
          maxLength={6}
        />
        {errors.pincode && (
          <p id="grievance-pincode-error" className={errorClass}>{errors.pincode}</p>
        )}
      </div>

      {/* State */}
      <div>
        <label htmlFor="grievance-state" className={labelClass}>
          State / UT <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="grievance-state"
          name="state"
          type="text"
          autoComplete="address-level1"
          required
          aria-required="true"
          aria-invalid={!!errors.state}
          aria-describedby={errors.state ? 'grievance-state-error' : undefined}
          placeholder="State / Union Territory"
          value={form.state}
          onChange={set('state')}
          className={inputClass(!!errors.state)}
        />
        {errors.state && (
          <p id="grievance-state-error" className={errorClass}>{errors.state}</p>
        )}
      </div>

      {/* City */}
      <div>
        <label htmlFor="grievance-city" className={labelClass}>
          City / Location <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="grievance-city"
          name="city"
          type="text"
          autoComplete="address-level2"
          required
          aria-required="true"
          aria-invalid={!!errors.city}
          aria-describedby={errors.city ? 'grievance-city-error' : undefined}
          placeholder="City"
          value={form.city}
          onChange={set('city')}
          className={inputClass(!!errors.city)}
        />
        {errors.city && (
          <p id="grievance-city-error" className={errorClass}>{errors.city}</p>
        )}
      </div>

      {/* Mobile */}
      <div>
        <label htmlFor="grievance-mobile" className={labelClass}>
          Mobile Number <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="grievance-mobile"
          name="mobile"
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          required
          aria-required="true"
          aria-invalid={!!errors.mobile}
          aria-describedby={errors.mobile ? 'grievance-mobile-error' : undefined}
          placeholder="10-digit mobile number"
          value={form.mobile}
          onChange={set('mobile')}
          className={inputClass(!!errors.mobile)}
          maxLength={10}
        />
        {errors.mobile && (
          <p id="grievance-mobile-error" className={errorClass}>{errors.mobile}</p>
        )}
      </div>

      {/* Email + OTP verification */}
      <div>
        <label htmlFor="grievance-email" className={labelClass}>
          Email Address <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <div className="flex gap-2">
          <input
            id="grievance-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'grievance-email-error' : undefined}
            placeholder="you@example.com"
            value={form.email}
            onChange={handleEmailChange}
            readOnly={otpStatus === 'verified'}
            className={`${inputClass(!!errors.email)} flex-1 ${otpStatus === 'verified' ? 'opacity-70' : ''}`}
          />
          {otpStatus === 'verified' ? (
            <span className="shrink-0 flex items-center px-3 text-sm font-semibold text-green-600">
              <span aria-hidden="true">✓ </span>Verified
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
        {errors.email && (
          <p id="grievance-email-error" className={errorClass}>{errors.email}</p>
        )}
        {otpError && otpStatus === 'idle' && <p className={errorClass}>{otpError}</p>}
      </div>

      {/* OTP input — shown after code is sent */}
      {(otpStatus === 'sent' || otpStatus === 'verifying') && (
        <div>
          <label htmlFor="grievance-otp" className={labelClass}>
            Verification Code <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <div className="flex gap-2">
            <input
              id="grievance-otp"
              name="otp"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              aria-invalid={!!otpError}
              aria-describedby="grievance-otp-help"
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
          <p id="grievance-otp-help" className="mt-1 text-xs text-primary/60">
            Check your inbox for the 6-digit code · Valid for 10 minutes
          </p>
        </div>
      )}

      {/* PAN */}
      <div>
        <label htmlFor="grievance-pan" className={labelClass}>
          PAN of Investor <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="grievance-pan"
          name="pan"
          type="text"
          autoComplete="off"
          required
          aria-required="true"
          aria-invalid={!!errors.pan}
          aria-describedby={errors.pan ? 'grievance-pan-error' : undefined}
          placeholder="ABCDE1234F"
          value={form.pan}
          onChange={set('pan')}
          className={inputClass(!!errors.pan)}
          maxLength={10}
        />
        {errors.pan && (
          <p id="grievance-pan-error" className={errorClass}>{errors.pan}</p>
        )}
      </div>

      {/* Client ID */}
      <div>
        <label htmlFor="grievance-client-id" className={labelClass}>
          Client ID with Trivantage Capital <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="grievance-client-id"
          name="clientId"
          type="text"
          autoComplete="off"
          required
          aria-required="true"
          aria-invalid={!!errors.clientId}
          aria-describedby={errors.clientId ? 'grievance-client-id-error' : undefined}
          placeholder="Your client identifier"
          value={form.clientId}
          onChange={set('clientId')}
          className={inputClass(!!errors.clientId)}
        />
        {errors.clientId && (
          <p id="grievance-client-id-error" className={errorClass}>{errors.clientId}</p>
        )}
      </div>

      {/* Complaint Details */}
      <div>
        <label htmlFor="grievance-details" className={labelClass}>
          Details of Complaint <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="grievance-details"
          name="details"
          required
          aria-required="true"
          aria-invalid={!!errors.details}
          aria-describedby={errors.details ? 'grievance-details-error' : undefined}
          placeholder="Describe your complaint"
          value={form.details}
          onChange={set('details')}
          rows={4}
          className={inputClass(!!errors.details) + ' resize-y'}
        />
        {errors.details && (
          <p id="grievance-details-error" className={errorClass}>{errors.details}</p>
        )}
      </div>

      {serverError && (
        <p role="alert" className="text-xs text-red-500">{serverError}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-primary text-white px-8 py-2.5 rounded font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-all disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send'}
      </button>

    </form>
  );
}
