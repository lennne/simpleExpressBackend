import {fs, writeFile} from 'fs';
const URL = "RequestDemo/User/users.json";
const getUsers = (done) => {
    fs.readFile(URL,(err,fileContent)=>{
        //return user data
        if(err){
            return done("there was an error loading the json")
        }
        let loadedData = JSON.parse(fileContent);
        return done(loadedData);
    });

    return done( undefined )
}

const getUsersById = (userId, done) => {
    fs.readFile(URL, (err, fileContent)=>{
        if(err){
            return done("There was an error while getting user");
        }
        let loadedData = JSON.parse(fileContent);
        let user = loadedData.find((myObject) => myObject.id === userId);
        return done(user);
    })
}

const saveUser = (userData, done) => {
    
    //get user object data
    fs.readFile(URL, (err,fileContent)=> {
        if(err){
            return done("there was an error");

        }

        let database = JSON.parse(fileContent);
        //save the data
        database.push(userData);
        writeFile(URL,database,()=>{
            //exeecute done operation
            return done("Finished");
        })
    })


}

const removeUsersById = (userId, done) => {
    fs.readFile(URL,(err,fileContent)=>{
        if(err){
            return done("There was an error removing the files");
        }
        let loadedData = JSON.parse(fileContent);
        let data = loadedData.find(myData => myData.id === userId);
        let index = loadedData.indexOf(data);
        loadedData = loadedData.splice(index,1);
        writeFile(URL,loadedData, ()=>{
            return done("it got deleted");
        })
   
    })
}

//this function takes in two distinct values: userId, userData
//because unlike the saveUser data where we have just one complete object
//over here we have one or more values that have changed and we're simply
//specifying which of the data in the database or server we want to update
const updateUser = (userId, userData, done) => {
    fs.readFile(URL, (err, fileContent)=>{
        if(err){
            return done("There was an error updating user");
        }
        //parse the json text
        let loadedData = JSON.parse(fileContent);
        //find the object data using the array
        let user = loadedData.find(myData => myData.userId === userId);
        //get the index of the data
        let index = loadedData.indexOf(user);
        let newUser = {
            ...loadedData[index],
            userData
        }
        loadedData[index] = newUser;
        
        writeFile(URL, loadedData, ()=>{
            return done("Finished updating");
        });
        
    })
}

module.exports = {getUsers, getUsersById, saveUser, updateUser, removeUsersById};