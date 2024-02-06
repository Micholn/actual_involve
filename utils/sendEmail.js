const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

CONST sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        PORT: 
    })
}
