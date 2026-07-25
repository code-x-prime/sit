import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  course?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    const { name, phone, email, course, message } = body;

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All required fields must be filled out." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const selectedCourse = course || "Indian Equity Market";

    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f8fc; }
          .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .header { background: #01488a; color: white; padding: 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 20px; }
          .header p { margin: 4px 0 0; font-size: 12px; opacity: 0.8; }
          .body { padding: 24px; }
          .field { margin-bottom: 16px; }
          .field-label { font-size: 11px; font-weight: 700; color: #5a6b80; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
          .field-value { font-size: 14px; color: #0a1628; background: #f5f8fc; padding: 10px 14px; border-radius: 8px; border: 1px solid #dce6f2; }
          .message-box { background: #f5f8fc; border: 1px solid #dce6f2; border-radius: 8px; padding: 14px; font-size: 14px; color: #0a1628; line-height: 1.6; white-space: pre-wrap; }
          .footer { padding: 16px 24px; text-align: center; font-size: 11px; color: #5a6b80; border-top: 1px solid #dce6f2; }
          .badge { display: inline-block; background: #f5b800; color: #0a1628; font-size: 10px; font-weight: 700; padding: 3px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.05em; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📩 New Contact Enquiry</h1>
            <p>Shrestha IT Academy — Website Contact Form</p>
          </div>
          <div class="body">
            <div style="text-align:center; margin-bottom:20px;">
              <span class="badge">New Enquiry</span>
            </div>
            <div class="field">
              <div class="field-label">Full Name</div>
              <div class="field-value">${name}</div>
            </div>
            <div class="field">
              <div class="field-label">Phone Number</div>
              <div class="field-value">${phone}</div>
            </div>
            <div class="field">
              <div class="field-label">Email Address</div>
              <div class="field-value">${email}</div>
            </div>
            <div class="field">
              <div class="field-label">Selected Course Interest</div>
              <div class="field-value" style="font-weight: 700; color: #01488a;">${selectedCourse}</div>
            </div>
            <div class="field">
              <div class="field-label">Message / Query</div>
              <div class="message-box">${message}</div>
            </div>
          </div>
          <div class="footer">
            This enquiry was submitted from the Shrestha IT website contact form.<br/>
            Received at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Shrestha IT Website" <${process.env.FROM_EMAIL}>`,
      to: process.env.FROM_EMAIL,
      replyTo: email,
      subject: `New Enquiry from ${name} — Shrestha IT Contact Form`,
      html: adminEmailHtml,
    });

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully! We will contact you shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
