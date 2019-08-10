/******************************************************************************
* @Purpose : Temperature Conversion
* @file : temperatureConversion.js
* @overview : To find the temperature in farenheit when the temperature is given in celsius viceversa
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input=require('readline-sync');
let temperatureObject=require('./temperatureConversionBL');
// reading the values from the user in both farenheit and celsius to covert them to 
//celsius and farenheit
let t1=input.questionInt('Enter temperature in farenheit');
let t2=input.questionInt('Enter temperature in celsius');
console.log('Temperature in celsius : '+temperatureObject.toCelsius(t1));
console.log('Temperature in farenheit : '+temperatureObject.toFarenheit(t2));