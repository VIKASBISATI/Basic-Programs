/******************************************************************************
* @Purpose : Binary conversion
* @file : toBinary.js
* @overview : To convert the decimal number into binary number
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input=require('readline-sync');
let binaryObject=require('./toBinaryBL');
//reading the number from the user in decimal format
let num=input.question('Enter the number in decimal format');
//calling the method toBinary with argument as num
console.log('The binary equivalent is '+binaryObject.toBinary(num));
