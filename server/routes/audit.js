import { Resend } from "resend";
import AuditRequest from "../models/AuditRequest.js";

export const sendAuditRequest = async (req, res) => {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        const {
            businessName,
            websiteUrl,
            name,
            email,
            phone,
            auditType,
            concerns,
        } = req.body;

        if (!businessName || !websiteUrl || !name || !email || !auditType) {
            return res.status(400).json({
                error: "Business name, website URL, name, email, and audit package are required",
            });
        }

        const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

        if (phone && !phoneRegex.test(phone)) {
            return res.status(400).json({
                error: "Phone number must be in the format (123) 456-7890",
            });
        }

        await AuditRequest.create({
            businessName,
            websiteUrl,
            name,
            email,
            phone,
            auditType,
            concerns,
        });

        await resend.emails.send({
            from: process.env.EMAIL_FROM,
            to: [process.env.EMAIL_TO],
            subject: `New Website Audit Request from ${businessName}`,
            html: `
                <div style="font-family: Arial, sans-serif; background:#0b0b0b; padding:30px;">
                <div style="max-width:650px; margin:auto; background:#ffffff; padding:30px; border-radius:12px;">
                    <h1 style="color:#dc2626; margin-bottom:10px;">New Website Audit Request</h1>
                    <p style="color:#555;">A new website audit request was submitted through Redline Systems Co.</p>

                    <hr style="margin:25px 0;" />

                    <p><strong>Business Name:</strong> ${businessName}</p>
                    <p><strong>Website URL:</strong> <a href="${websiteUrl}" target="_blank">${websiteUrl}</a></p>
                    <p><strong>Audit Package:</strong> ${auditType}</p>

                    <h3 style="margin-top:25px;">Contact Information:</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
                    <p><strong>Email:</strong> ${email}</p>

                    <h3 style="margin-top:25px;">Concerns / Notes:</h3>
                    <p style="line-height:1.6;">${concerns || "No concerns provided."}</p>

                    <hr style="margin:25px 0;" />

                    <p style="font-size:13px; color:#777;">
                    Sent from the Redline Systems Co website audit request form.
                    </p>
                </div>
                </div>
            `,
            });

            await resend.emails.send({
            from: process.env.EMAIL_FROM,
            to: [email],
            subject: "We received your website audit request — Redline Systems Co",
            html: `
                <div style="font-family: Arial, sans-serif; background:#0b0b0b; padding:30px;">
                <div style="max-width:650px; margin:auto; background:#ffffff; padding:30px; border-radius:12px;">
                    <h1 style="color:#dc2626;">Thanks for requesting a website audit, ${name}.</h1>

                    <p style="line-height:1.6; color:#333;">
                    Your website audit request has been received by Redline Systems Co. I’ll review your website and request details, then follow up with the recommended next step and invoice before any work begins.
                    </p>

                    <p style="line-height:1.6; color:#333;">
                    Here’s a copy of what you submitted:
                    </p>

                    <div style="background:#f5f5f5; padding:20px; border-left:4px solid #dc2626; margin:25px 0;">
                    <p><strong>Business Name:</strong> ${businessName}</p>
                    <p><strong>Website URL:</strong> ${websiteUrl}</p>
                    <p><strong>Audit Package:</strong> ${auditType}</p>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Concerns / Notes:</strong></p>
                    <p style="line-height:1.6;">${concerns || "No concerns provided."}</p>
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
                console.error("AUDIT REQUEST ERROR:", err);
                res.status(500).json({ error: "Failed to process audit request" });
        }
    };