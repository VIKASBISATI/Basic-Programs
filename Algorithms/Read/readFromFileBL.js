/******************************************************************************
* @Purpose : Search for the element in the file
* @file : readFromFileBL.js
* @overview : To search for the element which is present inside the file and writing it
again to the file
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let binarySearch = (textArray, l, h, key) => {
    if (h >= l) {
        //performaing the operation till low should be less than high and finding the middle element
        //in each recursion method call
        let mid = l + parseInt((h - l) / 2);
        if (textArray[mid] == key) {
            return mid;
        }
        // checking whether the mid value is greater than the key if yes then calling the method
        //in the range low to mid-1 else high to mid+1 to high
        if (textArray[mid] > key) {
            return binarySearch(textArray, l, mid - 1, key);
        }
        return binarySearch(textArray, mid + 1, h, key);
    }
}
module.exports = { binarySearch }