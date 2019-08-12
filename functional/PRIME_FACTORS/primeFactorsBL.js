/******************************************************************************
* @Purpose : Prime Factors
* @file : primeFacotsBL.js
* @overview : To find the prime factors of the given number
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let primeFactorsCalculation = (num) => {
    console.log('The prime Factors are : ');
    //logic for finding the prime factors
    for (let i = 2; i < num; i++) {
        while (num % i == 0) {
            console.log('\n' + i);
            num = num / i;
        }
    }
    if (num > 2) {
        console.log('\n' + num);
    }
}
module.exports = { primeFactorsCalculation }