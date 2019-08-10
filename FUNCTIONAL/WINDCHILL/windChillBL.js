/******************************************************************************
* @Purpose : Wind Chill
* @file : windChillBL.js
* @overview : To print the wind chill of the given values of temperature and wind speed
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let windChillFunction = (t, v) => {
    //calculating the effective temperature by using the below formula
    return 35.74 + (0.6215 * t) + ((0.4275 * t - 35.75) * Math.pow(v, 0.16));
}
module.exports = { windChillFunction }