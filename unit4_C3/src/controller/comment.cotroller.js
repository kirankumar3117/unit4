const Comment=require("../model/comment.model");

const express=require("express");

const router=express.Router();

router.get("",async(req,res)=>{
    try{
        const user=await Comment.find().lean().exec();
        res.status(200).send({Comment_Details:user})
    }catch(err){
        return res.status(400).send({Message:err.message})
    }
});

router.post("/comment", async (req, res) => {
    try {
      const comment = await Comment.create(req.body);
  
      return res.status(201).send(comment);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  