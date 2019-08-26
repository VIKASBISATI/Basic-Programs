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
const controller = require('../Controllers/controller.js')
routes.post('/login', controller.login);
routes.post('/register', controller.register);
routes.post('/setPassword', controller.setPassword);
routes.get('/resetPassword', controller.resetPassword);