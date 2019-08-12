/******************************************************************************
* @Purpose : To find the sorted array using the sorting technique called "Merge Sort"
* @file : mergeSort.js
* @overview :  powerOfTwoBL.js
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let powerOfTwoCalculation = (num) => {
    //logic for find the power of two for the given number by the user
    let p = 1;
    for (let i = 0; i < num; i++) {
        p = p * 2;
    }
    return p;
}
module.exports = { powerOfTwoCalculation }