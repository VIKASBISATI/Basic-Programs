/******************************************************************************
* @Purpose : Evaluation of quadratic equation
* @file : quadratic.js
* @overview : To find the roots of the quadratic equation
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input=require('readline-sync');
let quadratic=require('./quadraticBL');
// reading the values from the user to specify the co-efficients of x^2 x and constant
let a=input.questionFloat('Enter the value of a :');
let b=input.questionFloat('Enter the value of b : ');
let c=input.questionFloat('Enter the value of c : ');
let resarray=quadratic.quaCal(a,b,c);
console.log('The first root of the above equation is : '+resarray[0]);
console.log('The second root of the above equation is : '+resarray[1]);