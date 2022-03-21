const mongoose=require("mongoose");



const userSchema=new mongoose.Schema(
    {
        firstName:{type:String , required:true, arguments:[3,30]},
        lastName:{type:String ,  arguments:[3,30]},
        age:{type:String , required:true, arguments:[1,150]},
        profileImages:[{type:String , required:true}],
       
    },
    {
        versionKey:false,
        timestamps:true,
    }
  
);


module.exports=("buser",userSchema)
