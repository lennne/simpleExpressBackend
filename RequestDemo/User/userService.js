const userDAO = require('./userDAO');

const getUsers = (err, done)=>{
   userDAO.getUsers(err, done);
}

const getUsersById = (userId,done) => {
    userDAO.getUsersById(userId,done);
}

const findUser = (email, done) => {
    userDAO.findUser(email, done);
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

module.exports = {getUsers, getUsersById, findUser, updateUser, saveUser, removeUsersById};