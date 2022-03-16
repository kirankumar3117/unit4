const express=require("express");

const User=require("../model/user.model");

const router=express.Router();

router.get("",async(req,res)=>{
    try{
        const users= await User.find().lean().exec();

        return res.status(200).send({user_details:users})


    }catch(err){
        return res.status(500).send({message:err.message})
    }
});

router.get("/:id",async(req,res)=>{
    try{
        const users= await User.findById(req.params.id).lean().exec()

        return res.status(200).send(users)


    }catch(err){
        return res.status(500).send({message:err.message})
    }
});

router.post("",async(req,res)=>{
    try{
        const users= await User.create(req.body);

        return res.status(201).send({user_details:users})


    }catch(err){
        return res.status(500).send({message:err.message})
    }
});
router.patch("/:id",async(req,res)=>{
    try{
        const users= await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        return res.status(200).send(users)


    }catch(err){
        return res.status(500).send({message:err.message})
    }
});
router.delete("/:id",async(req,res)=>{
    try{
        const users= await User.findByIdAndDelete(req.params.id,{new:true});
        return res.status(200).send(users)


    }catch(err){
        return res.status(500).send({message:err.message})
    }
});



module.exports=router;