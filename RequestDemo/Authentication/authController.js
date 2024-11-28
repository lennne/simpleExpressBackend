const userService = require('../User/userService');
const authService = require('./authService');

const registerUser = (userData, done) => {
    
    userService.findUser(userData.email, (err,userFound)=>{
        if(err){
            done(err);
        }
        else {
            if(userFound){
            done(userFound); 
            }else{
                userService.saveUser(userData,done);
            }
    }
    })
}

const loginUser = ({email,password}, done) => {
    userService.findUser(email, (err,userFound)=>{ //callback function which accepts an error value and whether a user was found
        if(err){
            return done(err);
        }else{
            const verifiedUser = authService.verifyUser({email,password},userFound);
            if(verifiedUser){
                const jwtToken = authService.createJWT(userFound);
                done(undefined, jwtToken);
            }else{
                done({error:"User not verified!"})
            }
        }
    })
}

module.exports = {
    registerUser,
    loginUser
}