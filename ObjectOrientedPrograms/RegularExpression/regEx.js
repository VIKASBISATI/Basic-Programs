/******************************************************************************
* @Purpose : RegularExpression Demonstration
* @file : regEx.js
* @overview : To replace the given string with the given data using regular expression
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 19/09/2019
******************************************************************************/
var input = require('readline-sync');
try {
    //reading the input string from the user
    var str = input.question('Enter the string');
    if (str == '') throw "String is Empty";
    var regObject = require('./regExBL');
    let object = new regObject();
    //passing three patterns for mobile number, username and date to bean class
    object.setPat1(/[91-]{3}?[789]\d{9}/)
    object.setPat2(/[<<]{2}?[a-zA-Z,. ]{3,}?[>>]{2}/g)
    object.setPat3(/\d{2}[./-]\d{2}[./-]\d{4}/);
    //calling the method compute
    object.compute(str);
}
catch (err) {
    console.log(err);
}
