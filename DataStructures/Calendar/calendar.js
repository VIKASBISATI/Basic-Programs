var calendar = require('./calendarBL');

var monthArray = [
    "",
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];
var days = [
    0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];
try {
    var m = + process.argv[2];
    var y = + process.argv[3];
    var mon = parseInt(m);
    var year = parseInt(y);
    if (mon < 1 || mon > 12) throw "You have not entered the month in range"
    if (mon == undefined || year == undefined) throw "No month and year defined"
    if (isNaN(mon) || isNaN(year)) throw "wrong data entry";
    if (mon % 1 != 0 || year % 1 != 0) throw "you have entered decimal number"
    if (mon == 2 && calendar.isLeapy(year)) { days[mon] = 29; }
    console.log(' ' + monthArray[mon] + ' ' + y);
    console.log(" S M Tu W Th F S");
    var day = calendar.day(mon, 1, year);
    console.log(day)
    var s = ' ';
    for (let i = 0; i < day; i++) {
        console.log(' ')
    }
    for (var i = 1; i <= days[mon]; i++) {
        console.log(' ' + i)
        if (((i + day) % 7 == 0) || (i == days[mon])) {
            console.log(" ");
        }
    }
} catch (err) {
    console.log("Error: " + err);
}