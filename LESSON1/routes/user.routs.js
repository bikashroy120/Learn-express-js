const express = require("express");
const router = express.Router();


router.get("/login",(req,res)=>{
    res.send("This is our login page")
})

router.get("/regester",(req,res)=>{
    res.send("This is our regester page")
})


module.exports = router;
