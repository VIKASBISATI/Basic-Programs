/******************************************************************************
* @Purpose : Two D Array
* @file : twoDArray.js
* @overview : To read and display the two dimensional array 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input = require('readline-sync');
let twoDArrayObject = require('./twoDArrayBL');
//reading the rows and colums from the user
let rows = input.questionInt('Enter the number of rows in the array');
let cols = input.questionInt('Enter the number of columns in the array');
array = twoDArrayObject.display(rows, cols);
console.log(array)