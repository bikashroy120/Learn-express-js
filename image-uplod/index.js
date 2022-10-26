const express = require("express")
const app = express()
const multer = require("multer")
const mongoose = require('mongoose')
PORT = 5000


app.use(express.urlencoded({extended:true}))
app.use(express.json())


// connoct db

const connrectDB = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/testUser")
        console.log("db is connect")
    } catch (error) {
        console.log("db is not connect")
        console.log(error)
        process.exit(1)
    }
}


// db sceama 

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"user name is required"]
    },
    image:{
        type:String,
        required:[true,"user image is required"]
    }
})


const User = mongoose.model("user",userSchema)



// uplode File
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uplode/')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + '-' + file.originalname;
      cb(null, name)
    }
  })
  
  const upload = multer({ storage: storage })

app.get("/test",(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})


app.post("/test",upload.single('image'),async(req,res)=>{
    try {
        const newUser = new User({
            name:req.body.name,
            image:req.file.filename
        })

        await newUser.save()
        res.status(201).send(newUser)
    } catch (error) {
        res.status(401).send(error.message)
    }
})



app.listen(PORT, async()=>{
    console.log(`our server is running at http://localhost:${PORT}`)
    await connrectDB()
})