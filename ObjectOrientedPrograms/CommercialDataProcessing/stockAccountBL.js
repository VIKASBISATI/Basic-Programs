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
//importing the filesystem 
const fs = require('fs');
//reading the json file present in the local directory
var content = fs.readFileSync('/home/admin1/Desktop/BRIDGELABS/ObjectOrientedPrograms/CommercialDataProcessing/inventory.json');
//converting the json data into java script object
var arr = JSON.parse(content);
//creation of class called stockAccount with methods buy sell save and printreport
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
                console.log(arr)
                //pushing the read data into the array in the form of javascript object
                arr.push(
                    {
                        "name": this.stockName,
                        "numberOfShares": this.noOfShares,
                        "value": this.value
                    }
                )
            }
            console.log('After adding all the object');
            console.log(arr);
        }
        catch (err) {
            console.log(err);
        }
    }
    sell() {
        //reading the position at which the user has to delete the stock
        var pos = input.questionInt('Enter the position for deleting the stock');
        delete arr[pos];
        console.log('After deleting ');
        console.log(arr);
    }
    save() {
        //converting the javascript object to json text
        var result = JSON.stringify(arr);
        //writing the json text to the file
        fs.writeFile('/home/admin1/Desktop/BRIDGELABS/ObjectOrientedPrograms/CommercialDataProcessing/inventory.json', result, (err) => {
            if (err) console.log(err);
            console.log('Successfully written into the file');
        })
    }
    printReport() {
        //printing the stock details which are available in the array
        for (let i = 0; i < arr.length; i++) {
            console.log('Stock Name is ' + arr[i].name + 'no of shares is ' + arr[i].numberOfShares + 'values is ' + arr[i].value);
        }
    }
}
//exporting the class StockAccount
module.exports = StockAccount;