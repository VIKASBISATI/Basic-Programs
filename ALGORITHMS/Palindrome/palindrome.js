/******************************************************************************
* @Purpose : Prime numbers which are palindromes and anagrams
* @file : palindrome.js
* @overview : To find the prime numbers which are both palindrome and anagrams
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input=require('readline-sync');
let palindromeObject=require('./palindromeBL');
let low=input.questionInt('Enter the lower limit of the range');
let high=input.questionInt('Enter the upper limit of the range');
palindromeObject.display(low,high);