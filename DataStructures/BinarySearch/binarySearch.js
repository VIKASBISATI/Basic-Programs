/******************************************************************************
* @Purpose : BinarySearchTree
* @file : binarySearch.js
* @overview : To find the number of possibilities of BinarySearchTree using the number
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 12/09/2019
******************************************************************************/
var input = require('readline-sync');
var binaryObject = require('./binarySearch')
class BSTNumber {
    //reading the number from the user
    NumOfBST() {
        //evaluating the formula 2n!/(n+1)!*n!
        var n = input.questionInt('Enter the number for calculating the number of binary serach trees');
        var a = binaryObject.factorial(2 * n);
        var b = binaryObject.factorial(n + 1);
        var c = binaryObject.factorial(n);
        var res = a / (b * c); var o = new BSTNumber();
        console.log("The number of possibilities are " + o.NumOfBST());
        console.log(res);
        var numOfNodes = binaryObject.factorial(n);
        return res * numOfNodes;
    }
}
var o = new BSTNumber();
console.log("The number of possibilities are " + o.NumOfBST());