/******************************************************************************
* @Purpose : Search for the element in the file
* @file : readFromFile.js
* @overview : To search for the element which is present inside the file and writing its
again to the file
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input=require('readline-sync');
let readObject=require('./readFromFileBL');
// reading the key from the user
let key=input.question('Enter key for finding the element using binary search method');
const fs=require('fs');
let s=[];
//reading the text from the file and splitting into array by spaces
let text=fs.readFileSync('/home/admin1/Desktop/a.txt').toString('utf-8');
let textArray=text.split(' ');
// sorting the array since binary search is applicable only for sorted array
textArray=textArray.sort();
console.log(textArray);
console.log('The Search key is there at '+readObject.binarySearch(textArray,0,textArray.length-1,key));