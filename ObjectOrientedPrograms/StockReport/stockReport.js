/******************************************************************************
* @Purpose : StockReport
* @file : stockReport.js
* @overview : To read the stock data from file and print the stock report
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 19/09/2019
******************************************************************************/
var input = require('readline-sync');
var so = require('./stockReportBL');
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