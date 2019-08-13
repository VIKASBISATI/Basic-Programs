/******************************************************************************
* @Purpose : Search for the element in the file
* @file : readFromFile.js
* @overview : To search for the element which is present inside the file and writing its
again to the file
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input = require('readline-sync');
const fs = require('fs')
let linkedListObject = require('./linkedListBL');
//reading the text from the file and splitting into array by spaces
let text = fs.readFileSync('/home/admin1/Desktop/a.txt').toString('utf-8');
let textArray = text.split(' ');
//adding the elements to the linked list
let ll = new linkedListObject();
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