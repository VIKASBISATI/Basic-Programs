/******************************************************************************
* @Purpose : CHATAPP
* @file : routes.js
* @overview : To give a call to the 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 26/09/2019
******************************************************************************/
var chatModel = require('../Application/Models/chatModels');
exports.addMessageToTheDatabase = (data, callback) => {
    // console.log('data in serv',data)
    chatModel.addMessageToTheDatabase(data, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result);
        }
    })
}
exports.getAllUsersChats = (data, callback) => {
    chatModel.getAllUsersChats(data, (err, result) => {  
        if (err) {
            callback(err);
        }
        else {
            callback(null, result);
        }
    })
}