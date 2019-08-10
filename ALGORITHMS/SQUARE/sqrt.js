/******************************************************************************
* @Purpose : Square root of a non-negative number
* @file : sqrt.js
* @overview : To find the square root of a non-negative number
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
// reading the input from the command line arguments
let input=parseFloat(process.argv[2]);
let sqrtObject=require('./sqrtBL');
sqrtObject.square(input);