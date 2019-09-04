/******************************************************************************
* @Purpose : CHATAPP
* @file : routes.js
* @overview : To give a call to the 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 26/09/2019
******************************************************************************/
const express = require('express');
const routes = express.Router();
const controller = require('../Controllers/controller');
const chatControllers = require('../Controllers/chatController')
const ver = require('../token');
routes.post('/login', controller.login);
routes.post('/register', controller.register);
routes.post('/forgotPassword', controller.forgotPassword);
routes.post('/resetPassword/:token', ver.verifyToken, controller.setPassword);
routes.post('/addMessage', chatControllers.addMessageToTheDatabase);
routes.get('/getAllUsers', chatControllers.getAllUsers);
module.exports = routes;