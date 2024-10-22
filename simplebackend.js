const express = require('express')
const app = express();

const PORT = 4000 || process.env.PORT;

//app.listen is used to bind and listen to the connections on the specified host and PORT
app.listen(PORT,()=>{
    console.log("app is listening on port", PORT);
})