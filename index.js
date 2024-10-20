const express= require("express");
const { bookRouter } = require("./controllers/book.route");
const { connection } = require("./config/db");


const app=express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("welcome to book management api")
})


app.use("/books",bookRouter)

const port= 8000;

app.listen(port, async()=>{

    try{
        await connection;
        console.log(`running on port ${port}`);
    }
    catch(err){
        console.log(err)
    }

})