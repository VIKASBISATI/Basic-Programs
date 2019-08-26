/******************************************************************************
* @Purpose : CHATAPP
* @file : models.js
* @overview : 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 26/09/2019
******************************************************************************/
var mongoose = require('mongoose');
var user=new mongoose.Schema({
firstName:
{
    type:String,
    required:true
},
lastName:
{
    type:String,
    required:true
},
email:
{
    type:String,
    required:true,
    unique:true
},
password:
{
    type:Integer,
    required:true,
    unique:true
}
})
mongoose.model('users',user)