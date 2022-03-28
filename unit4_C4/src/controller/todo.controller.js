const express=require("express");

const Todo=require("../model/todo.model")

const router=express.Router();
const authonticate=require("../middileware/authonticate")

router.post("",authonticate,async(req,res)=>{
    console.log(req.user._id);
    req.body.user_Id=req.user._id;
      try{
        const todo= await Todo.create(req.body);
        return res.status(200).send(todo)
      }catch(err){
          return res.status(401).send({message:err.message})
      }
});

router.get("",async(req,res)=>{
    try{
        const todo= await Todo.find().lean().exec();
        return res.status(200).send(todo)
      }catch(err){
          return res.status(401).send({message:err.message})
      }
})
router.patch("/:id",authonticate,async(req,res)=>{
    try{
        const todo= await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send(todo)
      }catch(err){
          return res.status(401).send({message:err.message})
      }
})
router.delete("/:id",authonticate,async(req,res)=>{
    try{
        const todo= await Todo.findByIdAndDelete(req.params.id);
        return res.status(200).send(todo)
      }catch(err){
          return res.status(401).send({message:err.message})
      }
})

module.exports=router;