/******************************************************************************
* @Purpose : CHATAPP
* @file : controller.js
* @overview : 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 26/09/2019
******************************************************************************/
const services = require('../Services/services');
const tok = require('../token')
const sendMail = require('../Middleware/nodeMailer')
exports.login = (req, res) => {

    req.checkBody('email', 'Invalid Email').isEmail();
    req.checkBody('password', 'Invalid Password').len(5, 20).notEmpty();
    valErrors = req.validationErrors();
    var responseResult = {}
    if (valErrors) {
        responseResult.error = valErrors;
        responseResult.success = false;
        return res.status(420).send(responseResult);
    }
    else {
        services.login(req, (err, result) => {
            if  (err) {
                console.log(res);
                responseResult.msg="Failed Login"
                res.status(400).send(responseResult);
            }
            else {
                responseResult.msg="Login Successfully"
                res.status(200).send(responseResult);
            }
        });
    }
}
exports.register = (req, res) => {
    req.checkBody('firstName', 'Invalid First Name').notEmpty().isAlpha();
    req.checkBody('lastName', 'Invalid Last Name').notEmpty().isAlpha();
    req.checkBody('email', 'Invalid Email').isEmail();
    req.checkBody('password', 'Invalid Password').len(5, 20).notEmpty();
    valErrors = req.validationErrors();
    var responseResult = {}
    if (valErrors) {
        responseResult.error = valErrors;
        responseResult.success = false;
        return res.status(420).send(responseResult);
    }
    else {
        services.register(req, (err, result) => {
            if (err) {
                res.status(404).send(err);
            }
            else {
                res.status(200).send(result);
            }
        });
    }
}
exports.forgotPassword = (req, res) => {
    req.checkBody('email', 'Invalid Email').isEmail();
    valErrors = req.validationErrors();
    var responseResult = {}
    if (valErrors) {
        responseResult.error = valErrors;
        responseResult.success = false;
        return res.status(420).send(responseResult);
    }
    else {
        services.forgotPassword(req, (err, result) => {
            if (err) {
                res.status(404).send(err);
            }
            else {
                responseResult.result = result
                const payload = {
                    userid: result._id
                }
                // console.log(payload)
                const token = tok.generateToken(payload);
                // console.log(token);
                const url = process.env.url +'forgotPassword/'+ token;
                console.log(url);
                sendMail.sendMailToTheUser(result.email, url);
                res.status(200).send(url);
            }
        });
    }
}
exports.setPassword = (req, res) => {
    // console.log('yes');
    req.checkBody('password', 'Invalid Password').len(5, 20).notEmpty();
    req.checkBody('confirmpassword', 'Invalid Password').len(5, 20).notEmpty();
    valErrors = req.validationErrors();
    console.log(req.password)
    var responseResult = {}
    if (req.body.password != req.body.confirmpassword) {
        valErrors = 'passwords are not matched'
    }
    if (valErrors) {
        responseResult.error = valErrors;
        responseResult.success = false;
        console.log('status 420 yes');
        return res.status(420).send(responseResult);
    }

    else {
        services.setPassword(req, (err, result) => {
            if (err) {
                console.log('status 404 yes');
                res.status(404).send(err);
            }
            else {
                console.log('status 200 yes');
                res.status('200').send(result);
            }
        });
    }
}