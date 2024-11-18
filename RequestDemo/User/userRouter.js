const userController = require('./userController.js')
const express = require('express');
const routes = express.Router();

routes.get("/",(req,res)=>{
    try{
        userController.getUsersController((err,results)=>{
            //the error here is passed so we can handle some unique or specific error
            
            if(err){
                console.log(err);
                return res.status(400).send(err);
            }
            return res.status(200).send({status:"OK",data:results});
        });
    }//the catch here is to make sure that when accessing the data, since it is an async call which tries to read a file it can exit in an unsafe manner so in order to handle that we use the catch block
    catch(err){
        console.log("error is ", err);
        return res.status(500).send("Try after sometime hmm");
    }
});

routes.get("/:userId", (req,res)=>{
    try{
        //here we get the route parameter from the URL and to access it we use req.params
        let userId = parseInt(req.params.userId);
        userController.getUsersByIdController(userId,(err,results)=>{
            if(err){
                return res.status(400).send(err);
            }
            return res.status(200).send({status:"OK",data:results});
        });
    }catch(err){
        return res.status(500).send("Try again later");
    }
})

routes.post("/User",(req,res) => {
    let userData = req.body;
try{
    userController.saveUserController(userData,(err,results)=>{
        if(err){
            return res.status(400).send(err);
        }
        return res.status(200).send({status:"OK",data:results});
    })
}catch(err){
    return res.status(500).send("Try again Later");
}
    
});

routes.put("/:userId",(req,res)=>{
    let userId = req.params.userId;
    try{
        userController.updateUserController(userId,(err,results)=>{
            if(err){
                return res.status(400).send("There was an error in updating the resource")
            }
            return res.status(200).send({status:"OK",data:results});
        })
    }catch(err){
        return res.status(500).send("Try again later");
    }
});

routes.delete("/:userId",(req,res)=>{
    let userId = req.params;
    try{
        userController.removeUsersByIdController(userId,(err,results)=>{
            if(err){
                return res.status(400).send(err);
            }
            return res.status(200).send({status:"OK",data:results});
        });
    }catch(err){
        return res.status(500).send("Try again later");
    }
})

module.exports = routes;
