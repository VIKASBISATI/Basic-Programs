/******************************************************************************
* @Purpose : Stock management in a Queue
* @file : stockWithQueue.js
* @overview : To do operataion such as buy,sell,save and print report of stocks stored in a
queue and maintaining the repective buy and sell dates
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 19/09/2019
******************************************************************************/
var input = require('readline-sync');
var so = require('./stockWithQueueBL');
var stockObject = new so('BMRCL', '20', '9000');
//Reading the choice from the user to buy,sell,save and printreport
var ch = input.questionInt('1.Buy  2.Sell  3.Save  4.PrintReport');
switch (ch) {
    case 1: stockObject.buy();
        break;
    case 2: stockObject.sell();
        break;
    case 3: stockObject.save();
        break;
    case 4: stockObject.save();
        break;
    default: console.log('Wrong Choice!!');
        break;
}