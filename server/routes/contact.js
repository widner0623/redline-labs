import { Resend } from "resend";
import Contact from "../models/Contact.js";

export const sendContactEmail = async (req, res) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, phone, email, message } = req.body;

    if (!name || !phone || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        error: "Phone number must be in the format (123) 456-7890",
      });
    }

    await Contact.create({
      name,
      phone,
      email,
      message,
    });

    // Email sent to YOU
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: [process.env.EMAIL_TO],
      subject: `New Redline Systems Co Project Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#0b0b0b; padding:30px;">
          <div style="max-width:650px; margin:auto; background:#ffffff; padding:30px; border-radius:12px;">
            <h1 style="color:#dc2626; margin-bottom:10px;">New Project Inquiry</h1>
            <p style="color:#555;">A new lead submitted the Redline Systems Co contact form.</p>

            <hr style="margin:25px 0;" />

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>

            <h3 style="margin-top:25px;">Project Details:</h3>
            <p style="line-height:1.6;">${message}</p>

            <hr style="margin:25px 0;" />

            <p style="font-size:13px; color:#777;">
              Sent from the Redline Systems Co website contact form.
            </p>
          </div>
        </div>
      `,
    });

    // Auto-response sent to CLIENT
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: [email],
      subject: "We received your message — Redline Systems Co",
      html: `
        <div style="font-family: Arial, sans-serif; background:#0b0b0b; padding:30px;">
          <div style="max-width:650px; margin:auto; background:#ffffff; padding:30px; border-radius:12px;">
            <h1 style="color:#dc2626;">Thanks for reaching out, ${name}.</h1>

            <p style="line-height:1.6; color:#333;">
              Your message has been received by Redline Systems Co. I’ll review your project details and get back to you as soon as possible.
            </p>

            <p style="line-height:1.6; color:#333;">
              In the meantime, here’s a copy of what you sent:
            </p>

            <div style="background:#f5f5f5; padding:20px; border-left:4px solid #dc2626; margin:25px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Project Details:</strong></p>
              <p style="line-height:1.6;">${message}</p>
            </div>

            <p style="line-height:1.6; color:#333;">
              Talk soon,<br />
              <strong>Derrick Widner</strong><br />
              Redline Systems Co
            </p>

            <hr style="margin:25px 0;" />

            <p style="font-size:13px; color:#777;">
              This is an automated confirmation email from Redline Systems Co.
            </p>
          </div>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    res.status(500).json({ error: "Failed to process request" });
  }
};