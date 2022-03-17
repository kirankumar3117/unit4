const mongoose=require("mongoose");

const productSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        price:{type:String,required:true},
        user_Id:{type:mongoose.Schema.Types.ObjectId,ref:"userdetail",required:true}
    },
    {
        versionKey:false,
        timestamps:true,
    }
);

module.exports=mongoose.model("product",productSchema)