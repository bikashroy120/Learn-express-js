const User = require('../../models/usersModel')

const signup = async(req,res,next)=>{
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


module.exports = {signup}