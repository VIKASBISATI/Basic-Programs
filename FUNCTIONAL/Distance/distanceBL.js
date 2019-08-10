/******************************************************************************
* @Purpose : Distance
* @file : distanceBL.js
* @overview :  To find the distance of the point from origin.
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let distance=(x,y)=>{
    //finding the distance of the point given by the user from the origin using the formula
    //square root of x^2+y^2
    let result=(Math.sqrt(x*x+y*y)); 
    return result;
}
module.exports={distance}