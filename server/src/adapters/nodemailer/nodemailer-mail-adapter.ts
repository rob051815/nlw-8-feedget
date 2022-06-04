import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5bd92cbad22232",
    pass: "ccf906f9170a2f"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <hello@feedback.com>',
      to: 'Rob F <rob05182015@getMaxListeners.com>',
      subject,
      html: body
    })
  }
} 