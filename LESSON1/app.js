const express = require("express");
const app = express();
const userRouter = require("./routes/user.routs")

app.get("/",(req,res)=>{
    // res.send("this is our home page")
    res.statusCode = 200;
    res.sendFile(__dirname + '/routes/views/index.html')
})


app.use("/api/user", userRouter)

app.use('/regester',(req,res)=>{
    // res.status(200).json({
    //     message:"i am regester page",
    //     statesCode:200,
    // })

    // res.redirect('/login')
    res.statusCode = 200;
    res.sendFile(__dirname + '/routes/views/regester.html')
})

app.use("/login",(req,res)=>{
    res.send("this is login page")
})


app.use((req,res)=>{
    res.send("404! page not found : error page")
})


module.exports = app;