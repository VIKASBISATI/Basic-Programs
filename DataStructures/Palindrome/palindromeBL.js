/******************************************************************************
* @Purpose : Palindrome
* @file : palindromeBL.js
* @overview :Finding the given number or string is a palindrome or not using dequeue
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
var d = require('./dequeueBL');
var palindromeCalculation = (pal) => {
    console.log('Length is ' + pal.length)
    var dequeuObject = new d(pal.length);
    var st = '';
    var i = 0;
    //enqueuing the data character by character converted to string  into dequeue
    while (!dequeuObject.isFull()) {
        var s = pal.charAt(i);
        s = s + '';
        i++;
        dequeuObject.insertRear(s);
        // dequeuObject.display();
    }
    //dequeuing the data string alphabet by alphabet from dequeue and reversing the string
    while (!dequeuObject.isEmpty()) {

        if (dequeuObject.getRear != '') {
            st = st + dequeuObject.getRear();
        }
        dequeuObject.devareRear();
    }
    //if the reversed string equals to the original string then that string said to 
    //palindrome else not a palindrome
    if (st === pal) {
        console.log('Entered word ' + pal + ' is a palindrome');
    }
    else {
        console.log('Entered word ' + pal + ' is not a palindrome');
    }
}
module.exports = { palindromeCalculation }