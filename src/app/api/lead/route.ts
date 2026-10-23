import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: NextRequest) {
  try {
    const { name, phone, mode, source, website } = await request.json();
    if (website) return NextResponse.json({ success: true }); // honeypot
    const n = String(name || "").trim().slice(0, 100);
    const p = String(phone || "");
    const m = String(mode || "").slice(0, 60);
    const src = String(source || "landing").slice(0, 60);
    if (n.length < 2 || !/^[6-9]\d{9}$/.test(p)) {
      return NextResponse.json({ success: false, error: "Invalid details." }, { status: 400 });
    }
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
    });
    await transporter.sendMail({
      from: `"Shrestha IT Website" <${process.env.FROM_EMAIL}>`,
      to: process.env.FROM_EMAIL,
      subject: `New Demo Lead: ${n.replace(/[\r\n]/g, " ")} (${src.replace(/[\r\n]/g, " ")})`,
      html: `<p><b>Name:</b> ${esc(n)}</p><p><b>Mobile:</b> ${esc(p)}</p><p><b>Mode:</b> ${esc(m)}</p><p><b>Source:</b> ${esc(src)}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Lead error:", e);
    return NextResponse.json({ success: false, error: "Server error." }, { status: 500 });
  }
}
