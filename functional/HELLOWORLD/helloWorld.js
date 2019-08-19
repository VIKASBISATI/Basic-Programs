/******************************************************************************
* @Purpose : Hello World
* @file : helloWorld.js
* @overview : To replace the string entered by user with the username
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input = require('readline-sync');
let helloWorldObject = require('./helloWorldBL');
//reading the name of the user 
let name = input.question('Enter your name : ');
console.log(typeof(name))
console.log(helloWorldObject.replaceName(name));