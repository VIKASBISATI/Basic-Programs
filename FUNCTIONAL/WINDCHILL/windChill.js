/******************************************************************************
* @Purpose : Wind Chill
* @file : windChill.js
* @overview : To print the wind chill of the given values of temperature and wind speed
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input = require('readline-sync');
let windChillObject = require('./windChillBL');
//reading the temperature and wind speed from the user
let t = process.argv[2];
let v = process.argv[3];
if (t > 50 && (v > 120 && v < 30)) {
    console.log('Formula not valid');
    return;
}
console.log(windChillObject.windChillFunction(t, v));