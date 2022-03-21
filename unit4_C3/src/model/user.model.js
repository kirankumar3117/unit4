const mongoose=require("mongoose");



const userSchema=new mongoose.Schema(
    {
        firstName:{type:string , required:true, arguments:[3,30]},
        lastName:{type:string ,  arguments:[3,30]},
        age:{type:string , required:true, arguments:[1,150]},
        age:{type:string , required:true, unique:true},
        profileImages:[{type:string , required:true}],
       
    },
    {
        versionKey:false,
        timestamps:true,
    }
  
);


module.exports=("buser",userSchema)
