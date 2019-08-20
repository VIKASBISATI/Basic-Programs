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
            var n = input.questionInt('Enter how many stocks are there');
            if (isNaN(n)) throw "Not a Number";
            for (let i = 1; i <= n; i++) {
                this.stockName = input.question('Enter stock name');
                this.noOfShares = input.questionInt('Enter no of shares');
                if (isNaN(this.noOfShares)) throw "Wrong no of shares entered";
                this.value = input.questionInt('Enter the value of the share');
                if (isNaN(this.value)) throw "Wrong Value entered"
                // console.log(arr)
                var data = {
                    "name": this.stockName,
                    "numberOfShares": this.noOfShares,
                    "value": this.value
                }
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
        var pos = input.questionInt('Enter the position for deleting the stock');
        linkObject.deleteAtSpecificPosition(ar.length);
        console.log('After deleting ');
        linkObject.display();
    }
    save() {
        var result = JSON.stringify(linkObject.display());
        fs.writeFile('/home/admin1/Desktop/BRIDGELABS/ObjectOrientedPrograms/CommercialDataProcessing/inventory.json', result, (err) => {
            if (err) console.log(err);
            console.log('Successfully written into the file');
        })
    }
    printReport() {
        linkObject.display();
    }
}
let ob = new StockAccount('BMRCL', '45', '1230');
ob.buy();