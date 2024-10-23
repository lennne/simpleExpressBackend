const express = require('express')
const app = express();

const PORT = 4000 || process.env.PORT;

/* 
first we create a get route which is indicated after 'app.'in the following syntax. Next inside the get route,
'/' is the app root and in this case it is the base route of the application, the next argument is the handler function
 which is a callback function that performs some operation when the base route is reached.
here res and req are objects passed into the handler function and contain information about the request and the response
*/
app.get('/',(req,res)=>{
    res.send("Hello world");
})

//app.listen is used to bind and listen to the connections on the specified host and PORT
/*
the function takes the form
app.listen([port[, host[, backlog]]],[,callback])
*/
app.listen(PORT,()=>{
    console.log("app is listening on port", PORT);
})