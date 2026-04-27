import { Resend } from 'resend';

let _client;

export function getResend() {
  if (!_client) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error('RESEND_API_KEY is not set');
    _client = new Resend(apiKey);
  }
  return _client;
}

export const RESEND_FROM = process.env.RESEND_FROM;
