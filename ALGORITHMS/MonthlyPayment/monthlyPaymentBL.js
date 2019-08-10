/******************************************************************************
* @Purpose : Monthly payment
* @file : monthlyPaymentBL.js
* @overview : To find the Montyly Payment given the time amount and rate of interest
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let monthlyPayment=(p,y,rate)=>
{
    //calculating the monthly payment by using the formula
    let n=parseFloat(12*y);
    let r=parseFloat(rate/(1200));
    let numerator=parseFloat(p*r);
    let denominator=parseFloat(Math.pow(1+r,-n));
    let pay=parseFloat(numerator/(1-denominator));
    return pay;
}
module.exports={monthlyPayment}