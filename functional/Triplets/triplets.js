/******************************************************************************
* @Purpose : Triplets
* @file : triplets.js
* @overview : To find the sum of all combinations of the array elements is zero in the array 
given by the user 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input = require('readline-sync');
let tripletsObject = require('./tripletsBL');
let array = [];
let arrayLength = input.question('Enter the length of the array');
//reading the array elements from the user
console.log('Enter array elements');
for (let i = 0; i < arrayLength; i++) {
    array.push(input.questionInt());
}
tripletsObject.tripletsCalculation(array);