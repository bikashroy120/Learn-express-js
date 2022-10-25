const User = require('../../models/usersModel')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const signup = async(req,res,next)=>{
    req.body.password = await bcrypt.hash(req.body.password,11)
    const {name,username,email,password,profile}  = req.body;

    try {
       const user = await User.create({
        name,
        username,
        email,
        password,
        profile
       })

       res.status(201).json({
        message:`hellow ${name}! your acount is creaceted `,
        user,
       })
    } catch (error) {
        res.status(401).json({
            message:"somthing is worng!"
        })
    }

}




// login controlor

const loginControler = async (req,res,next)=>{
    const {username,password} = req.body;

    try {

        const user = await User.findOne({username})

        if(!user){
            res.status(401).json({
                message:"there are not acount ,, please creact a acount first!!!!!"
            })
        }

        const vilidet = await bcrypt.compare(password,User.password)

        if(!vilidet){
            res.status(400).json({
                message:"password did not match!"
            })
        }

        const token = jwt.sign({username,_id:user._id},process.env.PRIVAT_KEY,{expiresIn:"2h"});

        res.status(200).json({
            message:"login successfully",
            token,
        })




    } catch (error) {
        res.status(404).json({
            message:"Not found !"
        })   
    }
}


module.exports = {signup,loginControler}