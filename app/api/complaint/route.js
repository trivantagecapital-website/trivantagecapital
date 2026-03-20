import nodemailer from 'nodemailer';
import { checkVerifiedToken } from '@/lib/otp-token';

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
    const email          = formData.get('email')?.trim();
    const pan            = formData.get('pan')?.trim().toUpperCase();
    const clientId       = formData.get('clientId')?.trim();
    const details        = formData.get('details')?.trim();
    const verifiedToken  = formData.get('verifiedToken');

    // --- Required field validation ---
    if (!name || !address || !pincode || !state || !city || !mobile || !email || !pan || !clientId || !details) {
      return Response.json({ error: 'All required fields must be filled.' }, { status: 400 });
    }

    if (!/^\d{10}$/.test(mobile)) {
      return Response.json({ error: 'Mobile number must be exactly 10 digits.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Enter a valid email address.' }, { status: 400 });
    }

    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan)) {
      return Response.json({ error: 'Enter a valid PAN (e.g. ABCDE1234F).' }, { status: 400 });
    }

    // --- Email verification check ---
    if (!verifiedToken || !checkVerifiedToken(verifiedToken, email)) {
      return Response.json({ error: 'Email address is not verified. Please verify your email before submitting.' }, { status: 400 });
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
        `Email Address: ${email}`,
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
