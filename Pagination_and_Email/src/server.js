// const express=require("express");

const connect=require("./config/db")
const app=require("./index")

app.listen(5000,async()=>{
    try{
        await connect();
    }catch(err){
        console.log({message:err.message})
    };
    console.log("listening on port 5000");
})