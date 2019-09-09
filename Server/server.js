/******************************************************************************
* @Purpose : CHATAPP
* @file : server.js
* @overview : 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 26/09/2019
******************************************************************************/
const routes = require('./Routes/routes')
//importing express library
const express = require('express')
const bodyParser = require('body-parser')
//app variable give the access to use http methods and some other methods
const app = express()
var expressValidator = require('express-validator')
app.use(expressValidator());
// app.use(Cors());
const dbConfig = require('./Configuration/database.config')
const mongoose = require('mongoose')
const chatController = require('../Server/Controllers/chatController')
// require('http').createServer(app);
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use('/', routes)
require('dotenv').config();
//mongoose.Promise = global.Promise is a legace code no need to write it after mongoose 5
mongoose.Promise = global.Promise
//promise then and catch have a call back for successfull connection and catch for failed connection 
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('success')
}).catch(() => (
    console.log('connection failed')
))
app.get('/', (req, res) => {
    res.json('Welcome to chatApp')
})
const server = app.listen(4000, () => {
    console.log("server listening on 4000 port");
})
const io = require('socket.io').listen(server);
io.on('connection', (socket) => {
    console.log("user connected")
    socket.on('FrontEndMessage', data => {
        chatController.addMessageToTheDatabase(data, (err, result) => {
            if (err) {
                console.log("error on server while receiving data");
            } else {
                console.log(result)
                io.sockets.emit('Message', result)
            }
        })
    })
})
module.exports = app; 