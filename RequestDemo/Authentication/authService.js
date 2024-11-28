const jwt = require('jsonwebtoken');
const config = require('../../config');
const verifyUser = ({email,password}, userFound) => {
    if(email === userFound.email && password === userFound.password){
        return true;
    }
    return false;
}

const createJWT = (userFound) => {
    const payload = {
        role : "USER",
        email : userFound.email,
        name : userFound.name,

    }
   const Token = jwt.sign(payload, config.AUTH_SECRET, {
    expiresIn:3600,
        }
    )
    return Token;

}
module.exports = {verifyUser, createJWT};