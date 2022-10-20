const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./routes/user.routs')

app.use(cors());
app.use(express.urlencoded({extended : true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/./views/index.html')
})

app.use('/api/user',userRouter)

app.use((req,res,next)=>{
    res.status(404).json({
        message:"route not found"
    })
})

app.use((err,req,res,next)=>{
    res.status(500).json({
        message:"Server not found"
    })
})


module.exports = app