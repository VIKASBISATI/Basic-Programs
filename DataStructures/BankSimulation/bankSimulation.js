/******************************************************************************
* @Purpose : BankSimulation
* @file : bankSimulation.js
* @overview : To perform the bank operation using Dequeue data structure
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 12/09/2019
******************************************************************************/
var input = require('readline-sync');
var bo = require('./dequeueBL');
//Reading the number of customers are there in bank
var len = input.questionInt('Enter the number of persons in the bank');
var bankObject = new bo(len);
//Initialising the bank amount to one lakh rupees
var bankAmount = 100000;
/*Reading the details from the customer and inserting the customers 
at the rear end of the dequeue*/
console.log('Enter the person details');
for (let i = 0; i < len; i++) {
    bankObject.insertRear(input.question());
}
/*dequeuing the customers at the rear end and asking the customer for deposit and withdrawal
based on the choice given by the customer the logic for deposit and withdraw logic will
be executed else printing the statement as wrong choice*/
for (let i = 0; i < len; i++) {
    var name = bankObject.getRear();
    bankObject.deleteRear();
    var ch = input.questionInt(name + '1.Deposit2.WithDraw');
    switch (ch) {
        case 1:
            var dep = input.questionInt(name + 'Enter the amount to deposit');
            bankAmount = bankAmount + dep;
            break;
        case 2:
            var wit = input.questionInt(name + 'Enter the amount to withdraw');
            try {
                if (wit > bankAmount) {
                    throw err;
                }
            }
            catch (err) {
                console.log(err);
            }

            bankAmount = bankAmount - wit;
            break;
        default: console.log('Wrong choice');
            break;


    }
}