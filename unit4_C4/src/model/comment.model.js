const mongoose=require("mongoose");

const commentSchema=new mongoose.Schema(
    {
       
        body:{type:String,required:true},
        postId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "todomodel",
            required: true,
        },
    

    },{
        versionKey:false,
        timestamps:true,
    }
)

module.exports=mongoose.model("commentmodel",commentSchema);