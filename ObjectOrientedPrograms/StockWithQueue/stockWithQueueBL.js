/******************************************************************************
* @Purpose : Stock management in a Queue
* @file : stockWithQueueBL.js
* @overview : To do operataion such as buy,sell,save and print report of stocks stored in a
queue and maintaining the repective buy and sell dates
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 19/09/2019
******************************************************************************/
var input = require('readline-sync');
const fs = require('fs');
var content = fs.readFileSync('/home/admin1/Desktop/BRIDGELABS/ObjectOrientedPrograms/StockWithQueue/inventory.json');
var arr = JSON.parse(content);
// console.log(arr)
var qo = require('/home/admin1/Desktop/BRIDGELABS/ObjectOrientedPrograms/Utility/queueLinkBL.js')
var stackObject = new qo();
for (let i = 0; i < arr.length; i++) {
    stackObject.enqueue(arr[i]);
}
var t = stackObject.getHead();
console.log(stackObject.display(arr, t));
// console.log('here')
// console.log('t is '+t)
class StockAccount {
    constructor(stockName, noOfShares, value) {
        this.stockName = stockName;
        this.noOfShares = noOfShares;
        this.value = value;
        this.stockSymbol;
    }
    buy() {
        try {
            //reading how many stock are there
            var n = input.questionInt('Enter how many stocks are there');
            if (isNaN(n)) throw "Not a Number";
            for (let i = 1; i <= n; i++) {
                //reading the stock name from the user
                this.stockSymbol = input.question('Enter the stock symbol');
                //reading the number of shares available
                this.stockName = input.question('Enter stock name');
                this.noOfShares = input.questionInt('Enter no of shares');
                //validating the shares entered by the user
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
                //pushing the read data into the queue in the form of javascript object
                stackObject.enqueue(data);
            }
            var d = new Date();
            var hr = d.getHours();
            var hour = hr % 12;
            if (hr == 12) {
                hour = 12;
            }
            var min = d.getMinutes();
            //priting the buy date
            console.log('Buy time is ' + hour + ' : ' + min);
            // console.log(queueUsingLinkObject.display(arr,t));
            // console.log('After adding all the object');
            console.log(stackObject.display(arr, t));
        }
        catch (err) {
            console.log(err);
        }
    }
    sell() {
        //reading the position at which the user has to delete the stock
        // var pos = input.questionInt('Enter the position for deleting the stock');
        stackObject.dequeue();
        console.log('After deleting ');
    }
    save() {
        //converting the javascript object to json text
        var result = JSON.stringify(stackObject.display(arr, t));
        //writing the json text to the file
        fs.writeFile('/home/admin1/Desktop/BRIDGELABS/ObjectOrientedPrograms/StockWithStack/inventory.json', result, (err) => {
            if (err) console.log(err);
            console.log('Successfully written into the file');
        })
    }
    printReport() {
        //printing the stock details which are available in the array
        console.log(stackObject.display(arr, t));
    }
}