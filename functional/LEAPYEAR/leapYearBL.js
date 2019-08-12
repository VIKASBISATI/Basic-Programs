/******************************************************************************
* @Purpose : Leap Year
* @file : leapYearBL.js
* @overview :  To find the leap year of a given year by the user.
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let leapCal = (year) => {
    //if the year length is less than four it will be considered as a invalid length
    //else checking the conditions for the leap year and returning the corresponding value 
    if (year.length < 4) {
        console.log('Entered year is not in the expected range');
        return;
    }
    else {
        if (year % 4 == 0 && year % 100 != 0) {
            return year + ' is a Leap Year';
        }
        else if (year % 400 == 0) {
            return year + ' is a Leap Year';
        }
        else {
            return year + ' is not a Leap Year';
        }
    }
}
module.exports = { leapCal }