const express=require("express");

const User=require("../models/user.models")

const router=express.Router();

const crudcontroler=require("./crud.controler");


router.get("",crudcontroler.get(User))
// router.get("",async(req,res)=>{
//     try{
//         const User=await User.find().lean().exec();
//         return res.status(200).send({User_Details:User});
//     }catch(err){
//         return res.status(500).send({message:err.message})
//     }
// });

router.get("/:id",async(req,res)=>{
    try {
        const user = await User.findById(req.params.id).lean().exec();
    
        return res.status(201).send(user);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
})
router.post("", async (req, res) => {
    try {
      const user = await User.create(req.body);
  
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

router.patch("/:id" ,async ( req , res ) =>{

    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body, {new:true}).lean().exec();
    
        return res.status(201).send(user);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
    });

    module.exports=router;