const express = require('express');
const app = express();
const config = require('./config');
const userRouter = require('./RequestDemo/User/userRouter');

const LoggerMiddleWare = (req, res, next)=>{

    console.log(`Logged ${req.url} ${req.method} ${(new Date).toLocaleString()}`);
    next();
}

app.use(LoggerMiddleWare);

app.use(express.json());

app.use('/api/v1/users',userRouter);

app.use((req,res,next)=>{
    res.status(400).send("Resource not found");
});

app.listen(config.PORT,()=>{
    console.log("Listening on PORT ", config.PORT);
});