/******************************************************************************
* @Purpose : StockReport
* @file : stockReport.js
* @overview : To read the stock data from file and print the stock report
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 19/09/2019
******************************************************************************/
let stockObject=require('./stockReportBL');
let stockReference=new stockObject();
stockReference.calculateStock();
stockReference.printStockReport();