/******************************************************************************
* @Purpose : Stock Report Using Stack implemented by Linked List
* @file : stockWithStack.js
* @overview : To read the stock data from file and print the stock report
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 19/09/2019
******************************************************************************/
var input = require('readline-sync');
const fs = require('fs');
var content = fs.readFileSync('/home/admin1/Desktop/BRIDGELABS/ObjectOrientedPrograms/StockWithStack/inventory.json');
var arr = JSON.parse(content);
console.log(arr)
var stackObject = require('/home/admin1/Desktop/BRIDGELABS/ObjectOrientedPrograms/Utility/stackUsingLinkedList.js')
var stackUsingLinkObject = new stackObject(100);
for (let i = 0; i < arr.length; i++) {
    stackUsingLinkObject.push(arr[i]);
}
class StockAccount {
    constructor(stockName, noOfShares, value) {
        this.stockName = stockName;
        this.noOfShares = noOfShares;
        this.value = value;
        this.stockSymbol;
    }
    buy() {
        try {
            var n = input.questionInt('Enter how many stocks are there');
            if (isNaN(n)) throw "Not a Number";
            for (let i = 1; i <= n; i++) {
                this.stockSymbol = input.question('Enter the stock symbol');
                this.stockName = input.question('Enter stock name');
                this.noOfShares = input.questionInt('Enter no of shares');
                if (isNaN(this.noOfShares)) throw "Wrong no of shares entered";
                this.value = input.questionInt('Enter the value of the share');
                if (isNaN(this.value)) throw "Wrong Value entered"
                var data = {
                    "name": this.stockName,
                    "numberOfShares": this.noOfShares,
                    "value": this.value,
                }
                data.stockSymbol = this.stockSymbol;
                // console.log(data);
                stackUsingLinkObject.push(data);
            }
            // console.log('After adding all the object');
            console.log(stackUsingLinkObject.display(arr));
        }
        catch (err) {
            console.log(err);
        }
    }
    sell() {
        // var pos = input.questionInt('Enter the position for deleting the stock');
        stackUsingLinkObject.pop();
        console.log('After deleting ');
        // console.log(stackUsingLinkObject.display());
    }
    save() {
        var result = JSON.stringify(stackUsingLinkObject.display(arr));
        fs.writeFile('/home/admin1/Desktop/BRIDGELABS/ObjectOrientedPrograms/StockWithStack/inventory.json', result, (err) => {
            if (err) console.log(err);
            console.log('Successfully written into the file');
        })
    }
    printReport() {
        console.log(stackUsingLinkObject.display());
    }
}
let ob = new StockAccount('BMRCL', '45', '1230');
ob.buy();
ob.save();