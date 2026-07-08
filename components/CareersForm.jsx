'use client';

import { useState } from 'react';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const inputClass = (hasError) =>
  `w-full bg-background-light border rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all text-primary placeholder-primary/70 ${
    hasError ? 'border-red-400' : 'border-primary/50'
  }`;

const labelClass =
  'block text-xs font-bold uppercase tracking-widest text-primary/70 mb-2';

const errorClass = 'mt-1 text-xs text-red-500';

export default function CareersForm({ jobs }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', role: '' });
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverError, setServerError] = useState('');

  // Email OTP state
  const [otpStatus, setOtpStatus] = useState('idle'); // idle | sending | sent | verifying | verified
  const [otpToken, setOtpToken] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [verifiedToken, setVerifiedToken] = useState('');

  function set(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleEmailChange(e) {
    set('email')(e);
    // Reset verification if email changes after OTP was sent
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
    if (!form.name.trim()) e.name = 'Name is required.';

    if (!form.phone.trim()) {
      e.phone = 'Phone is required.';
    } else if (!/^\+?[\d\s\-()\u200B]{10,15}$/.test(form.phone.trim())) {
      e.phone = 'Enter a valid phone number.';
    }

    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = 'Enter a valid email address.';
    } else if (otpStatus !== 'verified') {
      e.email = 'Please verify your email address.';
    }

    if (!form.role) e.role = 'Please select a role.';

    if (!resume) {
      e.resume = 'Resume is required.';
    } else if (resume.type !== 'application/pdf') {
      e.resume = 'Only PDF files are accepted.';
    } else if (resume.size > MAX_FILE_SIZE) {
      e.resume = 'Resume must be under 5MB.';
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
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('loading');
    setServerError('');

    const data = new FormData();
    data.append('name',          form.name.trim());
    data.append('phone',         form.phone.trim());
    data.append('email',         form.email.trim());
    data.append('role',          form.role);
    data.append('resume',        resume);
    data.append('verifiedToken', verifiedToken);

    try {
      const res  = await fetch('/api/apply', { method: 'POST', body: data });
      const json = await res.json();
      if (!res.ok) {
        setServerError(json.error || 'Something went wrong.');
        setStatus('error');
      } else {
        setStatus('success');
        setForm({ name: '', phone: '', email: '', role: '' });
        setResume(null);
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
      <div role="status" aria-live="polite" className="bg-white p-8 rounded-lg border border-primary/5 flex flex-col items-center justify-center text-center min-h-[360px]">
        <span className="material-symbols-outlined text-5xl text-primary mb-4" aria-hidden="true">check_circle</span>
        <h3 className="serif-heading text-2xl text-primary mb-3">Application Submitted</h3>
        <p className="text-primary/70 text-sm leading-relaxed max-w-xs">
          Your application has been submitted successfully. We'll be in touch soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 text-xs font-bold uppercase tracking-widest text-primary/40 underline hover:text-primary transition-colors"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg border border-primary/5">
      <h3 className="serif-heading text-2xl text-primary mb-6">Apply Now</h3>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">

        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="text" id="name" name="name"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            value={form.name}
            onChange={set('name')}
            className={inputClass(!!errors.name)}
            placeholder="Your full name"
          />
          {errors.name && <p id="name-error" className={errorClass}>{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="tel" id="phone" name="phone"
            autoComplete="tel"
            required
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            value={form.phone}
            onChange={set('phone')}
            className={inputClass(!!errors.phone)}
            placeholder="Your phone number"
          />
          {errors.phone && <p id="phone-error" className={errorClass}>{errors.phone}</p>}
        </div>

        {/* Email + OTP */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <div className="flex gap-2">
            <input
              type="email" id="email" name="email"
              autoComplete="email"
              required
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              value={form.email}
              onChange={handleEmailChange}
              readOnly={otpStatus === 'verified'}
              className={`${inputClass(!!errors.email)} flex-1 ${otpStatus === 'verified' ? 'opacity-70' : ''}`}
              placeholder="you@example.com"
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
          {errors.email && <p id="email-error" className={errorClass}>{errors.email}</p>}
          {otpError && otpStatus === 'idle' && <p className={errorClass}>{otpError}</p>}
        </div>

        {/* OTP input — shown after code is sent */}
        {(otpStatus === 'sent' || otpStatus === 'verifying') && (
          <div>
            <label htmlFor="careers-otp" className={labelClass}>
              Verification Code <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <div className="flex gap-2">
              <input
                id="careers-otp"
                name="otp"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                aria-invalid={!!otpError}
                aria-describedby="careers-otp-help"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                className={`${inputClass(!!otpError)} flex-1 tracking-widest`}
                placeholder="6-digit code"
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
            <p id="careers-otp-help" className="mt-1 text-xs text-primary/70">
              Check your inbox for the 6-digit code · Valid for 10 minutes
            </p>
          </div>
        )}

        {/* Applying For */}
        <div>
          <label htmlFor="role" className={labelClass}>
            Applying For <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="role"
            name="role"
            required
            aria-required="true"
            aria-invalid={!!errors.role}
            aria-describedby={errors.role ? 'role-error' : undefined}
            value={form.role}
            onChange={set('role')}
            className={`${inputClass(!!errors.role)} ${!form.role ? 'text-primary/70' : 'text-primary'}`}
          >
            <option value="" disabled>Select a Role</option>
            {jobs.map((job) => (
              <option key={job.ID} value={job.title}>{job.title}</option>
            ))}
          </select>
          {errors.role && <p id="role-error" className={errorClass}>{errors.role}</p>}
        </div>

        {/* Resume */}
        <div>
          <label htmlFor="resume" className={labelClass}>
            Resume <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="file" id="resume" name="resume"
            accept=".pdf"
            required
            aria-required="true"
            aria-invalid={!!errors.resume}
            aria-describedby={errors.resume ? 'resume-error' : 'resume-help'}
            onChange={(e) => setResume(e.target.files?.[0] || null)}
            className="w-full text-sm text-primary/70 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-all"
          />
          {errors.resume
            ? <p id="resume-error" className={errorClass}>{errors.resume}</p>
            : <p id="resume-help" className="mt-1 text-xs text-primary/70">PDF only · Max 5MB</p>
          }
        </div>

        {serverError && (
          <p role="alert" className="text-xs text-red-500">{serverError}</p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-primary text-white px-6 py-3.5 rounded font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-all disabled:opacity-60"
        >
          {status === 'loading' ? 'Submitting...' : 'Submit Application'}
        </button>

      </form>
    </div>
  );
}
