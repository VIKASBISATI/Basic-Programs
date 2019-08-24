/******************************************************************************
* @Purpose : Stock management in a linked list
* @file : stockLinkBL.js
* @overview : To do operataion such as buy,sell,save and print report of stocks stored in a
linked list
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 19/09/2019
******************************************************************************/
var input = require('readline-sync');
const fs = require('fs');
var content = fs.readFileSync('/home/admin1/Desktop/BRIDGELABS/ObjectOrientedPrograms/StockLinkedList/inventory.json');
var arr = JSON.parse(content);
var linkedObject = require('/home/admin1/Desktop/BRIDGELABS/ObjectOrientedPrograms/Utility/linkedListBL.js')
var linkObject = new linkedObject();
for (let i = 0; i < arr.length; i++) {
    linkObject.insertionAtEnd(arr[i]);
}
class StockAccount {
    constructor(stockName, noOfShares, value) {
        this.stockName = stockName;
        this.noOfShares = noOfShares;
        this.value = value;
    }
    buy() {
        try {
            //reading how many stock are there
            var n = input.questionInt('Enter how many stocks are there');
            if (isNaN(n)) throw "Not a Number";
            for (let i = 1; i <= n; i++) {
                //reading the stock name from the user
                this.stockName = input.question('Enter stock name');
                //reading the number of shares available
                this.noOfShares = input.questionInt('Enter no of shares');
                //validating the shares entered by the user
                if (isNaN(this.noOfShares)) throw "Wrong no of shares entered";
                this.value = input.questionInt('Enter the value of the share');
                if (isNaN(this.value)) throw "Wrong Value entered"
                // console.log(arr)
                var data = {
                    "name": this.stockName,
                    "numberOfShares": this.noOfShares,
                    "value": this.value
                }
                //pushing the read data into the linkedlist in the form of javascript object
                linkObject.insertionAtEnd(data);
            }
            console.log('After adding all the object');
            linkObject.display();
        }
        catch (err) {
            console.log(err);
        }
    }
    sell() {
        //reading the position at which the user has to delete the stock
        var pos = input.questionInt('Enter the position for deleting the stock');
        linkObject.deleteAtSpecificPosition(ar.length);
        console.log('After deleting ');
        linkObject.display();
    }
    save() {
        //converting the javascript object to json text
        var result = JSON.stringify(linkObject.display());
        fs.writeFile('/home/admin1/Desktop/BRIDGELABS/ObjectOrientedPrograms/CommercialDataProcessing/inventory.json', result, (err) => {
            if (err) console.log(err);
            console.log('Successfully written into the file');
        })
    }
    printReport() {
        //printing the stock details which are available in the array
        linkObject.display();
    }
}