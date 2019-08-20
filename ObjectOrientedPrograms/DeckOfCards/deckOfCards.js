/******************************************************************************
* @Purpose : Anagrams
* @file : anagramBL.js
* @overview : To find the anagrams of two string
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
var input = require('readline-sync');
var suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
console.log(suit);
var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
var len = suit.length * rank.length;
var deck = [];
deck.length = len;
for (let i = 0; i < rank.length; i++) {
    for (let j = 0; j < suit.length; j++) {
        deck[4*i+j]=rank[i]+' of type '+suit[j];
    }
}
// console.log(deck);
// console.log(deck.length);
for(let i=0;i<deck.length;i++)
{
    let rand=Math.floor(Math.random()*len) + 1;
    console.log('rand is '+rand)
}
var ar=[];
 ar[0]=2;
let r=1;
console.log(ar.indexOf(r))
if(ar.indexOf(r)==-1)
{
    console.log('hi')
}