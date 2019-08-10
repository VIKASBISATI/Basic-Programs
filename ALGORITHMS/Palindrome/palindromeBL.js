/******************************************************************************
* @Purpose : Prime numbers which are palindromes and anagrams
* @file : palindromeBL.js
* @overview : To find the prime numbers which are both palindrome and anagrams
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let palindromeObject = require('./palindromeBL');
let isPrimeDisplay = (low, high) => {
    let arr=[];
    let k = 0;
    for (let i = low; i <= high; i++) {
        if (i <= 1) {
            continue;
        }

        let f = 0;
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                f = 1;
                break;
            }
        }
        if (f == 0) {
            // arr = [];
           // console.log(i); 
            arr.push(i);
        //    console.log(arr);
        }
    }
    return arr;
}
let isAnagram = (arr) => {
    let arr1 = [];
    console.log('Entered');
   // let k = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let temp=arr[i];
        console.log(temp);
        let str1 = Array.from(temp);
        //console.log('str1'+str1);
        for (let j = i+1; j < arr.length; j++) {          
            let str2 = Array.from(arr[j]);
           // console.log(str2);
            if (str1.length != str2.length) {
                return;
            }
            str1 = str1.sort();
            str2 = str2.sort();
          //  console.log('string one'+str1);
            for (let K = 0; K < str1.length; K++) {
                if (str1[K] != str2[K]) {
                    return;
                }
            }
          console.log(str1);
          console.log(str2);
        }
    }
    return arr1;
}
let isPalindrome = (arr) => {
    let arr2 = [];
   // console.log('entered');
    for (let i = 0; i < arr.length; i++) {
        let temp = (arr[i]);
        let s = 0;
        while (temp != 0) {
            let rem = parseInt(temp % 10);
            s = parseInt(s * 10 + rem);
            temp =parseInt( temp / 10);
        }
        if (s == arr[i]) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
let display = (low,high) => {
let arr=isPrimeDisplay(low,high);
// console.log(arr);
let arr1=isAnagram(arr);
// let arr2=isPalindrome(arr);
 let arr3=arr1.sort();
// let arr4=arr2.sort();
 console.log(arr3);
//  console.log(arr2);
}
module.exports = { display,isAnagram, isPrimeDisplay, isPalindrome }