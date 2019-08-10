/******************************************************************************
* @Purpose : Hello World
* @file : helloWorldBL.js
* @overview : To replace the string entered by user with the username
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 05/09/2019
******************************************************************************/
let replaceName=(name)=>
{
    //if the value entered by the user is less than 3 then it will be considered as 
    //invalid length else concatenating the name with the string hellow <<username>>,how are you?
    if(name.length<3)
{
return 'You have entered wrong input';
}
return 'Hello '+name+', how are you?';
}
module.exports={replaceName}