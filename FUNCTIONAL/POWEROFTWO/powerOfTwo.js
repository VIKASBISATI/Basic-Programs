/******************************************************************************
* @Purpose : Power Of Two
* @file : powerOfTwo.js
* @overview : To find the power of two where the power value given by user
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input=require('readline-sync');
let powerOfTwoObject=require('./powerOfTwoBL');
//reading the command line arguments for finding the power of two
let num=process.argv[2];
console.log('The power of two is '+powerOfTwoObject.powerOfTwoCalculation(num));