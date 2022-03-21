const mongoose = require("mongoose");



const userSchema = new mongoose.Schema(
    {
        likes: { type: String, required: true, 
        default : Math.floor(Math.random()*900) + 1000},
        content: { type: String, required:true },
        coverImages: { type: String, required: true },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"buser",
            required:true,
        }

    },
    {
        versionKey: false,
        timestamps: true,
    }

);


module.exports = ("bmodel", userSchema)
