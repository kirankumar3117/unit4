const User=require("../model/user.model");

const express=require("express");

const router=express.Router();

router.get("",async(req,res)=>{
    try{
        const user=await User.find().lean().exec();
        res.status(200).send({User_Details:user})
    }catch(err){
        return res.status(400).send({Message:err.message})
    }
});