/******************************************************************************
* @Purpose : SwapNibbles
* @file : mergeSort.js
* @overview : To Swap the nibbles(4 bit string) and finding the decimal equivalent of the number
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input = require('readline-sync');
let binaryObject = require('./toBinaryBL');
let swapObject = require('./swapNibblesBL');
//reading the input number in decimal format
let n = input.question('Enter the number in decimal format');
//passing the number to the method toBinary with one argument n
let num = binaryObject.toBinary(n);
console.log(num);
console.log('The final binary equivalent is ' + swapObject.swap(num));