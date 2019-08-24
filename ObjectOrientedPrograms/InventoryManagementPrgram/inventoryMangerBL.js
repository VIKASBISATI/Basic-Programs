/******************************************************************************
* @Purpose :Inventory Management Program
* @file : inventorymanager.js
* @overview : To read the data from json file and process the data and finally 
print the corresponding output. 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 19/09/2019
******************************************************************************/
var input = require('readline-sync');
var inventoryOperations = () => {
    //reading the user input for how may items are there 
    var n = input.questionInt('Enter how many items are there');
    for (let i = 0; i < n; i++) {
        //reading the name of grocery from the user
        var name = input.question('Enter the grocery name');
        //reading the weight of grocery from the user
        var weight = input.questionInt('Enter the weight');
        //reading the price of the grocery from the user
        var price = input.questionInt('Enter the price of the product');
    }
    arr.push({
        'Name': name,
        'Weight': weight,
        'PricePerKg': price
    });
    console.log(arr)
}
module.exports = { inventoryOperations }