const User=require("../model/user.model")

const jwt=require("jsonwebtoken");

require('dotenv').config()

const newToken=(user)=>{
    console.log(process.env.Key)
    return jwt.sign({user},process.env.Key);
}

const register =async (req,res)=>{
    try{
       let user= await User.findOne({email:req.body.email});
       if(user){
           return res.status(400).send({message:"Email already exist"})
       }
       user= await User.create(req.body);
      const token=newToken(user)
       return res.status(200).send({user,token});
    }catch(err){
        return res.send(err.message)
    }
}
const login = async(req,res)=>{
    try{
        let user=await User.findOne({email:req.body.email});
        if(!user){
            return res.status(400).send("wrong emial or password!")
        };
        const match=user.checkPassword(req.body.password);
        if(!match){
            return res.status(400).send("wrong email or passwors!")
        };
        const token=newToken(user)
        return res.status(200).send({user,token})
    }catch(err){
        return res.send(err.message)
    }
}
module.exports={register,login};