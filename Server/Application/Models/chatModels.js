var mongoose=require('mongoose');
var chatSchema=new mongoose.Schema({
    "message":{
        type:String,
        required:true
    },
    "sender":{
        type:String,
        required:true
    },
    "receiver":{
        type:String,
        required:true
    }
}); 
var chatModel=mongoose.model('chats',chatSchema);
exports.addMessageToTheDatabase=(req,callback)=>{
    var msg=new chatModel({
        "message":req.body.message,
        "sender":req.body.sender,
        "receiver":req.body.receiver
    })
    msg.save((err,result)=>{
        if(err){
            callback(err);
        }
        else{
            callback(null,result)
        }
    })
}
exports.getAllUsers = (req, callback) => {
    chatModel.find({}, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result);
        }
    })
}