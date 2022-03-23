const User=require("../model/user.model");

const express=require("express");

const router=express.Router();

router.post("/",async(req,res)=>{
    try{
        const user=await User.create(req.body);
        return res.status(201).send(user)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})