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
        text: 'ResetPassword Link  :  ' + url
    };
    // console.log('asdfasd',mailOptions) 
    trans.sendMail(mailOptions, function (err, inf) {
        if (err) {
            console.log("Message not sent ",err);
        }
        else {
            console.log("Message Sent Successfully",inf.envelope);
        }
    })
}