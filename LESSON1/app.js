const express = require("express");
const app = express();
const userRouter = require("./routes/user.routs")

app.get("/",(req,res)=>{
    res.send("this is our home page")
})


app.use("/api/user", userRouter)


app.use((req,res)=>{
    res.send("404! page not found : error page")
})


module.exports = app;