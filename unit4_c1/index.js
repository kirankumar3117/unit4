const express=require("express");

const app=express();

app.use(logger);

app.get("/books",(req,res)=>{
    return res.send({route:"/books"})
})

app.use(checkPermission);

app.get("/libraries",(req,res)=>{
    return res.send({ route: "/libraries", permission: true})
})

app.get("/authors",(req,res)=>{
    return res.send({ route: "/authors", permission: true})
})

  function checkPermission(req,res,next){
    console.log("Before bigining the checkPermission");
   if(req.path === "/libraries"){
    return next();

   }
   else if(req.path==="/authors"){
       return next();
   }
   else{
       return res.send("Permission Not Allowed")
   }
   
  

}




function logger(req,res,next){
    console.log("Before Logger Function");
    next();
    console.log("End Of The logger Function")
}
app.listen(5003,()=>{
    console.log("Iam Listening Port 5003")
})
