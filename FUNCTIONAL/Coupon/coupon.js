/******************************************************************************
* @Purpose : Coupon Numbers
* @file : coupon.js
* @overview : To find the distinct coupon numbers and add into the list.
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input = require('readline-sync');
let couponObject = require('./couponBL');
// reading how many coupon numbers are there from the user
let num = input.questionInt('Enter number of coupon numbers are there');
let arr = couponObject.readArray(num);
//reading the number of random numbers needs to be generated and range 
let rn = input.questionInt('Enter how many random numbers you want to generate');
let range = input.questionInt('Enter the range of random numbers');
arr = couponObject.operation(arr,rn,range);
console.log(arr);