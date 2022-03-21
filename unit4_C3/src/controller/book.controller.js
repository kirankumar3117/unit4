const express=require("express");

const Book=require("../model/book.model")

const {single}=require("../middleware/book")

const router=express.Router();
const authonticate=require("../middleware/middleware")

router.post("",authonticate,async(req,res)=>{
    console.log(req.user._id);
    req.body.user_Id=req.user._id;
      try{
        const book= await Book.create(req.body);
        return res.status(200).send(book)
      }catch(err){
          return res.status(400).send({message:err.message})
      }
});

router.get("",async(req,res)=>{
    try{
        const book= await Book.find().lean().exec();
        return res.status(200).send(book)
      }catch(err){
          return res.status(400).send({message:err.message})
      }
})



router.post("",single("coverImages"),async(req,res)=>{
    try{
       const user=await User.create(
           {
               firstname:req.body.firstname,
               content:req.body.content,
               coverImages:req.file.path
           }
       )
        return res.status(200).send(user)
    }catch(err){
        return err.message;
    }
});




module.exports=router;