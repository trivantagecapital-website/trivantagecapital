import { getResend, RESEND_FROM } from '@/lib/resend';
import { checkVerifiedToken } from '@/lib/otp-token';

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name          = formData.get('name')?.trim();
    const email         = formData.get('email')?.trim();
    const phone         = formData.get('phone')?.trim();
    const verifiedToken = formData.get('verifiedToken')?.trim();

    if (!name || !phone) {
      return Response.json({ error: 'Name and phone number are required.' }, { status: 400 });
    }

    if (!/^\+?[\d\s\-()\u200B]{10,15}$/.test(phone)) {
      return Response.json({ error: 'Enter a valid phone number.' }, { status: 400 });
    }

    if (email) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return Response.json({ error: 'Enter a valid email address.' }, { status: 400 });
      }
      if (!verifiedToken || !checkVerifiedToken(verifiedToken, email)) {
        return Response.json({ error: 'Email verification is required.' }, { status: 400 });
      }
    }

    const { error } = await getResend().emails.send({
      from: RESEND_FROM,
      to: process.env.EMAIL_RECIPIENT_INVEST,
      replyTo: email || undefined,
      subject: `Callback Request – ${name}`,
      text: `Name: ${name}\nEmail: ${email || 'Not provided'}\nPhone: ${phone}`,
    });

    if (error) {
      console.error('Callback submission error:', error);
      return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Callback submission error:', err);
    return Response.json({ error: err.message || 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
