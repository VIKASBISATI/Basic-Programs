/******************************************************************************
* @Purpose : PrimeAnagrams
* @file : unorderedList.js
* @overview :Finding PrimeNumbers that are Anagrams after adding the data into the linkedlist
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
var input = require('readline-sync');
const fs = require('fs')
var linkedListObject = require('./linkedListBL');
//reading the text from the file and splitting into array by spaces
var text = fs.readFileSync('/home/admin1/Desktop/a.txt').toString('utf-8');
var textArray = text.split(' ');
//adding the elements to the linked list
var ll = new linkedListObject();
console.log(textArray)
for (let i = 0; i < textArray.length; i++) {
    ll.insertionAtEnd(textArray[i]);
}
console.log('The elements are');
let key = input.question('Enter the search key : ');
var ar = [];
ar = ll.search(key);
if (ar[0] + "" == 'true') {
    ll.deleteAtSpecificPosition(parseInt(ar[1]));
    console.log('After deleting at specific position ');
}
else {
    console.log(ll.insertionAtEnd(key + ""));
}
var str = ll.display();
fs.writeFile("/home/admin1/Desktop/a.txt", str, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});