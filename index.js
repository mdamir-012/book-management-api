const express= require("express");


const app=express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("welcome to book management api")
})


const port= 8000;

app.listen(port, async()=>{

    try{
        console.log(`running on port ${port}`);
    }
    catch(err){
        console.log(err)
    }

})