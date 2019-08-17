/******************************************************************************
* @Purpose : Calendar
* @file : calendarBL.js
* @overview :To display the calendar given the month and year as a command line arguments
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
var read = require('readline-sync');
module.exports = {
    //checking for the year is leap or not
    isLeapYear(year) {
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            return true;
        }
        else {
            return false;
        }
    },
    //finding the day i.e sunday,monday,.... given the day month and year
    day(day, month, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        return d0;
    }
}