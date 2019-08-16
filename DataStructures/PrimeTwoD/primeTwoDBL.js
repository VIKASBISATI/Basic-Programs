
class Prime {
    primeEvaluation() {
        let c = 1000;
        let row = [];
        let col = [];
        for (let i = 0; i <= c; i++) {
            //for the values less than 1 there doesn't exists any prime numbers
            if (i <= 1) {
                //console.log(i + ' is not a prime number');
                continue;
            }

            //initianlly assuming that the given number is not a prime number
            let f = 0;
            for (let j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    //if the remainder of the number is zero within the number then confirming that
                    //it is not a prime number and breaking the inner for loop
                    f = 1;
                    break;
                }
            }
            if (f == 0) {
                //checking for the value of f is 0 or not if 0 then it is a prime number else not
                col.push(i);
            }
            if ( i % 100 == 0 && i != 0) {
                row.push(col);
                col=[];
            }
            //col=[];
        }
        console.log(row);
    }
}
module.exports=Prime;