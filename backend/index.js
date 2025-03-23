import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;
  const AdminEmail = process.env.EMAIL_USER;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const response = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: AdminEmail,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 16px; background-color: #f5f5f5; border-radius: 4px;">
            ${message.replace(/\n/g, "<br />")}
          </div>
        </div>
      `,
    });

    console.log("Email sent:", response);
    res.status(200).json({ message: "Email sent successfully", response });
  } catch (error) {
    console.error("Failed to send email:", error);
    res
      .status(500)
      .json({ error: "Failed to send email", details: error.message });
  }
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
