/******************************************************************************
* @Purpose : CHATAPP
* @file : routes.js
* @overview : To give a call to the 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 26/09/2019
******************************************************************************/
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