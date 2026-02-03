import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, position, experience, resumeBase64, resumeFilename } = body;

    if (!name || !email || !position) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Ensure uploads directory exists
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

    let savedResumePath = null;
    let resumeBuffer: Buffer | null = null;
    if (resumeBase64 && resumeFilename) {
      const timestamp = Date.now();
      const safeName = resumeFilename.replace(/[^a-zA-Z0-9.\\-_]/g, '_');
      const filePath = path.join(uploadsDir, `${timestamp}_${safeName}`);
      const buffer = Buffer.from(resumeBase64, 'base64');
      fs.writeFileSync(filePath, buffer);
      savedResumePath = `/uploads/${timestamp}_${safeName}`;
      resumeBuffer = buffer;
    }

    // Save an applications JSON entry
    const appsFile = path.join(uploadsDir, 'applications.json');
    const entry = { name, email, phone, position, experience, resume: savedResumePath, createdAt: new Date().toISOString() };
    let apps = [];
    try { apps = JSON.parse(fs.readFileSync(appsFile, 'utf8') || '[]'); } catch { apps = []; }
    apps.push(entry);
    fs.writeFileSync(appsFile, JSON.stringify(apps, null, 2));

    // If HR email and SMTP configured, send an email with the application
    const HR_EMAIL = process.env.HR_EMAIL;
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : undefined;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const FROM_EMAIL = process.env.FROM_EMAIL || SMTP_USER || 'no-reply@example.com';

    if (HR_EMAIL && SMTP_HOST && SMTP_USER && SMTP_PASS && SMTP_PORT) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465, // true for 465, false for other ports
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        }
      });

      const mailOptions: any = {
        from: FROM_EMAIL,
        to: HR_EMAIL,
        subject: `New Application: ${name} — ${position}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\n\nExperience:\n${experience}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Position:</strong> ${position}</p><p><strong>Experience:</strong><br/>${experience.replace(/\n/g, '<br/>')}</p>`,
      };

      if (resumeBuffer && resumeFilename) {
        mailOptions.attachments = [
          { filename: resumeFilename, content: resumeBuffer }
        ];
      }

      try {
        await transporter.sendMail(mailOptions);
      } catch (sendErr: any) {
        // Log and continue — we already saved the app locally
        console.error('Email send error:', sendErr);
      }
    }

    return NextResponse.json({ ok: true, savedResumePath });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}
