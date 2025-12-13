import FormData from "form-data";
import Mailgun from "mailgun.js";

async function sendSimpleMessage(formData) {
  const mailgun = new Mailgun(FormData);

  const mg = mailgun.client({
    username: "api",
    key: process.env.API_KEY,
  });

  try {
    const data = await mg.messages.create(
      "sandboxbb6cd8ef3cf747439043398891f9f49b.mailgun.org",
      {
        from: "EMP Tech <no-reply@emptechservices.com>",
        to: ["Meshil Maring <dsmeshilmaring13@gmail.com>"],
        replyTo: formData.email,
        subject: `New Contact: ${formData.type}`,

        html: `
          <div style="font-family: Arial, sans-serif; background:#0f172a; padding:20px; color:#fff">
            <div style="max-width:600px; margin:auto; background:#020617; border-radius:12px; padding:24px">

              <h2 style="color:#38bdf8; text-align:center;">
                📩 New Contact Message
              </h2>

              <hr style="border:1px solid #1e293b; margin:20px 0"/>

              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Type:</strong> ${formData.type}</p>

              <div style="
                margin-top:16px;
                padding:16px;
                background:#020617;
                border:1px solid #1e293b;
                border-radius:8px;
              ">
                <p style="margin:0"><strong>Message:</strong></p>
                <p style="margin-top:8px; line-height:1.6; color:#e5e7eb">
                  ${formData.message}
                </p>
              </div>

              <p style="
                margin-top:24px;
                font-size:12px;
                color:#64748b;
                text-align:center;
              ">
                This email was sent from EMP Tech Services website.
              </p>

            </div>
          </div>
        `,
      }
    );

    console.log("Mail sent:", data);
    return data;
  } catch (error) {
    console.error("Mailgun error:", error);
    throw error;
  }
}

export default sendSimpleMessage;
