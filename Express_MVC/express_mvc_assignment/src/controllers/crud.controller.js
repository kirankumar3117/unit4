
const get=(model)=>async(req,res)=>{

    try{
        const item=await model.find().lean().exec();
        return res.status(200).send(item);
    }catch(err){
        return res.status(500).send({message:err.message})
    };
    
}
module.exports={
   
    get,
 
};