/******************************************************************************
* @Purpose : Harmonic Number
* @file : harmonicNumberBL.js
* @overview : To find the nth Harmonic Number
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let harmCal=(num)=>
{
let nth=0;
// finding the value of nth harmonic number by using the logic sum by 1/i
for(let i=1;i<=num;i++)
{
    nth=nth+(1/i);
}
return nth;
}
module.exports={harmCal}