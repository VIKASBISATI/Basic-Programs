/******************************************************************************
* @Purpose : To find the sorted array using the sorting technique called "Merge Sort"
* @file : mergeSortBLs.js
* @overview : Merge sort is a techniques works on the principle of Divide and Conquer
and the time  complexity of this technique is O(nlogn)
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let sort = (arr) => {
    let c = 0;
    let n = parseInt(arr.length);
    if (n < 2) {
        return;
    }
    //calculating the middle element of the array
    let mid = parseInt(n / 2);
    //creating the left and right arrays by dividing the original array
    let left = [];
    left.length =parseInt(mid);
    let right = [];
    right.length = parseInt(n - mid);
    //storing the values into the left and right arrays
    for (let i = 0; i < mid; i++) {
        left[i] = arr[i];
    }
    for (let j = mid; j < n; j++) {
        right[j - mid] = arr[j];
    }
    //recursively calling the sort mehtod using left and right right arrays till it reaches 
    //the array elements to 1
    sort(left);
    sort(right);
    merge(left, right, arr);
}
// conquering or merging the arrays after division
let merge = (left, right, arr) => {
    let i = 0;
    let j = 0;
    let k = 0;
    let nl = left.length;
    let nr = right.length;
    while (i < nl && j < nr) {
        //comparing the left and right side elements and storing the sorted values to the array
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            k++;
            i++;
        }
        else {
            arr[k] = right[j];
            j++;
            k++;
        }
    }
    //storing back the remaining values of the left and right arrays into the original array 
    while (i < nl) {
        arr[k] = left[i];
        i++;
        k++;
    }
    while (j < nr) {
        arr[k] = right[j];
        j++;
        k++;
    }
    console.log(arr);
}
let dis = (arr) => {
    console.log(arr);
}
module.exports = { sort, merge, dis }