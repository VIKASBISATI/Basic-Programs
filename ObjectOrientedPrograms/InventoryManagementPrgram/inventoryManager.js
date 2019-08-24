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
const fs = require('fs');
var inventObject=require('./inventoryMangerBL');
var content = fs.readFileSync('/home/admin1/Desktop/BRIDGELABS/ObjectOrientedPrograms/InventoryManagementPrgram/inventoryManagement.json');
var arr = JSON.parse(content);
// console.log( arr.Grocery['Rice'][0].Name);
inventObject.inventoryOperations();