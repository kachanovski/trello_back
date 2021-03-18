const nodeMailer = require("nodemailer")

const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        type: "login"
    }
});

const sendMail = async () => {

    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "kachanovski03@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
    console.log(info)
    console.log("Message sent: %s", info?.messageId);
    console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));

    return info;
}

module.exports = sendMail