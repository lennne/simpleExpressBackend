import {getUsers, getUsersById, removeUsersById, saveUser} from './userDAO';

const getUsers = (done)=>{
    getUsers(done);
}

const getUsersById = (userId,done) => {
    getUsersById(userId,done);
}


const removeUsersById = (userId,done) => {
    removeUsersById(userId,done);
}

const saveUser = (userData, done) => {
    saveUser(userData,done)
} 

const updateUser = (userId, userData,done) => {
    updateUser(userId, userData,done);
}

module.exports = {getUsers, getUsersById, saveUser, removeUsersById};