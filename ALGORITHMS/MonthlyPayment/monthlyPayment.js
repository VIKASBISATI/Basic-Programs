/******************************************************************************
* @Purpose : Monthly payment
* @file : monthlyPayment.js
* @overview : To find the Montyly Payment given the time amount and rate of interest
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let monthlyPaymentObject=require('./monthlyPaymentBL');
//reading the amount,time and rate of interst from command line arguments
let payment=parseFloat(process.argv[2]);
let years=parseFloat(process.argv[3]);
//calling the method montly payment 
let rateOfInterest=parseFloat(process.argv[4]);
console.log('The monthly payment is '+monthlyPaymentObject.monthlyPayment(payment,years,rateOfInterest));