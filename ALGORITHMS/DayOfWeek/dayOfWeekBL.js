/******************************************************************************
* @Purpose : Day of Week
* @file : dayOfWeekBL.js
* @overview : To find the day of the week given the number of day,month and year
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
dayOfWeek=(d,m,y)=>{
    //calculating the day of the week by using the formula given below
    let y1 = parseInt(y - ((14 - m) / 12));
    let x = parseInt(y1 + (y1/4) - (y1/100) + (y1/400));
    let m1 =parseInt( m + 12 * ((14 - m) / 12) - 2);
    let d1 =parseInt((d + x + ((31*m1) / 12)) % 7);
    return d1;
    }
    module.exports={dayOfWeek};