

const User=require("../model/user.model");

const express=require("express");

const router=express.Router();

router.get("",async(req,res)=>{
    try{
        const user=await User.find().lean().exec();
        return res.send(user)
    }catch(err){
        return err.message;
    }
});

module.exports=router;