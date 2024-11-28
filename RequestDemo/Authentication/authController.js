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

module.exports = {
    registerUser
}