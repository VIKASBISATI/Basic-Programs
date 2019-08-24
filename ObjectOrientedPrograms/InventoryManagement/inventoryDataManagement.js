/******************************************************************************
* @Purpose :JSON Inventory Data Management of Rice, Pulses and Wheat
* @file : inventoryDataManagement.js
* @overview : To read the data from json file and process the data and finally 
print the corresponding output. 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 19/09/2019
******************************************************************************/
var input = require('readline-sync');
var inventObject=require('./inventoryDataManagementBL');
//calling invent method
inventObject.invent();