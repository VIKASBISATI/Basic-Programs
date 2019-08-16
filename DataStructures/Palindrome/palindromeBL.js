var d = require('./dequeueBL');
let palindromeCalculation = (pal) => {
    console.log('Length is ' + pal.length)
    var dequeuObject = new d(pal.length);
    var st = '';
    let i = 0;
    while (!dequeuObject.isFull()) {
        let s = pal.charAt(i);
        s = s + '';
        i++;
        dequeuObject.insertRear(s);
        // dequeuObject.display();
    }
    while (!dequeuObject.isEmpty()) {

        if (dequeuObject.getRear != '') {
            st = st + dequeuObject.getRear();
        }
        dequeuObject.deleteRear();
    }
    if (st === pal) {
        console.log('Entered word ' + pal + ' is a palindrome');
    }
    else {
        console.log('Entered word ' + pal + ' is not a palindrome');
    }
}
module.exports = { palindromeCalculation }