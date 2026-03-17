import nodemailer from "nodemailer";
import "dotenv/config"
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.GOOGLE_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN
    }
})
transporter.verify()
export async function sendmail({ to, subject, html }) {
    const data = {
        from: process.env.GOOGLE_USER,
        to,
        subject,
        html

    }
    const mail = await transporter.sendMail(data)
    return 'Mail sent Successfully to ' + to;
}