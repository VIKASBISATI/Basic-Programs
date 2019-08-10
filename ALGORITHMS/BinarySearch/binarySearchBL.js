/******************************************************************************
* @Purpose : Binary Search
* @file : binarySearchBL.js
* @overview : To search for the given in the list of elements present in the array by recursion
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let input=require('readline-sync');
let search=(low,high)=>
{
    // when the array contains single element then returning the lower index or
    //  when the difference between the higher 
    //  index and lower index is 1 then returning the lower index
    if(high-low==1)
    {
        return low;
    }
    //getting the middle index of the array
    mid=parseInt((low+high)/2);
    // asking the user whether the guessed number is less than the middle value
    let res=input.question('is your number less than '+mid);
    //recursively calling the search method until the condition high-low should be equal to 1
    if(res==1)
    {
        return search(low,mid);
    }
    else
    {
        return search(mid,high);
    }
}
module.exports={search}