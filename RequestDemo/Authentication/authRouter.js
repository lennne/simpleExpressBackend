const express = require('express');
const routes = express.Router();
const authController = require('./authController');


routes.post('/register',(req,res)=>{
    try{
        const {username,email,password} = req.body;
        if(!(username,email,password)){
            return res.status(400).send("Required inputs are missing!");
        }
        const userDetails = {
            username,email,password
        }
        authController.registerUser(userDetails, (err,result) => {
            if(err){
                return res.status(400).send({error:'User Already Exists'})
            }
            else{
                res.status(201).send(result);
            }
        });
    }
    catch(err){
        res.status(400).send({error:"Unexpected error while registering the user"});
    }
})

routes.post('/login',(req,res)=>{
    try{
        const {email, password} = req.body;
        if(!(email,password)){
             res.status(400).send({error:"Required Inputs are missing", err})
        }
        authController.loginUser({email,password},(err,results)=>{
            if(err){
                res.status(400).send("Invalid Credentials");
            }else{
                res.status(200).send(results);
            }

        })
    }
    catch(err){ 
        res.status(500).send({error:"There was an error while registering the user", err});

    }
})

module.exports = routes;