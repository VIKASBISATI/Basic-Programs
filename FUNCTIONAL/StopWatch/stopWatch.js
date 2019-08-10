/******************************************************************************
* @Purpose : Stop Watch
* @file : stopWatch.js
* @overview : To find the elapsed time for the program
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input=require('readline-sync');
let stopWatchObject=require('./stopWatchBL');
//getting the time in milliseconds by the object of Date;
//finding the elapsed time by calculating stoptime and starttime
let d=new Date();
let startTime=d.getMilliseconds();
console.log(stopWatchObject.add());
let stopTime=d.getMilliseconds();
console.log('The elapsed time is '+(stopTime-startTime));