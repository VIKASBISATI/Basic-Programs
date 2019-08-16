var input = require('readline-sync');
var bo = require('./dequeueBL');
var len = input.questionInt('Enter the number of persons in the bank');
var bankObject = new bo(len);
var bankAmount = 100000;
console.log('Enter the person details');
for (let i = 0; i < len; i++) {
    bankObject.insertRear(input.question());
}
for (let i = 0; i < len; i++) {
var name=bankObject.getRear();
bankObject.deleteRear();
var ch = input.questionInt(name+'1.Deposit2.WithDraw');
switch (ch) {
    case 1:
        var dep = input.questionInt(name+'Enter the amount to deposit');
        bankAmount = bankAmount + dep;
        break;
    case 2:
        var wit = input.questionInt(name+'Enter the amount to withdraw');
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