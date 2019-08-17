/******************************************************************************
* @Purpose : Hash
* @file : hash.js
* @overview : To avoid the collision of data using seperate chaining method using linked list
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 12/09/2019
******************************************************************************/
var input = require('readline-sync');
var ha = require('./hashBL');
//reading the size and number of elements in the table from the user
var si = input.questionInt('Enter the size of the hashsh Table');
var hash = new ha(si + 1);
var size = input.questionInt('Enter how many elements are there in table')
console.log('Enter the table data');
//reading the data to insert into table
for (let i = 0; i < size; i++) {
    hash.insert(input.questionInt());
}
hash.dis();