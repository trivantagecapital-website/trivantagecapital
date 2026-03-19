import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name  = formData.get('name')?.trim();
    const phone = formData.get('phone')?.trim();

    if (!name || !phone) {
      return Response.json({ error: 'Name and phone number are required.' }, { status: 400 });
    }

    if (!/^\+?[\d\s\-()\u200B]{10,15}$/.test(phone)) {
      return Response.json({ error: 'Enter a valid phone number.' }, { status: 400 });
    }

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
      subject: `Callback Request – ${name}`,
      text: `Name: ${name}\nPhone: ${phone}`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Callback submission error:', err);
    return Response.json({ error: err.message || 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
