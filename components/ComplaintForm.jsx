'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const inputClass = (hasError) =>
  `w-full border rounded px-4 py-2.5 text-sm text-primary placeholder-primary/30 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all ${
    hasError ? 'border-red-400 bg-red-50' : 'border-primary/15 bg-white'
  }`;

const errorClass = 'mt-1 text-xs text-red-500';

const INITIAL = {
  name: '', lodgedBy: '', address: '', pincode: '',
  state: '', city: '', mobile: '', pan: '', clientId: '', details: '',
};

export default function ComplaintForm() {
  const [form, setForm]               = useState(INITIAL);
  const [errors, setErrors]           = useState({});
  const [status, setStatus]           = useState('idle');
  const [serverError, setServerError] = useState('');
  const recaptchaRef = useRef(null);

  const set = (field) => (e) =>
    setForm((f) => ({
      ...f,
      [field]: field === 'pan' ? e.target.value.toUpperCase() : e.target.value,
    }));

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
    if (!form.pan.trim()) {
      e.pan = 'PAN is required.';
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(form.pan.trim())) {
      e.pan = 'Enter a valid PAN (e.g. ABCDE1234F).';
    }
    if (!form.clientId.trim()) e.clientId = 'Client ID is required.';
    if (!form.details.trim())  e.details  = 'Please describe your complaint.';
    return e;
  }

  // Called by reCAPTCHA onChange once the invisible challenge resolves
  async function doSubmit(token) {
    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));
    data.append('recaptchaToken', token);

    try {
      const res  = await fetch('/api/complaint', { method: 'POST', body: data });
      const json = await res.json();
      if (!res.ok) {
        setServerError(json.error || 'Something went wrong.');
        setStatus('error');
        recaptchaRef.current?.reset();
      } else {
        setStatus('success');
        setForm(INITIAL);
        recaptchaRef.current?.reset();
      }
    } catch {
      setServerError('Something went wrong. Please try again.');
      setStatus('error');
      recaptchaRef.current?.reset();
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setErrors({});
    setStatus('loading');
    setServerError('');
    // Triggers the invisible reCAPTCHA; doSubmit fires via onChange when done
    recaptchaRef.current?.execute();
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 gap-4">
        <span className="material-symbols-outlined text-5xl text-primary">check_circle</span>
        <h3 className="serif-heading text-2xl text-primary">Complaint Submitted</h3>
        <p className="text-primary/60 text-sm max-w-sm">
          Your complaint has been registered successfully. We will review it and get back to you.
        </p>
        <button
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
        <input type="text" placeholder="Name*" value={form.name} onChange={set('name')}
          className={inputClass(!!errors.name)} />
        {errors.name && <p className={errorClass}>{errors.name}</p>}
      </div>

      {/* Complaint Lodged By */}
      <div>
        <input type="text" placeholder="Complaint Lodged by" value={form.lodgedBy} onChange={set('lodgedBy')}
          className={inputClass(false)} />
      </div>

      {/* Address */}
      <div>
        <input type="text" placeholder="Correspondence Address of Investor*" value={form.address} onChange={set('address')}
          className={inputClass(!!errors.address)} />
        {errors.address && <p className={errorClass}>{errors.address}</p>}
      </div>

      {/* Pincode */}
      <div>
        <input type="text" placeholder="Pincode*" value={form.pincode} onChange={set('pincode')}
          className={inputClass(!!errors.pincode)} maxLength={6} />
        {errors.pincode && <p className={errorClass}>{errors.pincode}</p>}
      </div>

      {/* State */}
      <div>
        <input type="text" placeholder="State/UT*" value={form.state} onChange={set('state')}
          className={inputClass(!!errors.state)} />
        {errors.state && <p className={errorClass}>{errors.state}</p>}
      </div>

      {/* City */}
      <div>
        <input type="text" placeholder="City/Location*" value={form.city} onChange={set('city')}
          className={inputClass(!!errors.city)} />
        {errors.city && <p className={errorClass}>{errors.city}</p>}
      </div>

      {/* Mobile */}
      <div>
        <input type="tel" placeholder="Mobile Number*" value={form.mobile} onChange={set('mobile')}
          className={inputClass(!!errors.mobile)} maxLength={10} />
        {errors.mobile && <p className={errorClass}>{errors.mobile}</p>}
      </div>

      {/* PAN */}
      <div>
        <input type="text" placeholder="PAN of Investor*" value={form.pan} onChange={set('pan')}
          className={inputClass(!!errors.pan)} maxLength={10} />
        {errors.pan && <p className={errorClass}>{errors.pan}</p>}
      </div>

      {/* Client ID */}
      <div>
        <input type="text" placeholder="Client Id With Trivantage Capital*" value={form.clientId} onChange={set('clientId')}
          className={inputClass(!!errors.clientId)} />
        {errors.clientId && <p className={errorClass}>{errors.clientId}</p>}
      </div>

      {/* Complaint Details */}
      <div>
        <textarea
          placeholder="Write Details of Complaint*"
          value={form.details}
          onChange={set('details')}
          rows={4}
          className={inputClass(!!errors.details) + ' resize-y'}
        />
        {errors.details && <p className={errorClass}>{errors.details}</p>}
      </div>

      {serverError && <p className="text-xs text-red-500">{serverError}</p>}

      {/* Invisible reCAPTCHA — no UI rendered, fires on execute() */}
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        size="invisible"
        onChange={doSubmit}
        onExpired={() => { setStatus('error'); setServerError('reCAPTCHA expired. Please try again.'); }}
        onErrored={() => { setStatus('error'); setServerError('reCAPTCHA error. Please try again.'); }}
      />

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
