const User=require("../model/user.model");

const express=require("express");

const router=express.Router();


const {single,multiple}=require("../middleware/uploads")

router.get("",async(req,res)=>{
    try{
        const user=await User.find().lean().exec();
        return res.send({user_Details:user})
    }catch(err){
        return err.message;
    }
});
router.post("/multiple",multiple("profilePic"),async(req,res)=>{
    try{
      const filePath=req.files.map((file)=>{
          return file.path;
      })
        const user=await User.create(
            {
                firstname:req.body.firstname,
                profilePic:filePath,
            }
        );
        return res.status(200).send(user)
    }catch(err){
        return err.message;
    }
});

router.post("",single("profilePic"),async(req,res)=>{
    try{
       const user=await User.create(
           {
               firstname:req.body.firstname,
               profilePic:req.file.path
           }
       )
        return res.status(200).send(user)
    }catch(err){
        return err.message;
    }
});

module.exports=router;