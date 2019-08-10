/******************************************************************************
* @Purpose : To find percentage of wins and loss given the stake and number of attempts
* @file : gambler.js
* @overview : 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input = require('readline-sync');
let gamblerObject = require('./gamblerBL');
//reading the values of stake goal and number of times user wants to play the game
let stake = input.questionInt('Enter stake');
let goal = input.questionInt('Enter goal');
let num = input.questionInt('Enter number of times you want to play');
let wins = gamblerObject.gamblerCalculation(stake, goal, num);
console.log('The percentage of wins is ' + (wins / num) * 100);
console.log('The percentage of loss is ' + ((num - wins) / num) * 100);