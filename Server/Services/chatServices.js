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
exports.getAllUsers = (data, callback) => {
    chatModel.getAllUsers(data, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result);
        }
    })
}