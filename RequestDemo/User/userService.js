const userDAO = require('./userDAO');

const getUsers = (done)=>{
   userDAO.getUsers(done);
}

const getUsersById = (userId,done) => {
    userDAO.getUsersById(userId,done);
}


const removeUsersById = (userId,done) => {
    userDAO.removeUsersById(userId,done);
}

const saveUser = (userData, done) => {
    userDAO.saveUser(userData,done)
} 

const updateUser = (userId, userData,done) => {
    userDAO.updateUser(userId, userData,done);
}

module.exports = {getUsers, getUsersById, updateUser, saveUser, removeUsersById};