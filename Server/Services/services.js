/******************************************************************************
* @Purpose : CHATAPP
* @file : services.js
* @overview : 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
const userModel = require('../Application/Models/models')
exports.login = (data, callback) => {
    userModel.login(data, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null,result);
        }
    })
}
exports.register = (data, callback) => {
    userModel.register(data, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null,result);
        }
    })
}
exports.setPassword = (data, callback) => {
    // console.log('yes');
    userModel.setPassword(data, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            
            callback(null,result);
        }
    })
}
exports.forgotPassword = (data, callback) => {
    userModel.forgotPassword(data, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result);
        }
    })
}