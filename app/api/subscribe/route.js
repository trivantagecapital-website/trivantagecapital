import { checkVerifiedToken } from '@/lib/otp-token';

export async function POST(request) {
  try {
    const { email, verifiedToken } = await request.json();

    if (!email || !verifiedToken) {
      return Response.json({ error: 'Email and verified token are required.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    if (!checkVerifiedToken(verifiedToken, email.trim())) {
      return Response.json({ error: 'Email not verified. Please verify your email first.' }, { status: 400 });
    }

    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        listIds: [Number(process.env.BREVO_LIST_ID)],
        updateEnabled: true,
      }),
    });

    if (!res.ok && res.status !== 204) {
      const err = await res.json().catch(() => ({}));
      console.error('Brevo API error:', err);
      return Response.json({ error: 'Failed to subscribe. Please try again.' }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
