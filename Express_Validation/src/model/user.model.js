//const { default: mongoose } = require("mongoose");
const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
    {
        first_name:{type:String,required:true},
        last_name:{type:String,required:false},
        emial:{type:String,required:true},
        age:{type:Number,required:true},
        pincode:{type:Number,required:true},
        gender:{type:String,required:true},
    },
    {
        versionKey:false,
        timestamps:true
    }
);

module.exports=mongoose.model("user",userSchema)