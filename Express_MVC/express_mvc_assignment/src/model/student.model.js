const mongoose=require("mongoose");

const User=require("./user.model")

const studentSchema=new mongoose.Schema(
    {
        rollid:{type:String,required:true,unique:true},
        currentBatch:{type:String,required:true},
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:false,
        }
    },{
        versionKey:false,
        timestamps:true,
    }
)

const Student=mongoose.model("student",studentSchema);

module.exports=Student;