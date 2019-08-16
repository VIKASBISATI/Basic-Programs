var input=require('readline-sync');
let palCalculationObject=require('./palindromeBL');
var pal=input.question('Enter the string for checking the name is palindrome or not :  ');
palCalculationObject.palindromeCalculation(pal);