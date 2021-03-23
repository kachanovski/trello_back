const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'login',
        user: process.env.GMAIL_USER || 'jleninprolol@gmail.com',
        pass: process.env.GMAIL_PASS || 'dmnvzndobrerfeaj',
    },
})

const sendMail = async (to,inviteToken) => {

    const info = await transporter.sendMail({
        from: '"incubator_team 👻" <trello_clone@gmail.com>',
        to: to,
        subject: "Hello ✔",
        text: `Дейсвителен 3день`,
        html: `<b>http:localhost:3000?token=${inviteToken}</b>`
    });

    return info;
}

module.exports = sendMail