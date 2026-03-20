import crypto from 'crypto';

const SECRET = process.env.OTP_SECRET || 'trivantage-otp-fallback-secret';

function hmac(data) {
  return crypto.createHmac('sha256', SECRET).update(data).digest('hex');
}

// Hash OTP so the returned token doesn't expose the plaintext code
function hashOtp(otp, email) {
  return hmac(`${otp}|${email}`);
}

/**
 * Creates a signed token embedding a hashed OTP (valid 10 min).
 * Returns a base64url string safe to send to the client.
 */
export function createOtpToken(email, otp) {
  const exp = Date.now() + 10 * 60 * 1000;
  const normalizedEmail = email.toLowerCase().trim();
  const hashedOtp = hashOtp(otp, normalizedEmail);
  const payload = `${normalizedEmail}|${hashedOtp}|${exp}`;
  const sig = hmac(payload);
  return Buffer.from(JSON.stringify({ email: normalizedEmail, hashedOtp, exp, sig })).toString('base64url');
}

/**
 * Verifies the OTP token against a user-supplied OTP.
 * Returns the email on success, or null on failure.
 */
export function verifyOtpToken(token, inputOtp) {
  try {
    const { email, hashedOtp, exp, sig } = JSON.parse(Buffer.from(token, 'base64url').toString());
    const payload = `${email}|${hashedOtp}|${exp}`;
    if (hmac(payload) !== sig) return null;
    if (Date.now() > exp) return null;
    if (hashOtp(inputOtp, email) !== hashedOtp) return null;
    return email;
  } catch {
    return null;
  }
}

/**
 * Creates a short-lived "email verified" token (valid 30 min) to include in the final submission.
 */
export function createVerifiedToken(email) {
  const exp = Date.now() + 30 * 60 * 1000;
  const normalizedEmail = email.toLowerCase().trim();
  const payload = `verified|${normalizedEmail}|${exp}`;
  const sig = hmac(payload);
  return Buffer.from(JSON.stringify({ email: normalizedEmail, exp, sig })).toString('base64url');
}

/**
 * Checks that the verified token is valid and matches the given email.
 */
export function checkVerifiedToken(token, email) {
  try {
    const { email: tEmail, exp, sig } = JSON.parse(Buffer.from(token, 'base64url').toString());
    const payload = `verified|${tEmail}|${exp}`;
    if (hmac(payload) !== sig) return false;
    if (Date.now() > exp) return false;
    if (tEmail !== email.toLowerCase().trim()) return false;
    return true;
  } catch {
    return false;
  }
}
