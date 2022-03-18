const app=require("./index");

const connect=require("./configue/db");

app.listen(2000,async()=>{
    try{
        await connect();
       
        console.log("Listening on port 2000")
    }catch(err){
        console.error(err.message)
    };
    var b="Listening on port 2000";
  
})