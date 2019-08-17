/******************************************************************************
* @Purpose : PrimeAnagrams
* @file : primeAnagrams.js
* @overview :Finding the prime numbers that are anagrams using Two Dimensional array
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
var input = require('readline-sync');
var po = require('./primeAnagramsBL')
//calling the operation method where the prime anagram operation starts
var primeObject = new po();
primeObject.operation();