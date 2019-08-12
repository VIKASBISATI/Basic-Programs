/******************************************************************************
* @Purpose : Insertion Sort
* @file : insertionBL.js
* @overview : o find the sorted array using the sorting technique called "Insertion Sort"
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let sorting = (ar) => {
    console.log('After sorting');
    //sorting the array by shifting the postion of the array elements in the array.
    for (let i = 1; i < ar.length; i++) {
        let key = ar[i];
        j = i - 1;
        while (j >= 0 && ar[j].localeCompare(key) > 0) {
            ar[j + 1] = ar[j];
            j--;
        }
        ar[j + 1] = key;
    }
    console.log(ar);
}
module.exports = { sorting }