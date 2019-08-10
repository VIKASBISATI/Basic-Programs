/******************************************************************************
* @Purpose : Insertion Sort
* @file : insertion.js
* @overview : o find the sorted array using the sorting technique called "Insertion Sort"
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input=require('readline-sync');
let insertionSortObject=require('./insertionBL');
let ar=[];
//reading the length and array elements and calling the method sorting 
let len=input.questionInt('Enter the length of the array');
console.log('Enter array elements');
for(let i=0;i<len;i++)
{
    ar.push(input.question());
}
insertionSortObject.sorting(ar);