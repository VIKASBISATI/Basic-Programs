var input = require('readline-sync');
class BSTNumber {
    factorial(n) {
        var f = 1;
        for (let i = 1; i <= n; i++) {
            f = f * i;
        }
        return f;
    }
    NumOfBST() {
        var n = input.questionInt('Enter the number for calculating the number of binary serach trees');
       var a= this.factorial(2 * n);
        var b=this.factorial(n + 1);
        var c=this.factorial(n)
        var res =a /(b*c);
        console.log(res);
        var numOfNodes = this.factorial(n);
        return res * numOfNodes;
    }
}
var o = new BSTNumber();
console.log("The number of possibilities are " + o.NumOfBST());