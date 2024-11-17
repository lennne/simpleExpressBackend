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
            return done("Finished")
        })
    })


}

const removeUsersById = (userId, done) => {
    fs.readFile(URL,(err,fileContent)=>{
        if(err){
            return done("There was an error removing the files");
        }
        let loadedData = JSON.parse(fileContent);
        loadedData.find(myData => myData.id === userId);
        loadedData = JSON.stringify(loadedData);
        writeFile(URL,loadedData, ()=>{
            return done("it got deleted");
        })
   
    })
}

module.exports = {getUsers, getUsersById};