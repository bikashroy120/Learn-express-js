const app = require("./app");

const PROT = 3000;




app.listen(PROT,()=>{
    console.log(`our server is running at http://localhost:${PROT}`)
})