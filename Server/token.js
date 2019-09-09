/******************************************************************************
* @Purpose : CHATAPP
* @file : token.js
* @overview : 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 26/09/2019
******************************************************************************/
//json web tokens are used to authenticate the users 
var jwt = require('jsonwebtoken');
exports.generateToken = (payload) => {
    // console.log('abc')
    //jwt.sign is a method which takes payload and secret key which uses HMAC and SHA(Secure Hash Algorithms) 256 algorithms 
    //Here payload is not a string or a buffer
    const secKey = process.env.secret;
    const token = jwt.sign({ payload }, secKey, { expiresIn: '365d' });
    // console.log('Token is '+token)
    return token;
}
exports.verifyToken = (req, res, next) => {
    const secKey = process.env.secret;
    //jwt.verify is a method used for verifying the incoming token 
    jwt.verify(req.params.token, secKey, function (err, decoded) {
        if (err) res.status(400).send(err);
        else {
            console.log(req);
            req.decoded = decoded;
            next();
        }
    });
}  