const express=require("express");

const Comment=require("../model/comment.model")

const router=express.Router();
const authonticate=require("../middileware/authonticate")

router.post("",authonticate,async(req,res)=>{
    console.log(req.user._id);
    req.body.user_Id=req.user._id;
      try{
        const todo= await Comment.create(req.body);
        return res.status(200).send(todo)
      }catch(err){
          return res.status(400).send({message:err.message})
      }
});




module.exports=router;