var chatModel = require('../Application/Models/chatModels');
exports.addMessageToTheDatabase = (data, callback) => {
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