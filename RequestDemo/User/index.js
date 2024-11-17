const express = require('express')
const app = express();
const usersRouter = require('./users');
//loggermiddleware is an inbuilt middleware function in express, and should be called before the routes
const LoggerMiddleware = (req,res,next)=>{
    console.log(`Logged ${req.url} ${req.method} -- $${new Date()}`)
    next();
}

//call the middleware function
app.use(LoggerMiddleware);
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/api/v1/users", usersRouter);
const PORT = 4000 || process.env.PORT;


//get route with a route path that matches requests to /hello
app.get('/users/:userId',(req,res)=>{
    let user = users.find((t)=> t.userId === parseInt(req.params.userId));
    if(user){
        res.status(200).send(user);
    }else{
        res.status(404).send("The requested user was not found")
    }
})

app.post

app.listen(PORT,()=>{
    console.log("app is listening on port", PORT);
})