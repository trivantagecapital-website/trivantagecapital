import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name           = formData.get('name')?.trim();
    const lodgedBy       = formData.get('lodgedBy')?.trim();
    const address        = formData.get('address')?.trim();
    const pincode        = formData.get('pincode')?.trim();
    const state          = formData.get('state')?.trim();
    const city           = formData.get('city')?.trim();
    const mobile         = formData.get('mobile')?.trim();
    const pan            = formData.get('pan')?.trim().toUpperCase();
    const clientId       = formData.get('clientId')?.trim();
    const details        = formData.get('details')?.trim();
    const recaptchaToken = formData.get('recaptchaToken')?.trim();

    // --- Required field validation ---
    if (!name || !address || !pincode || !state || !city || !mobile || !pan || !clientId || !details) {
      return Response.json({ error: 'All required fields must be filled.' }, { status: 400 });
    }

    if (!/^\d{10}$/.test(mobile)) {
      return Response.json({ error: 'Mobile number must be exactly 10 digits.' }, { status: 400 });
    }

    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan)) {
      return Response.json({ error: 'Enter a valid PAN (e.g. ABCDE1234F).' }, { status: 400 });
    }

    // --- reCAPTCHA verification ---
    if (!recaptchaToken) {
      return Response.json({ error: 'Please complete the reCAPTCHA verification.' }, { status: 400 });
    }

    const captchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });
    const captchaData = await captchaRes.json();
    if (!captchaData.success) {
      return Response.json({ error: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 });
    }

    // --- Send email ---
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `New Complaint Registration – ${name}`,
      text: [
        `Name: ${name}`,
        `Complaint Lodged By: ${lodgedBy || '—'}`,
        `Correspondence Address: ${address}`,
        `Pincode: ${pincode}`,
        `State/UT: ${state}`,
        `City/Location: ${city}`,
        `Mobile Number: ${mobile}`,
        `PAN of Investor: ${pan}`,
        `Client ID with Trivantage Capital: ${clientId}`,
        `\nDetails of Complaint:\n${details}`,
      ].join('\n'),
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Complaint submission error:', err);
    return Response.json({ error: err.message || 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
