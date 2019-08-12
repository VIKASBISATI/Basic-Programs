/******************************************************************************
* @Purpose : SwapNibbles
* @file : mergeSort.js
* @overview : To Swap the nibbles(4 bit string) and finding the decimal equivalent of the number
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let binaryObject = require('./toBinaryBL');
let swap = (n) => {
    //finding the length of the number and adding the remaining 0's to make the number as 
    //a 8 bit number
    let length = n.length;
    let length1 = 8 - length;
    for (let i = 0; i < length1; i++) {
        n = '0' + n;
    }
    console.log(n);
    let length2 = n.length / 2;
    let s1 = '';
    let s2 = '';
    //concatenating the character to the empty string defined above
    for (let i = 0; i < n.length; i++) {
        if (i < n.length / 2) {
            s1 = s1 + n.charAt(i) + '';
        }
        else {
            s2 = s2 + (n.charAt(i) + '');
        }
    }
    //swapping the two nibbles and adding them and finally converting back to decimal format
    // by using parseInt method
    console.log(s2 + s1);
    return parseInt(s2 + s1, 2);
}
module.exports = { swap }