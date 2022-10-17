const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PROT = 3000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/circle',(req,res)=>{
    res.sendFile(__dirname + '/views/circle.html')
})


app.get('/triangle',(req,res)=>{
    res.sendFile(__dirname + '/views/triangle.html')
})


app.post('/circle',(req,res)=>{
    const radius = req.body.radius;
    const area = Math.PI *  radius * radius;
    res.send(`ouer area is : ${area}`)
})

app.post('/triangle',(req,res)=>{
    const base = req.body.base;
    const hight = req.body.hight;
    const area = 0.5 *  hight * base;
    res.send(`ouer area is : ${area}`)
})








app.listen(PROT,()=>{
    console.log(`our server is running http://localhost:${PROT}`)
})