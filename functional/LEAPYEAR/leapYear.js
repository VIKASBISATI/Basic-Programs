/******************************************************************************
* @Purpose : Leap Year
* @file : leapYear.js
* @overview :  To find the leap year of a given year by the user.
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let leap = require('./leapYearBL');
let input = require('readline-sync');
//reading the year from the user for checking whether the entered year is leap year or not
let year = input.question('Enter the year you want to check for the leap year or not :');
console.log(leap.leapCal(year));