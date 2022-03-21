const mongoose=require("mongoose");

const publicationSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
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

module.exports=mongoose.model("bpublication",publicationSchema);

5