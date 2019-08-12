/******************************************************************************
* @Purpose : Prime Numbers
* @file : prime.js
* @overview : To find the prime numbers within the range 0 to 1000
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input = require('readline-sync');
let primeObject = require('./primeBL');
//reading the range in order to find the prime numbers in that range
let low = input.questionInt('Enter the lower limit of the range');
let high = input.questionInt('Enter the upper limit of the range');
primeObject.isPrimeDisplay(low, high);