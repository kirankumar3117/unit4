
const connect=require("./configuration/mongo");

const app=require("./index")

app.listen(2000,async()=>{
    try{
        await connect();
    }catch(err){
        console.log({message:err.message})
    }
    console.log("listening on port 2000")
})