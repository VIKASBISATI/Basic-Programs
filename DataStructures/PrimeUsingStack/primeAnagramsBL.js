var st = require('./stackUsingLinkedList');
class PrimeAnagram {
    primeEvaluation(i) {
        if (i > 1) {
            let f = 0;
            for (let j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    f = 1;
                    break;
                }
            }        
            if (f == 0) {

                return true;
            }
            return false;
        }
        return false;
    }
    anagramEvaluation(s1, s2) {
        let str1 = Array.from(s1 + "");
        let str2 = Array.from(s2 + "");
        if (str1.length != str2.length) {
            return false;
        }
        str1 = str1.sort();
        str2 = str2.sort();
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] != str2[i]) {
                return false;
            }
        }
        return true;
    }
    operation() {
        let col = [];
        for (let i = 0; i <= 1000; i++) {
            if (this.primeEvaluation(i)) {
                col.push(i);
            }
        }
        // console.log(col[5]);
        let row = [];        
        let row1 = [];
        let row2 = [];
        for (let i = 0; i < col.length - 1; i++) {
            for (let j = i + 1; j < col.length; j++) {
                if (this.anagramEvaluation(col[i], col[j])) {
                    row.push(parseInt(col[i]));
                    row.push(parseInt(col[j]));
                    // console.log(col[i] + '   ' + col[j])
                }
            }
        }
        let ar = []
        for (let i = 0; i < row.length; i++) {
            ar[i] = row[i];
        }
        for (let i = 1; i < ar.length; i++) {
            let key = ar[i];
            let j = i - 1;
            while (j >= 0 && ar[j] > (key)) {
                ar[j + 1] = ar[j];
                j--;
            }
            ar[j + 1] = key;
        }
        for (let i = 0; i < ar.length; i++) {
            row[i] = ar[i];
        }
        console.log(row);
        let s=new st(row.length);
        for (let i = 0; i < row.length; i++) {
            s.push(row[i]);
        }
        s.display();
        // let i=1;
        // let j=0;
        // while(i<=10)
        // {
        // while(row[j]<=100*i)
        // {
        //     row1.push(row[j]);
        //     j++;
        // }
        // row2.push(row1);
        // row1=[];
        // i++;
        // }
        // console.log(row2);
    }
}
let o = new PrimeAnagram();
o.operation();