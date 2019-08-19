/******************************************************************************
* @Purpose : Calendar
* @file : calendar.js
* @overview :To display the calendar given the month and year as a command line arguments
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
var calendar = require('./calendarBL');
//declaring the month array with month names
var monthArray = [
    "",
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];
//declaring the day array with specific days in the particular month
var days = [
    0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];
try {
    //reading the month year from command line
    var m = + process.argv[2];
    var y = + process.argv[3];
    var mon = parseInt(m);
    var year = parseInt(y);
    //validating the month and year
    if (mon < 1 || mon > 12) throw "You have not entered the month in range"
    if (mon == undefined || year == undefined) throw "No month and year defined"
    if (isNaN(mon) || isNaN(year)) throw "wrong data entry";
    if (mon % 1 != 0 || year % 1 != 0) throw "you have entered decimal number"
    if (mon == 2 && calendar.isLeapy(year)) { days[mon] = 29; }
    console.log(' ' + monthArray[mon] + ' ' + y);
    //printing the calendar
    console.log(" S M Tu W Th F S");
    var day = calendar.day(mon, 1, year);
    console.log(day)
    var s = '';
    for (let i = 0; i < day; i++) {
        console.log(' ')
        s=s+' '
    }
    // console.log(s)
    for (var i = 1; i <= days[mon]; i++) {
        console.log(' ' + i)
        //giving the spaces at the end of the week and month
        if (((i + day) % 7 == 0) || (i == days[mon])) {
            console.log(" ");
        }
    }
} catch (err) {
    console.log("Error: " + err);
}