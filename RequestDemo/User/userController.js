const {getUsers, getUsersById, saveUser, removeUsersById, updateUser} = require('./userService');
const getUsersController = (done)=>{
    return getUsers(done);
}

const getUsersByIdController = (userId, done) => {
    return getUsersById(userId,done);
}

const saveUserController = (userId, done) => {
    return saveUser(userId, done);
}

const removeUsersByIdController = (userId, done) => {
    return removeUsersById(userId, done);
}

const updateUserController = (userId,userData, done) => {
    return updateUser(userId,userData,done);
}

module.exports = {getUsersController, getUsersByIdController, saveUserController, removeUsersByIdController, updateUserController}