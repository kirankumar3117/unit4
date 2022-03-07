const express=require("express");

const app=express();

app.use(logger);

app.get("/books",(req,res)=>{
    return res.send({route:"/books"})
})

app.use(checkpermission);

app.get("/libraries",checkPermission("librarian"), (req,res)=>{
    return res.send({ route: "/libraries", permission: true})
})

app.get("/authors",checkPermission("author"),(req,res)=>{
    return res.send({ route: "/authors", permission: true})
})

function checkPermission(role){
 return function checkpermission(req,res,next){
    console.log("Before bigining the checkPermission");
   if(role === "librarian"){
       req.role = "true"
    return next();

   }
  
   else if(role === "author"){
      
       req.role="true";
       return next();
   }
   else {
       return res.send("Permission Not Allowed")
   }
}
}

function checkpermission(req,res,next){
    if( req.path === "/librarian"){
        return res.send({ route: "/libraries", permission: true})
    }
    else if(req.path == "/author"){
        return res.send({ route: "/authors", permission: true})
    }
    else{
        next()
        return res.send("Permission Not Allowed")
    }
  
}




function logger(req,res,next){
    console.log("Before Logger Function");
    next();
    console.log("End Of The logger Function")
}
app.listen(8000,()=>{
    console.log("Iam Listening Port 8000")
})
