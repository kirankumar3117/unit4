const app=require("./index");

const connect=require("./config/mongoo");

app.listen(500,async()=>{
    try{
        await connect();
    }catch(err){
        console.log({message:err.message})
    };

    console.log("Listining on port 500")
})
