import { Resend } from "resend";
import Contact from "../models/Contact.js";

export const sendContactEmail = async (req, res) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, phone, email, message } = req.body;

    // 🔒 Validation
    if (!name || !phone || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // 🔥 SAVE TO MONGODB
    await Contact.create({
      name,
      phone,
      email,
      message,
    });

    // 🔥 SEND EMAIL
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "Redline Labs <onboarding@resend.dev>",
      to: [process.env.EMAIL_TO],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    res.status(500).json({ error: "Failed to process request" });
  }
};