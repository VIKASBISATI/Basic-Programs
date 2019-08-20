/******************************************************************************
* @Purpose :JSON Inventory Data Management of Rice, Pulses and Wheats
* @file : inventoryDataManagement.js
* @overview : To read the data from json file and process the data and finally 
print the corresponding output. 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 19/09/2019
******************************************************************************/
var input = require('readline-sync');
const fs = require('fs');
try {
    var txt = fs.readFileSync('/home/admin1/Desktop/b.txt').toString('utf-8');
    var jsonText = JSON.parse(txt);
    if (txt == '') throw "File is Empty"
    for (var kind in jsonText.Grocery) {
        for (let i = 0; i < jsonText.Grocery[kind].length; i++) {
            var name = jsonText.Grocery[kind][i].Name;
            var weight = jsonText.Grocery[kind][i].Weight;
            var price = jsonText.Grocery[kind][i].PricePerKg;
            console.log('Name is : ' + name + ' ; Weight is : ' + weight + ' ; Prices is : ' + price + ' ; Total price is : ' + price * weight);
        }
    }
}
catch (err) {
    console.log(err);
}