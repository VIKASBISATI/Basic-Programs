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
    try {
        // console.log(req.body.data)
        //checking the format of the request by the user
        req.checkBody('email', 'Invalid Email').isEmail();
        req.checkBody('password', 'Invalid Password').len(5, 20).notEmpty();
        valErrors = req.validationErrors();
        var responseResult = {}
        if (valErrors) {
            //if any errors are there it the requrest considered as a unprocessable entity
            responseResult.error = valErrors;
            responseResult.success = false;
            return res.status(422).send(responseResult);
        }
        else {
            services.login(req, (err, result) => {
                if (err) {
                    console.log(res);
                    responseResult.msg = false
                    res.status(404).send(false);
                }
                else {
                    responseResult.msg = true
                    res.status(200).send(true);
                }
            });
        }
    } catch (err) {
        res.send(err);
    }
}
exports.register = (req, res) => {
    try {
        // console.log("req in controller", req.body);
        //checking the format of the request by the user
        req.checkBody('firstName', 'Invalid First Name').notEmpty().isAlpha();
        req.checkBody('lastName', 'Invalid Last Name').notEmpty().isAlpha();
        req.checkBody('email', 'Invalid Email').isEmail();
        req.checkBody('password', 'Invalid Password').len(5, 20).notEmpty();
        valErrors = req.validationErrors();
        var responseResult = {}
        if (valErrors) {
            //if any errors are there it the requrest considered as a unprocessable entity
            responseResult.error = valErrors;
            responseResult.success = false;
            console.log(responseResult)
            return res.status(422).send(responseResult);
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
    } catch (err) {
        res.send(err);
    }
}
exports.forgotPassword = (req, res) => {
    try {
        //checking the format of the request by the user
        // console.log('forgotsdsasel', req.body);
        req.checkBody('email', 'Invalid Email').isEmail();
        valErrors = req.validationErrors();
        var responseResult = {}
        if (valErrors) {
            //if any errors are there it the requrest considered as a unprocessable entity
            responseResult.error = valErrors;
            responseResult.success = false;
            res.status(422).send(responseResult);
        }
        else {
            services.forgotPassword(req, (err, result) => {
                if (err) {
                    res.status(404).send(err);
                }
                else {
                    console.log('data---', result)
                    responseResult.result = result
                    const payload = {
                        userid: result._id
                    }
                    const token = tok.generateToken(payload);
                    const url = process.env.url + 'resetPassword/' + token;
                    console.log(url);
                    sendMail.sendMailToTheUser(result.email, url);
                    res.status(200).send(url);
                }
            });
        }
    } catch (err) {
        res.send(err);
    }
}
exports.setPassword = (req, res) => {
    try {
        //checking the format of the request by the user
        req.checkBody('password', 'Invalid Password').len(5, 20).notEmpty();
        req.checkBody('confirmpassword', 'Invalid Password').len(5, 20).notEmpty();
        valErrors = req.validationErrors();
        console.log(req.password)
        var responseResult = {}
        if (req.body.password != req.body.confirmpassword) {
            valErrors = 'passwords are not matched'
        }
        if (valErrors) {
            //if any errors are there it the requrest considered as a unprocessable entity
            responseResult.error = valErrors;
            responseResult.success = false;
            console.log('status 420 yes');
            return res.status(422).send(responseResult);
        }
        else {
            services.setPassword(req, (err, result) => {
                if (err) {
                    console.log('status 404 yes');
                    res.status(404).send(err);
                }
                else {
                    console.log('status 200 yes');
                    res.status(200).send(result);
                }
            });
        }
    } catch (err) {
        res.send(err);
    }

}
exports.getAllUsers = (req, res) => {
    try {
        services.getAllUsers(req, (err, result) => {
            if (err) {
                // console.log('status 404 yes');
                res.status(404).send(err);
            }
            else {
                // console.log('status 200 yes');
                res.status(200).send(result);
            }
        });
    } catch (err) {
        res.send(err);
    }
}
