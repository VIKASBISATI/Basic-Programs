/******************************************************************************
* @Purpose : Square root of a non-negative number
* @file : sqrtBL.js
* @overview : To find the square root of a non-negative number
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let square=(c)=>
{
    //finding the square root of the non-negative number by using the formula 
let epsilon=parseFloat(1.0e-15);
let t=c;
while(Math.abs(t-c/t)>epsilon*t)
{
    t=(c/t + t)/2.0;
}
console.log(t);
}
module.exports={square}