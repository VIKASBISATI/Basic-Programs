/******************************************************************************
* @Purpose : To find the sorted array using the sorting technique called "Merge Sort"
* @file : mergeSort.js
* @overview : 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let toBinary=(n)=>
{
    let temp=n;
    let s='';
    while(temp!=0)
    {
        let rem=parseInt(temp%2);
        s=rem+s;
        temp=parseInt(temp/2);
    }
    return s;
}
module.exports={toBinary}