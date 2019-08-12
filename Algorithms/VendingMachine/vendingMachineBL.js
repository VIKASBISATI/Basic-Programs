/******************************************************************************
* @Purpose : Vending Machine
* @file : vendingMachineBL.js
* @overview : To find the number of notes when the user is given the amount
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let change = (num, amount, i, text) => {
    if (i < amount.length) {
        //getting the remainder when divided the number by the array of available currency
        let balance = parseInt(num % amount[i]);
        //getting the number of notes and recursively calling the method till the amount becomes Zero
        let howManyNotes = parseInt(num / amount[i]);
        text = text + '  ' + howManyNotes + '  notes of  ' + amount[i];
        i++;
        change(balance, amount, i, text);
    }
    return text;
}
module.exports = { change }