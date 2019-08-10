/******************************************************************************
* @Purpose : Triplets
* @file : tripletsBL.js
* @overview : To find the sum of all combinations of the array elements is zero in the array 
given by the user 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let tripletsCalculation=(arr)=>
{
    //finding all the possibilities to print the numbers the sums to 0
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        for(let k=j+1;k<arr.length;k++)
        {
            if(arr[i]+arr[j]+arr[k]==0)
            {
                console.log(i+'  '+j+'  '+k);
            }
        }
    }
}
}
module.exports={tripletsCalculation}