require("dotenv").config()
const express = require('express');
const app = express();

PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("this is our home page")
})


app.listen(PORT,()=>{
    console.log(`our server is running at http://localhost:${PORT}`)
})