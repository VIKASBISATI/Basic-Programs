/******************************************************************************
* @Purpose : Flip Coin
* @file : flipCoin.js
* @overview : To find the percentage of tails and heads given the number of attempts
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let flip = require('./flipCoinBL');
let input=require('readline-sync');
//asing the user to enter how many times user wants to flip the coin
let n=input.questionInt('Enter the number of times you want to flip the coin');
let resarray=flip.flipCal(n);
console.log('Percentage of tails is : '+(resarray[0]/n)*100);
console.log('Percentage of heads is : '+(resarray[1]/n)*100);