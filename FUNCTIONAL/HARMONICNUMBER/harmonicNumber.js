/******************************************************************************
* @Purpose : Harmonic Number
* @file : harmonicNumber.js
* @overview : To find the nth Harmonic Number
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input=require('readline-sync');
let harmonic=require('./harmonicNumberBL');
//reading the nth value from the user
let num=input.questionInt('Enter number for printing the nth Harmonic Number :');
console.log(harmonic.harmCal(num));