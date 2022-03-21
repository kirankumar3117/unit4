const mongoose=require("mongoose");

const commentSchema=new mongoose.Schema(
    {
        body:{type:String,required:true},
        
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"buser",
            required:true,
        },
        bookId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"bbook",
            required:true,
        }
    },
    {
        versionKey:false,
        timestamps:true,
    }
);

module.exports=mongoose.model("bcomment",commentSchema)


