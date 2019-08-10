/******************************************************************************
* @Purpose : Temperature Conversion
* @file : temperatureConversionBL.js
* @overview : To find the temperature in farenheit when the temperature is given in celsius viceversa
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let toCelsius=(n)=>
{
   //converting the farenheit temperature to celsius using the formula below
 celsius= parseFloat((n-32)*(5/9));
 return celsius;
}
let toFarenheit=(n)=>
{
      //converting the celsius temperature to farenheit using the formula below
   farenhiet= (n * 9/5) + 32;
   return farenhiet;
}
module.exports={toCelsius,toFarenheit}