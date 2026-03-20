import { verifyOtpToken, createVerifiedToken } from '@/lib/otp-token';

export async function POST(request) {
  try {
    const { token, otp } = await request.json();

    if (!token || !otp) {
      return Response.json({ error: 'Token and code are required.' }, { status: 400 });
    }

    const email = verifyOtpToken(token, otp.trim());

    if (!email) {
      return Response.json({ error: 'Invalid or expired code. Please try again.' }, { status: 400 });
    }

    const verifiedToken = createVerifiedToken(email);
    return Response.json({ verifiedToken });
  } catch (err) {
    console.error('OTP verify error:', err);
    return Response.json({ error: 'Verification failed. Please try again.' }, { status: 500 });
  }
}
