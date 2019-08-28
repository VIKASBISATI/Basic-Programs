exports.sendMailToTheUser = (Email, url) => {
    var nodeMailer = require('nodemailer');
    var trans = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.email,
            pass: process.env.password
        }
    });
    var mailOptions = {
        from: process.env.email,
        to: Email,
        subject: 'Sending mail using node mailer',
        text: 'SetPassword Link  :  ' + url
    }
    // console.log('asdfasd',mailOptions)
    trans.sendMail(mailOptions, function (err, inf) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(inf);
        }
    })
}