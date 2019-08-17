/******************************************************************************
* @Purpose : Palindrome
* @file : palindrome.js
* @overview :Finding the given number or string is a palindrome or not using dequeue
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
var input = require('readline-sync');
var palCalculationObject = require('./palindromeBL');
//reading the string from the user
var pal = input.question('Enter the string for checking the name is palindrome or not :  ');
palCalculationObject.palindromeCalculation(pal);