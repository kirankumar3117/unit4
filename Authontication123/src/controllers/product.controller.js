const express=require("express");

const Product=require("../model/products.model")

const router=express.Router();
const authonticate=require("../middileware/authonticate")

router.post("",authonticate,async(req,res)=>{
    console.log(req.user._id);
    req.body.user_Id=req.user._id;
      try{
        const product= await Product.create(req.body);
        return res.status(200).send(product)
      }catch(err){
          return res.status(400).send({message:err.message})
      }
});

router.get("",async(req,res)=>{
    try{
        const product= await Product.find().lean().exec();
        return res.status(200).send(product)
      }catch(err){
          return res.status(400).send({message:err.message})
      }
})
router.patch("/:id",authonticate,async(req,res)=>{
    try{
        const product= await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send(product)
      }catch(err){
          return res.status(400).send({message:err.message})
      }
})
router.delete("/:id",authonticate,async(req,res)=>{
    try{
        const product= await Product.findByIdAndDelete(req.params.id);
        return res.status(200).send(product)
      }catch(err){
          return res.status(400).send({message:err.message})
      }
})

module.exports=router;