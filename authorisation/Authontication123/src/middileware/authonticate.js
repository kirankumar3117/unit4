require("dotenv").config();
const jwt=require("jsonwebtoken")
const verifyToken=(token)=>{
    return new Promise((resolve,reject)=>{
        let decoded = jwt.verify(token,process.env.Key,(err,decoded)=>{
            if(err) return reject(err)
            return resolve(decoded);
        });
    });
}
    


const authonticate=async (req,res,next)=>{
    if(!req.headers.authorization)
    return res.status(400).send({message:"Athorization tocken not found or incorrect"});

    if(!req.headers.authorization.startsWith("Bearer "))
    return res.status(400).send({message:"Athorization tocken not found or incorrect"});

    const token =req.headers.authorization.split(" ")[1];

    let decoded;
    try{
       decoded= await verifyToken(token)
    }catch(err){
        return res.status(400).send({message:err.message})
    }
    console.log(decoded.user);

    req.user= decoded.user;
    return next();

}
module.exports=authonticate;