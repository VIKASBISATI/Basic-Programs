var services = require('../Services/chatServices');
exports.addMessageToTheDatabase = (req, res) => {
    try {
        services.addMessageToTheDatabase(req, (err, result) => {

            if (err) {
                res.status(404).send(err);
            }
            else {
                res.status(200).send(result);
            }
        })
    } catch (err) {
        res.send(err);
    }
}
exports.getAllUsers = (req, res) => {
    try {
        services.getAllUsers(req, (err, result) => {
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
        res.send(err);
    }
}