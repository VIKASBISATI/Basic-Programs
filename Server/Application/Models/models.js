/******************************************************************************
* @Purpose : CHATAPP
* @file : models.js
* @overview : 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 26/09/2019
******************************************************************************/
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var userScehma = new mongoose.Schema({
    "firstName":
    {
        type: String,
        required: true
    },
    "lastName":
    {
        type: String,
        required: true
    },
    "email":
    {
        type: String,
        unique: true,
        required: true,
    },
    "password":
    {
        type: String,
        required: true,
    }
})
var user = mongoose.model('users', userScehma)
// console.log("dvhgvfd",user);
exports.login = (req, callback) => {
    console.log('yes', req.body)
    user.findOne(
        { "email": req.body.email }, (error, result) => {
            if (error) {
                callback("Email Dosesn't Exists");
            }
            else {
                bcrypt.compare(req.body.password, result.password, (err, sucess) => {
                    console.log(err)
                    if (sucess) { 
                        callback(null, result)
                    }
                    else {

                        callback("password mismatch")
                    }
                })
            }
        })
}
exports.register = (req, callback) => {
    console.log("data regeister", req.body.password);
    user.findOne({
        "email": req.body.email
    }, (err, data) => {
        if (data) callback("user already exists");
        else {
            bcrypt.hash(req.body.password, 10, (err, encrypted) => {
                var userDetails = new user({
                    "firstName": req.body.firstName,
                    "lastName": req.body.lastName,
                    "email": req.body.email,
                    "password": encrypted
                })

                userDetails.save((err, data) => {
                    if (err) { callback(err); console.log("ddfdfdfffdffdffferrr", err) }
                    else {
                        console.log("in save", data)
                        callback(null, data);
                    }
                })
            })
        }
    })
}
exports.setPassword = (req, callback) => {
    bcrypt.hash(req.body.password, 10, (err, encrypted) => {

        if (err) callback(err);
        else {
            user.updateOne({ "_id": req.decoded.payload.userid }, { "password": encrypted }, (error, result) => {
                if (error) {
                    console.log('model error')
                    callback(error);
                }
                else {
                    callback(null, result);
                }
            })
        }
    })
}
exports.forgotPassword = (req, callback) => {
    user.findOne({ "email": req.body.email }, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result)
        }
    })
}
exports.getAllUsers = (req, callback) => {
    user.findOne({}, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result)
        }
    })
}