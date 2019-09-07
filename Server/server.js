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
// const Cors = require('cors');
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
//mongoose.Promise = global.Promise used for using mongoose anywhere in the code
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
//socket io is a library which helps for realtime bidirectional data sending between client and server
const io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    // const connections = [];
    // connections.push(socket);
    // console.log('user connected');
    // console.log(connections)
    socket.on('NewMessage', function (req) {
        //adding messages to the database which comes from the frontend
        chatController.addMessageToTheDatabase(req, (err, result) => {
            console.log('requested message----------', req);
            if (err) {
                console.log(err)
            }
            else {
                console.log('sersver', result);
            }
            io.emit(req.sender, result);
            io.emit(req.receiver, result);
        })
    })
})
io.on('disconnect', function () {
    io.emit('User Disconnected')
})
module.exports = app; 