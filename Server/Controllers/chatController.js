/******************************************************************************
* @Purpose : CHATAPP
* @file : routes.js
* @overview : To give a call to the 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 26/09/2019
******************************************************************************/
var services = require('../Services/chatServices');
exports.addMessageToTheDatabase = (req, callback) => {
    // console.log('add message in cntrl-----------',req)
    try {
        services.addMessageToTheDatabase(req, (err,result)=> {
            if (err) {
                return callback(err);
            }
            else {
                // console.log(,result)
                return callback(null,result);
            }
        })
    } catch (err) {
       console.log(err)
    }
}
exports.getAllUsersChats = (req, res) => {
    try {
        services.getAllUsersChats(req, (err, result) => {
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
        console.log(err)
    }
}