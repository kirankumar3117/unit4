const app=require("./index");

const connect=require("./src/configue/db")


app.listen(3500,async()=>{
    try{
        await connect();
    }catch(err){
        console.log({message:err.message})
    }
    console.log("Listening on port 3500")
})