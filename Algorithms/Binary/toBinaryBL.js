/******************************************************************************
* @Purpose : Binary conversion
* @file : toBianryBL.js
* @overview : To convert the decimal number into binary number
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let toBinary = (n) => {
    let temp = n;
    let s = '';
    //getting the remainder of the number and adding it to the empty string and dividing by the number by 2 to get the binary equivalent of the number
    while (temp != 0) {
        let rem = parseInt(temp % 2);
        s = rem + s;
        temp = parseInt(temp / 2);
    }
    //finally returning the binary equivalent of the decimal number will be stored in the variable s 
    return s;
}
module.exports = { toBinary }