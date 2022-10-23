const mongooes = require('mongoose')


const conncetDb = async()=>{
    try{
        await mongooes.connect(process.env.DATABASE_URL)
        console.log("Database connact sucsesfull")
    }catch(err){
        console.log("database connect error")
    }
}

module.exports = conncetDb;