/******************************************************************************
* @Purpose : Day of Week
* @file : dayOfWeek.js
* @overview : To find the day of the week given the number of day,month and year
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input = require('readline-sync');
let dayOfWeekObject = require('./dayOfWeekBL');
//reading the values of day,month and year from the command line arguments
//here the values starts from the index 2 because the first two indexes occupied by node and file name
let d = process.argv[2];
let m = process.argv[3];
let y = process.argv[4];
//calling the dayOfWeek method
var res = dayOfWeekObject.dayOfWeek(d, m, y);
var s = ['sunday', 'monday', 'tueday', 'wednesday', 'thursday', 'friday', 'saturday'];
console.log('day is ' + s[res]);