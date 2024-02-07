const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

CONST sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        PORT: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE, 
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },  
    });

    const  mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.mail,
        subject: options.subject,
        html: options.message,
    };

    await transporter.sendMail(mailOptions);

    const msg = {
        to: options.email, 
        from: process.env.SENDGRID_MAIL,
        templateId: options.templateId,
        
    }
}
