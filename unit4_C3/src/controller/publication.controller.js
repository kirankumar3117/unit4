const Publication=require("../model/publication.model");

const express=require("express");

const router=express.Router();

router.get("",async(req,res)=>{
    try{
        const Publication=await Publication.find().lean().exec();
        res.status(200).send({Publication_Details:Publication})
    }catch(err){
        return res.status(400).send({Message:err.message})
    }
});