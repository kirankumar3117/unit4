const express=require("express");

const usercontrollers=require("./controllers/user.controller")

const app=express();

app.use(express.json());

app.use("/user",usercontrollers)

module.exports=app;