const express = require('express')
const app = express();

const PORT = 4000 || process.env.PORT;

const users = [
    {"username": "john", "userId":101},
    {"username": "Bob", "userId":102},
    {"username": "William", "userId":103},
    {"username": "Carrousel", "userId":104},
    {"username": "michael", "userId":105},
    {"username": "Nathan", "userId":106},
    {"username": "Mike", "userId":107},
    {"username": "George", "userId":108},
    {"username": "Samuel", "userId":109}
]
//get route with a route path that matches requests to /hello
app.get('/users/:userId',(req,res)=>{
    let user = users.find((t)=> t.userId === parseInt(req.params.userId));
    if(user){
        res.status(200).send(user);
    }else{
        res.status(404).send("The requested user was not found")
    }
})

app.listen(PORT,()=>{
    console.log("app is listening on port", PORT);
})