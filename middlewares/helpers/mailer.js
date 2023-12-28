const nodeMailer = require("nodemailer");

exports.sendEmail = mailngData => {
   const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,  
    auth: {
        user: process.env.ECOM_EMAIL,
        pass: process.env.ECOM_PASSWORD
    }
   });



}