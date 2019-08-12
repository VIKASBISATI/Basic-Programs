/******************************************************************************
* @Purpose : Binary Search
* @file : binarySearch.js
* @overview : To search for the given in the list of elements present in the array by recursion
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input = require('readline-sync');
let searchObject = require('./binarySearchBL')
//reading the number from the user
let num = input.questionInt('Enter number');
//the user needs to guess the number within the range 0 and 2^num
let guess = input.questionInt('Guess the number between 0 and' + Math.pow(2, num));
//calling the method search which accepts two arguments 0 and 2^num
console.log('The number that you guessed is ' + searchObject.search(0, Math.pow(2, num))); 