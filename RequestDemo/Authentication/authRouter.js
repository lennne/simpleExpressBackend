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

module.exports = routes;