/******************************************************************************
* @Purpose : To find the sorted array using the sorting technique called "Merge Sort"
* @file : mergeSort.js
* @overview : Merge sort is a techniques works on the principle of Divide and Conquer
and the time  complexity of this technique is O(nlogn)
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input = require('readline-sync');
let n = input.questionInt('Enter the length of the array');
let mergeObject = require('./mergeSortBL');
let arr = []
//reading the array elements and calling the method sort
console.log('Enter array elements');
for (let i = 0; i < n; i++) {
    arr.push(parseInt(input.question()));
}
mergeObject.sort(arr);
mergeObject.dis(arr);