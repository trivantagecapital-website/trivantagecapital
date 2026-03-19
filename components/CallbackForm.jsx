'use client';

import { useState } from 'react';

const inputClass = (hasError) =>
  `w-full bg-white border rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all text-primary ${
    hasError ? 'border-red-400' : 'border-primary/10'
  }`;

export default function CallbackForm() {
  const [name, setName]           = useState('');
  const [phone, setPhone]         = useState('');
  const [errors, setErrors]       = useState({});
  const [status, setStatus]       = useState('idle');
  const [serverError, setServerError] = useState('');

  function validate() {
    const e = {};
    if (!name.trim()) e.name = 'Name is required.';
    if (!phone.trim()) {
      e.phone = 'Phone number is required.';
    } else if (!/^\+?[\d\s\-()\u200B]{10,15}$/.test(phone.trim())) {
      e.phone = 'Enter a valid phone number.';
    }
    return e;
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
    data.append('phone', phone.trim());

    try {
      const res  = await fetch('/api/callback', { method: 'POST', body: data });
      const json = await res.json();
      if (!res.ok) {
        setServerError(json.error || 'Something went wrong.');
        setStatus('error');
      } else {
        setStatus('success');
        setName('');
        setPhone('');
      }
    } catch {
      setServerError('Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center py-10 gap-3">
        <span className="material-symbols-outlined text-4xl text-primary">check_circle</span>
        <p className="text-primary font-semibold">Request Submitted</p>
        <p className="text-primary/60 text-sm">We'll call you back shortly.</p>
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
    <form onSubmit={handleSubmit} noValidate className="max-w-3xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label htmlFor="cb_name" className="block text-xs font-bold uppercase tracking-widest text-primary/60 mb-2">
            Name
          </label>
          <input
            type="text" id="cb_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass(!!errors.name)}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="cb_phone" className="block text-xs font-bold uppercase tracking-widest text-primary/60 mb-2">
            Phone No.
          </label>
          <input
            type="tel" id="cb_phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass(!!errors.phone)}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>

      </div>

      {serverError && <p className="text-xs text-red-500">{serverError}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-primary text-white px-6 py-3.5 rounded font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-all disabled:opacity-60"
      >
        {status === 'loading' ? 'Submitting…' : 'Submit Request'}
      </button>
    </form>
  );
}
