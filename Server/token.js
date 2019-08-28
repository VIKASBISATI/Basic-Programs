/******************************************************************************
* @Purpose : CHATAPP
* @file : token.js
* @overview : 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 26/09/2019
******************************************************************************/
var jwt = require('jsonwebtoken');
exports.generateToken = (payload) => {
    // console.log('abc')
   
    const secKey = "vikasSecret";
    const token=jwt.sign({payload}, secKey, {expiresIn:'365d'});
    // console.log('Token is '+token)
    return token;
}

exports.verifyToken=(req,res,next)=>
{
    jwt.verify(req.params.token, 'vikasSecret', function(err, decoded) {
       if(err) res.status(400).send(err);
       else{
           
           req.decoded=decoded;
           next();
       }
      });
}