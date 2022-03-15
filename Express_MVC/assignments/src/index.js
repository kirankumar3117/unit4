const express=require("express");

// const mongoose=require("mongoose");



const usercontroler=require("./controlers/user.control")

const app=express();

app.use(express.json())

app.use("/checkuser",usercontroler);

//USER SCHEMA

module.exports=app;

