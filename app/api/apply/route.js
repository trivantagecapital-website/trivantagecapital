import nodemailer from 'nodemailer';
import { checkVerifiedToken } from '@/lib/otp-token';

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name          = formData.get('name')?.trim();
    const phone         = formData.get('phone')?.trim();
    const email         = formData.get('email')?.trim();
    const role          = formData.get('role')?.trim();
    const resume        = formData.get('resume');
    const verifiedToken = formData.get('verifiedToken');

    // --- Server-side validation ---
    if (!name || !phone || !email || !role) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 });
    }

    if (!verifiedToken || !checkVerifiedToken(verifiedToken, email)) {
      return Response.json({ error: 'Email address is not verified. Please verify your email before submitting.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    if (!/^\+?[\d\s\-()\u200B]{10,15}$/.test(phone)) {
      return Response.json({ error: 'Enter a valid phone number.' }, { status: 400 });
    }

    if (!resume || resume.size === 0) {
      return Response.json({ error: 'Resume is required.' }, { status: 400 });
    }

    if (resume.type !== 'application/pdf') {
      return Response.json({ error: 'Only PDF files are accepted.' }, { status: 400 });
    }

    if (resume.size > 5 * 1024 * 1024) {
      return Response.json({ error: 'Resume must be under 5MB.' }, { status: 400 });
    }

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

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
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT_CAREERS,
      subject: `New Job Application – ${role}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nApplying For: ${role}`,
      attachments: [
        {
          filename: resume.name || 'resume.pdf',
          content: resumeBuffer,
          contentType: 'application/pdf',
        },
      ],
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Application submission error:', err);
    return Response.json({ error: err.message || 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
