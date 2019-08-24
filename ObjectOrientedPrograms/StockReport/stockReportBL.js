/******************************************************************************
* @Purpose : StockReport
* @file : stockReportBL.js
* @overview : To read the stock data from file and print the stock report
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 19/09/2019
******************************************************************************/
class StockPortfolio {
    constructor() {
        this.text;
        this.textArray = [];
        this.n;
    }
    //method for reading the file and splitting the data in the form of an array
    readFromFile() {
        const fs = require('fs');
        this.text = fs.readFileSync('/home/admin1/Desktop/stock.txt').toString('utf-8');
        this.textArray = this.text.split('/n');
        this.n = this.textArray.length;
    }
    //method for returning complete array
    getTextArray() {
        return this.textArray;
    }
    //method for returning the length of the array
    getTextArrayLength() {
        return this.n;
    }
}
//Stock is a subclass extending superclass StockPortfolio
class Stock extends StockPortfolio {
    constructor() {
        super();
        this.totalValue = [];
        this.stockName = [];
        this.len;
    }
    calculateStock() {
        //calling the super class method getTextArray from sub class using the keyword super
        super.readFromFile();
        var tarray = super.getTextArray();
        // console.log(tarray[0])
        this.len = super.getTextArrayLength();
        for (let i = 0; i < this.len; i++) {
            let tarr = tarray[i].split(' ');
            // console.log(tarr[i]);
            this.stockName[i] = tarr[0];
            //total price is the product of shares available and value
            let totalSum = parseInt(tarr[2]) * parseInt(tarr[1]);
            this.totalValue[i] = totalSum;
        }
    }
    //method for printing the final stock report
    printStockReport() {
        console.log('The Final Stock Report is ')
        for (let i = 0; i < this.len; i++) {
            console.log(this.stockName[i] + ' total value of stock is ' + this.totalValue[i]);
        }
    }
}
module.exports = Stock;
