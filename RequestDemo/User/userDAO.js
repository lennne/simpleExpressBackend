const fs = require('fs');
const URL = "./RequestDemo/User/users.json";
const getUsers = (done) => {
    
    fs.readFile(URL,'utf-8',(err,fileContent)=>{
        //return user data
        if(err){
            return done(err,null)
        }
        let loadedData = JSON.parse(fileContent);
        return done(null,loadedData);
    });
    
}

const getUsersById = (userId, done) => {
    fs.readFile(URL,'utf-8', (err, fileContent)=>{
        if(err){
            return done("There was an error while getting user");
        }
        console.log(typeof(userId));
        let loadedData = JSON.parse(fileContent);
        let user = loadedData.find((myObject) => myObject.userId === userId);
        console.log(user);
        return done(undefined,user);
    })
}

const saveUser = (userData, done) => {
    
    //get user object data
    fs.readFile(URL,'utf-8', (err,fileContent)=> {
        if(err){
            return done("there was an error");

        }
        let database = JSON.parse(fileContent);
        //save the data
        let existingData = database.find((myobject => myobject.userId === userData.data.userId))
        if(existingData){
            return done("Data already exists!")
        }
        database.push(userData.data);
        database = JSON.stringify(database);
        
        fs.writeFile(URL,database,()=>{
            //exeecute done operation
            return done(undefined,"Finished");
        })
    })


}

const removeUsersById = (userId, done) => {
    fs.readFile(URL,'utf-8',(err,fileContent)=>{
        if(err){
            return done("There was an error removing the files");
        }
        let loadedData = JSON.parse(fileContent);
        let data = loadedData.find(myData => myData.id === userId);
        let index = loadedData.indexOf(data);
        loadedData.splice(index,1);
        loadedData = JSON.stringify(loadedData);

        fs.writeFile(URL,loadedData, ()=>{
            return done(undefined,"it got deleted");
        })
   
    })
}

//this function takes in two distinct values: userId, userData
//because unlike the saveUser data where we have just one complete object
//over here we have one or more values that have changed and we're simply
//specifying which of the data in the database or server we want to update
const updateUser = (userId, userData, done) => {
    fs.readFile(URL,'utf-8', (err, fileContent)=>{
        if(err){
            return done("There was an error updating user");
        }
       console.log(userData);
        //parse the json text
        let loadedData = JSON.parse(fileContent);
        //find the object data using the array
        let user = loadedData.find(myData => myData.userId === userId);
        //get the index of the data
        let index = loadedData.indexOf(user);
        let newUser = {
            ...loadedData[index],
            ...userData
        }
        console.log(newUser);
     
        loadedData[index] = newUser;

        loadedData = JSON.stringify(loadedData);
        
        fs.writeFile(URL, loadedData, ()=>{
            return done(null,"Finished updating");
        });
        
    })
}

module.exports = {getUsers, getUsersById, saveUser, updateUser, removeUsersById};