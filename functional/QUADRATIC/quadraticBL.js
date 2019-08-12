/******************************************************************************
* @Purpose : Evaluation of quadratic equation
* @file : quadraticBL.js
* @overview : To find the roots of the quadratic equation
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let quaCal = (a, b, c) => {
    //finding the square roots of the equation by the equation -b+or- square root of b^-4ac/2a
    delta = b * b - 4 * a * c;
    root1 = (-b + Math.sqrt(delta)) / (2 * a);
    root2 = (-b - Math.sqrt(delta)) / (2 * a);
    return [root1, root2]
}
module.exports = { quaCal }