/******************************************************************************
* @Purpose : Finding PrimeNumbers that are Anagrams after adding the data into the linkedlist
in a sorted way
* @file : orderedList.js
* @overview :Finding PrimeNumbers that are Anagrams after adding the data into the linkedlist
in a sorted way
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
console.log(textArray);
//inserting the elements in a sorted way
for (var i = 0; i < textArray.length; i++) {
    ll.insertAfterSort(textArray[i]);
}
ll.display();
console.log('The elements are');
//asking the user for search element
var key = input.question('Enter the search key : ');
var ar = [];
ar = ll.search(key);
//The element will be deleted from the linked list when the key is found otherwise it will be added 
if (ar[0] + "" == 'true') {
    ll.deleteAtSpecificPosition(parseInt(ar[1]));
    console.log('After deleting at specific position ');
}
else {
    console.log(ll.insertAfterSort(key + ""));
}
// Finally writing the changes back to the file
var str = ll.display();
fs.writeFile("/home/admin1/Desktop/a.txt", str, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});