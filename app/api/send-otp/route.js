import nodemailer from 'nodemailer';
import { createOtpToken } from '@/lib/otp-token';

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return Response.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    const otp = generateOtp();
    const token = createOtpToken(email.trim(), otp);

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
      to: email.trim(),
      subject: 'Your verification code – Trivantage Capital',
      text: `Your verification code is: ${otp}\n\nThis code expires in 10 minutes. If you did not request this, please ignore this email.`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;">
          <p style="color:#555;margin-bottom:8px;">Your verification code for the Trivantage Capital job application is:</p>
          <h1 style="letter-spacing:12px;font-size:40px;color:#1a1a1a;margin:16px 0;">${otp}</h1>
          <p style="color:#888;font-size:13px;">This code expires in <strong>10 minutes</strong>.<br>If you did not request this, you can safely ignore this email.</p>
        </div>
      `,
    });

    return Response.json({ token });
  } catch (err) {
    console.error('OTP send error:', err);
    return Response.json({ error: 'Failed to send verification code. Please try again.' }, { status: 500 });
  }
}
