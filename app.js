const express = require('express');
const app = express();
const authRouter = require('./RequestDemo/Authentication');
const config = require('./config');
const userRouter = require('./RequestDemo/User/userRouter');
const dateFormat = require('date-format');
const morgan = require('morgan');

app.use(express.json());

morgan.token('time',()=> dateFormat.asString(dateFormat.ISO8601_FORMAT, new Date()));

app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));

app.use('/auth', authRouter);
app.use('/api/v1/users', userRouter);

// app.use('/api/v1/users',userRouter);

app.use((req,res,next)=>{
    res.status(400).send("Resource not found");
});

app.listen(config.PORT,()=>{
    console.log("Listening on PORT ", config.PORT);
})