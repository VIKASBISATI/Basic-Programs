var input = require('readline-sync');
var str = input.question('Enter the string');
var pat1 = /[91-]{3}?[789]\d{9}/
var pat2 = /[<<]{2}?[a-zA-Z,. ]{3,}?[>>]{2}/g
var pat3 = /\d{2}[./-]\d{2}[./-]\d{4}/
if (pat1.test(str) && pat2.test(str) && pat3.test(str)) {
    var t1 = str.match(pat1);
    // console.log(t1[0]);
    let s = t1[0];
    str = str.replace(s, '9398992309')
    var t2 = str.match(pat2);
    // console.log(t2[0]+'   '+t2[1])
    let ar=[];
    ar=t2[1].split(' ');
    let s1=ar[0];
    s1=s1.substr(2,s1.length-1);
    str=str.replace(t2[0],s1)
    // console.log(s1);
    var t3 = str.match(pat3);
    str = str.replace(t3[0], '19/08/2019')
    console.log('The final strinng is')
    console.log(str)
}
else {
    console.log('false')
}