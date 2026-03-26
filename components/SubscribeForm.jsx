'use client';

import { useState } from 'react';

const inputClass =
  'px-4 py-3 bg-white border border-transparent focus:border-primary/20 focus:outline-none w-full text-sm font-sans';

const btnClass =
  'px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-bold text-xs uppercase tracking-widest transition-colors w-full font-sans disabled:opacity-40 disabled:cursor-not-allowed';

const errorClass = 'mt-1 text-xs text-red-500';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [otpStatus, setOtpStatus] = useState('idle'); // idle | sending | sent | verifying | verified
  const [otpToken, setOtpToken] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [verifiedToken, setVerifiedToken] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverError, setServerError] = useState('');

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

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
      }
    } catch {
      setOtpStatus('sent');
      setOtpError('Verification failed. Please try again.');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setServerError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), verifiedToken }),
      });
      const json = await res.json();
      if (!res.ok) {
        setServerError(json.error || 'Something went wrong.');
        setStatus('error');
      } else {
        setStatus('success');
      }
    } catch {
      setServerError('Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p className="text-sm font-sans text-primary/70 leading-relaxed">
        You&apos;re subscribed! You&apos;ll receive new insights directly in your inbox.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 border border-primary/40 rounded">
      {/* Email + Send OTP */}
      <div>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            readOnly={otpStatus === 'verified'}
            className={`${inputClass} flex-1 ${otpStatus === 'verified' ? 'opacity-70' : ''}`}
          />
          {otpStatus !== 'verified' && (
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={!emailIsValid || otpStatus === 'sending' || otpStatus === 'verifying'}
              className="shrink-0 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary font-bold text-[10px] uppercase tracking-widest transition-colors font-sans disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {otpStatus === 'sending' ? '...' : otpStatus === 'sent' ? 'Resend' : 'Send Code'}
            </button>
          )}
          {otpStatus === 'verified' && (
            <span className="shrink-0 flex items-center px-2 text-xs font-semibold text-green-600 font-sans">
              ✓
            </span>
          )}
        </div>
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
              className={`${inputClass} flex-1 tracking-widest`}
              placeholder="6-digit code"
              maxLength={6}
            />
            <button
              type="button"
              onClick={handleVerifyOtp}
              disabled={otp.length !== 6 || otpStatus === 'verifying'}
              className="shrink-0 px-3 py-2 bg-primary text-white font-bold text-[10px] uppercase tracking-widest transition-colors font-sans disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {otpStatus === 'verifying' ? '...' : 'Verify'}
            </button>
          </div>
          {otpError && <p className={errorClass}>{otpError}</p>}
          <p className="mt-1 text-[10px] text-primary/40 font-sans">Check your inbox · Valid 10 min</p>
        </div>
      )}

      {/* Subscribe button — shown once verified */}
      {otpStatus === 'verified' && (
        <>
          {serverError && <p className={errorClass}>{serverError}</p>}
          <button
            type="submit"
            disabled={status === 'loading'}
            className={btnClass}
          >
            {status === 'loading' ? 'Subscribing...' : 'Join Archive'}
          </button>
        </>
      )}
    </form>
  );
}
