const express=require("express");

const usercontroler=require("./controlers/user.control")

const app=express();

app.use(express.json())

app.use("/checkuser",usercontroler);



module.exports=app;

