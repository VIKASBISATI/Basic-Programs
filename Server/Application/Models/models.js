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
//creating a schema for the registration purpose
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
//method for login api
exports.login = (req, callback) => {
    // console.log('yes', req.body)
    //if the email of the user is present in database then return err else true
    user.findOne(
        { "email": req.body.email }, (error, result) => {
            if (error) {
                callback("Email Dosesn't Exists");
            }
            else {
                //bcrypt.compare is used for the given password which was encrypted while registering is correct or not
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
    // console.log("data regeister", req.body.password);
    //checking for the existing users and registering the users which are not present in the database
    user.findOne({
        "email": req.body.email
    }, (err, data) => {
        if (data) callback("user already exists");
        else {
            //bcryt.hash function is used to encrypt the password and it takes another parameter as salt rounds for encryption
            //and finally it returns the encrypted password
            bcrypt.hash(req.body.password, 10, (err, encrypted) => {
                var userDetails = new user({
                    "firstName": req.body.firstName,
                    "lastName": req.body.lastName,
                    "email": req.body.email,
                    "password": encrypted
                })

                userDetails.save((err, data) => {
                    //finally saving the registered user in the database
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
    //bcryt.hash function is used to encrypt the password and it takes another parameter as salt rounds for encryption
    //and finally it returns the encrypted password
    bcrypt.hash(req.body.password, 10, (err, encrypted) => {
        if (err) callback(err);
        else {
            //updateone is used to update the password 
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
    //finding the email id of the user if it doesnt't exists calling back the error message
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
    //user.find method is used to find all the existing users in the database else sending the error
    user.find({}, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result)
        }
    })
}