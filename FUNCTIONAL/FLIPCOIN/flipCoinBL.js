/******************************************************************************
* @Purpose : Flip Coin
* @file : flipCoinBL.js
* @overview : To find the percentage of tails and heads given the number of attempts
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let flipCal=(n)=>{
let tails=0,heads=0;
for(let i=0;i<n;i++)
{
    //generating the random number and if the number generated is less than 0.5 then it is 
    //considered as a tails else heads
    let random=Math.random();
    if(random<0.5)
    {
        tails++;
    }
    else{
        heads++;
    }
}
let res=[tails,heads];
return res;
}
module.exports={flipCal}