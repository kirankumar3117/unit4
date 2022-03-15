
const connect =require("./configs/db");

const app=require("./index")

app.listen(1000,async()=>{
    try{
        await connect();
    }catch(err){
       console.log({message:err.message})
    };
    console.log("Listening on port 1000")
})
