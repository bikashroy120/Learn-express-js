const express = require('express')
const dotEnv = require("dotenv")
dotEnv.config()
const conncetDb = require('./config/connectDB')
const userRoutes = require('./config/routes/signupRoutes')
const app = express()

app.use(express.json())

PORT = process.env.PORT || 4000


app.use("/api/user", userRoutes)


app.listen(PORT,()=>{
    console.log(`our server is running at http://localhost:${PORT}`)
    conncetDb()
})



//gGh48nDdUCBdR5tQ
