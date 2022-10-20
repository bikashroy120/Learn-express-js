const allGetUser = (req,res)=>{
    res.status(200).json({
        message:"all user"
    })
}

module.exports = {allGetUser}