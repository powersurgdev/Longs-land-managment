import sgMail from "@sendgrid/mail";

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone: string;
  location: string;
  services: string[];
  message: string;
}) {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn("[emailService] SENDGRID_API_KEY not set — skipping email");
    return;
  }

  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone);
  const safeLocation = escapeHtml(data.location);
  const safeServices = data.services.map(escapeHtml).join(", ");
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br>");

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
    </head>
    <body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;">
              <tr>
                <td style="background-color:#1a1a1a;padding:24px 32px;">
                  <h1 style="margin:0;color:#f5a503;font-size:20px;">New Contact Form Submission</h1>
                  <p style="margin:4px 0 0;color:#999;font-size:13px;">Long's Land Management</p>
                </td>
              </tr>
              <tr>
                <td style="padding:32px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:8px 0;border-bottom:1px solid #eee;">
                        <strong style="color:#333;">Name:</strong>
                        <span style="color:#555;margin-left:8px;">${safeName}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0;border-bottom:1px solid #eee;">
                        <strong style="color:#333;">Email:</strong>
                        <a href="mailto:${safeEmail}" style="color:#f5a503;margin-left:8px;">${safeEmail}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0;border-bottom:1px solid #eee;">
                        <strong style="color:#333;">Phone:</strong>
                        <a href="tel:${safePhone}" style="color:#f5a503;margin-left:8px;">${safePhone}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0;border-bottom:1px solid #eee;">
                        <strong style="color:#333;">Work Location:</strong>
                        <span style="color:#555;margin-left:8px;">${safeLocation}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0;border-bottom:1px solid #eee;">
                        <strong style="color:#333;">Services Requested:</strong>
                        <span style="color:#555;margin-left:8px;">${safeServices}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:16px 0 0;">
                        <strong style="color:#333;">Message:</strong>
                        <div style="margin-top:8px;padding:12px;background:#f9f9f9;border-radius:4px;color:#555;line-height:1.6;">
                          ${safeMessage}
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="background-color:#f9f9f9;padding:16px 32px;text-align:center;">
                  <p style="margin:0;color:#999;font-size:12px;">
                    This message was sent from the contact form on longslandmanagement.com
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  const text = `New contact from ${data.name} (${data.email}, ${data.phone})
Location: ${data.location}
Services: ${data.services.join(", ")}
Message: ${data.message}`;

  await sgMail.send({
    to: process.env.NOTIFICATION_EMAIL!,
    from: process.env.SENDGRID_FROM_EMAIL!,
    subject: `New Contact: ${data.name} — ${data.services[0]}`,
    html,
    text,
  });
}
