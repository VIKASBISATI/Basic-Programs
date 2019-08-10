/******************************************************************************
* @Purpose : Prime Factors
* @file : primeFacots.js
* @overview : To find the prime factors of the given number
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input = require('readline-sync');
let primeFactorsObject = require('./primeFactorsBL');
// Getting the number from the user for printing the prime factors of the given number
let num = input.questionInt('Enter the number for finding prime factorisation');
primeFactorsObject.primeFactorsCalculation(num);