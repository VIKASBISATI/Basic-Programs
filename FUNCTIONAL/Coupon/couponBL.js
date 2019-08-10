/******************************************************************************
* @Purpose : Coupon Numbers
* @file : couponBL.js
* @overview : To find the distinct coupon numbers and add into the list.
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input = require('readline-sync');

let readArray = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        //reading the coupon numbers into the array
        arr.push(input.questionInt());
    }
    return arr;
}
let search = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            return true;
        }
    }
    return false;
}

let operation = (arr,rn,range) => {
    for (let i = 0; i < rn; i++) {
        //if the user entered number is not available in the array then adding it into the array
        //Also generating the random numbers
        let num1 = parseInt(Math.floor(Math.random() * Math.floor(range)));
        console.log(num1);
        if (!search(arr, num1)) {
            arr.push(num1);
        }
    } 
    return arr;
}
module.exports = { readArray, operation, search }