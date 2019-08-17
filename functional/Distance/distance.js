/******************************************************************************
* @Purpose : Distance
* @file : distance.js
* @overview :  To find the distance of the point from origin.
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let dist = require('./distanceBL');
//reading the values of x and y co-ordinate values from the user 
let x = process.argv[2];
let y = process.argv[3];
console.log(dist.distance(x, y));