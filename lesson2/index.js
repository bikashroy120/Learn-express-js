const express = require("express")
const app = express();
const bodyParser = require('body-parser')
const PROT = 3001;

const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json()

// app.get('/',(req,res)=>{
//     const id = req.query.id;
//     res.send(`The student id is : ${id}`)
// })

// app.post("/api/user",jsonParser,(req,res)=>{
//     const name = req.body.name;
//     res.send(`Welcomr : ${name}`)
// } )

app.get('/',urlencodedParser,(req,res)=>{
    res.send("this is our home page")
})


app.get('/regester',urlencodedParser,(req,res)=>{
    res.sendFile(__dirname + '/views/regester.html')
})

app.post('/regester',urlencodedParser,(req,res)=>{
    const fName = req.body.fName;
    const age = req.body.age;
    res.send(`your name is ${fName} and age is ${age}`)
})

app.listen(PROT,()=>{
    console.log(`our server is running http://localhost:${PROT}`)
})