const User=require("../model/user.model");

const express=require("express");

const router=express.Router();


const {single,multiple}=require("../middileware/upload")

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
router.patch("/:id/multiple",multiple("profilePic"),async(req,res)=>{
    try{
      const filePath=req.files.map((file)=>{
          return file.path;
      })
        const user=await User.findByIdAndUpdate(req.params.id,
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
router.delete(":id/remove/multiple",multiple("profilePic"),async(req,res)=>{
    try{
      const filePath=req.files.map((file)=>{
          return file.path;
      })
        const user=await User.findByIdAndRemove(req.params.id,
            {
              
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
router.patch("/:id",single("profilePic"),async(req,res)=>{
    try{
       const user=await User.findByIdAndUpdate(req.params.id,
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
router.delete("/:id/remove",single("profilePic"),async(req,res)=>{
    try{
       const user=await User.findByIdAndRemove(req.params.id,
           {
               
               profilePic:req.file.path
           }
       )
        return res.status(200).send(user)
    }catch(err){
        return err.message;
    }
});
router.delete("/:id",async(req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id);
        return res.send(user)
    }catch(err){
        return err.message;
    }
});

module.exports=router;