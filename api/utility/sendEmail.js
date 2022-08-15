
import nodemailer from 'nodemailer';

export const sendEmail = async (to, subject, text) => {

    try {
        let transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "90a52989edbe4b",
              pass: "6986edef3e9d24"
            }
          });



        transport.sendMail({
            from : '',
            to : to,
            subject : subject,
            text : text
        })

    } catch (error) {
        console.log(error)
    }
}