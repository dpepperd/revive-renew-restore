
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { vehicleModel, insuranceProvider, description, contactName, phone, email } = body;

    if (!contactName || !phone || !email) {
      return NextResponse.json({ error: 'Missing required fields (Name/Phone/Email)' }, { status: 400 });
    }

    // Ensure uploads directory exists - BEST EFFORT
    try {
      const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
      if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

      // Save estimate requests to JSON
      const estimatesFile = path.join(uploadsDir, 'estimates.json');
      const entry = { 
        vehicleModel, 
        insuranceProvider, 
        description, 
        contactName, 
        phone, 
        email,
        createdAt: new Date().toISOString() 
      };

      let estimates = [];
      try { 
        if (fs.existsSync(estimatesFile)) {
          estimates = JSON.parse(fs.readFileSync(estimatesFile, 'utf8') || '[]'); 
        }
      } catch { 
        estimates = []; 
      }
      
      estimates.push(entry);
      fs.writeFileSync(estimatesFile, JSON.stringify(estimates, null, 2));
    } catch (fsError) {
      console.warn('File system persistence failed (likely read-only environment):', fsError);
    }

    // Email notification logic
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
        secure: SMTP_PORT === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        }
      });

      const mailOptions = {
        from: FROM_EMAIL,
        to: HR_EMAIL,
        subject: `New Estimate Request: ${contactName} (${vehicleModel})`,
        text: `Name: ${contactName}\nPhone: ${phone}\nEmail: ${email}\nVehicle: ${vehicleModel}\nInsurance: ${insuranceProvider}\nDescription: ${description}`,
        html: `<p><strong>Name:</strong> ${contactName}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Vehicle:</strong> ${vehicleModel}</p>
               <p><strong>Insurance:</strong> ${insuranceProvider}</p>
               <p><strong>Description:</strong><br/>${description?.replace(/\n/g, '<br/>')}</p>`,
      };

      try {
        // Race email sending against a 10s timeout to prevent hanging the Vercel function
        await Promise.race([
          transporter.sendMail(mailOptions),
          new Promise((_, reject) => setTimeout(() => reject(new Error('Email send timed out')), 10000))
        ]);
        console.log('Email sent successfully');
      } catch (sendErr: any) {
        console.error('Email send failed or timed out:', sendErr);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Estimate API error:', err);
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}
