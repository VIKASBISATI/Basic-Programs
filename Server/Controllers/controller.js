/******************************************************************************
* @Purpose : CHATAPP
* @file : controller.js
* @overview : 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 26/09/2019
******************************************************************************/
const services = require('../Application/Models/models');
exports.login = (req, res) => {
    services.login(req.body)
    console.log(req.body);
}
exports.register = (req, res) => {
}
exports.setPassword = (req, res) => {
}
exports.resetPassword = (req, res) => {
}