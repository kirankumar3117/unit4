const app=require("./index");

const connect=require("./config/mongoo")

app.listen(6000,async()=>{

    try{
        await connect();

    }catch(err){

         console.log({Message:err.message});

    }
    const use=await "Listening on Port 6000";

    console.log(use)
});