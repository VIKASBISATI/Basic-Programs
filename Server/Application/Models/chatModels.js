/******************************************************************************
* @Purpose : CHATAPP
* @file : routes.js
* @overview : To give a call to the 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 26/09/2019
******************************************************************************/
var mongoose=require('mongoose');
var chatSchema=new mongoose.Schema({
    "messageDb":{
        type:String,
        required:true
    },
    "from":{
        type:String,
        required:true
    },
    "to":{
        type:String,
        required:true
    }
}); 
var chatModel=mongoose.model('chats',chatSchema);
exports.addMessageToTheDatabase=(req,callback)=>{
    // console.log('data in serv',req)

    var msg=new chatModel({
        "messageDb":req.messageDb,
        "from":req.from,
        "to":req.to
    })
    msg.save((err,result)=>{
        if(err){
            callback(err);
        }
        else{
            console.log('result is-------->',result)
            callback(null,result)
        }
    })
}
exports.getAllUsersChats = (req, callback) => {
    chatModel.find({}, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result);
        }
    })
}