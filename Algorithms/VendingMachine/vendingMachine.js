/******************************************************************************
* @Purpose : Vending Machine
* @file : vendingMachine.js
* @overview : To find the number of notes when the user is given the amount
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input = require('readline-sync');
let vendingObject = require('./vendingMachineBL');
//reading the amount from the user
let num = input.questionInt('Enter the amount');
let amount = [];
//declaring the array with the available notes
amount = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 1];
console.log(amount);
let text = '';
let t = vendingObject.change(num, amount, 0, text);
console.log(t);