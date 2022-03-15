const mongoose=require("mongoose");

const userSchema = new mongoose.Schema(
    {
      Name: { type: String, required: true },
      email: { type: String, required: true,unique:true },
    //   authorName: { type: String, required: true},
    //   CheckIn: { type: String, required: false},
    //   CheckOut: { type: String, required: false},
    },
    {
      versionKey: false,
      timestamps: true, 
    }
  );
  
  
  const Library = mongoose.model("checkuser", userSchema); 
  module.exports= Library;