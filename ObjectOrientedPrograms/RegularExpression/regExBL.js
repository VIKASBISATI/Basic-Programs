/******************************************************************************
* @Purpose : RegularExpression Demonstration
* @file : regEx.js
* @overview : To replace the given string with the given data using regular expression
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 19/09/2019
******************************************************************************/
class RegEx {
    //creating the bean class RegEx with getter and setter methods
    constructor() {
        this.pat1;
        this.pat2;
        this.pat3;
    }
    //setting three patterns for mobilenumber,date and username
    setPat1(pat1) {
        this.pat1 = pat1;
    }
    setPat2(pat2) {
        this.pat2 = pat2;
    }
    setPat3(pat3) {
        this.pat3 = pat3;
    }
    //getting the name for mobilenumber,username and date
    getPat1() {
        // console.log('get'+this.pat1)
        return this.pat1;
    }
    getPat2() {
        return this.pat2;
    }
    getPat3() {
        return this.pat3;
    }
}
//inheritance is acheived by the Compute class
class Compute extends RegEx {
    constructor() {
        //calling the super class constructor
        super();
    }
    compute(str) {
        /* validating all the patterns if all the three patterns matches with the given string
        then the next statements will be executed else it will produce false result*/
        console.log(' asdfa' + super.getPat1())
        if (super.getPat1().test(str) && super.getPat2().test(str) && super.getPat3().test(str)) {
            //replacing the matched patterns with the given test cases
            console.log('Hellow' + this.pat1)
            var t1 = str.match(this.pat1);
            // console.log(t1[0]);
            let s = t1[0];
            str = str.replace(s, '9398992309')
            var t2 = str.match(this.pat2);
            // console.log(t2[0]+'   '+t2[1])
            let ar = [];
            ar = t2[1].split(' ');
            let s1 = ar[0];
            s1 = s1.substr(2, s1.length - 1);
            str = str.replace(t2[0], s1)
            // console.log(s1);
            var t3 = str.match(this.pat3);
            str = str.replace(t3[0], '19/08/2019')
            console.log('The final strinng is')
            console.log(str)
        }
        else {
            console.log('false')
        }
    }
}
//exporting the classes Compute,Regex
module.exports = Compute, RegEx;