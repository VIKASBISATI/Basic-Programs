/******************************************************************************
* @Purpose : CommercialDataProcessing
* @file : stockAccount.js
* @overview : To read in the stock details from json file and perform buy,sell,save and 
printreport and write back the data to json file
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 19/09/2019
******************************************************************************/
var input = require('readline-sync');
var so = require('./stockAccountBL');
//
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