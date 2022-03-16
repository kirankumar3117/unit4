const express=require("express");


const Student=require("../model/student.model");

const router=express.Router();

const crudcontroller=require("./crud.controller")

router.get("",crudcontroller.get(Student));

router.get("/:id",async(req,res)=>{
    try{
        const user=await Student.findById(req.params.id).populate({path:"userId"}).lean().exec()

        return res.status(200).send(user);
       
    }catch(err){
        return res.status(500).send({message:err.message})
    }
});
router.post("",async(req,res)=>{
    try{
        const user=await Student.create(req.body);
        return res.status(200).send(user)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})

module.exports=router;