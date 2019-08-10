/******************************************************************************
* @Purpose : Anagrams
* @file : anagram.js
* @overview : To find the anagrams of two string
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input=require('readline-sync');
let anagramObject=require('./anagramBL');
//reading the strings from the user
let s1=input.question('Enter the first string');
let s2=input.question('Enter the second string');
// calling the function isAnagram with two strings
let bool=anagramObject.isAnagram(s1,s2);
if(bool)
{
    console.log('The two string are anagrams');
}
else{
    console.log('The two string are not anagrams');
}