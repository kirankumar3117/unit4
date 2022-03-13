const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
  return mongoose.connect(
    "mongodb://127.0.0.1:27017/book"
  );
};


const librarySchema = new mongoose.Schema(
  {
    Section: { type: String, required: true },
    bookName: { type: String, required: true,unique:true },
    authorName: { type: String, required: true},
    CheckIn: { type: String, required: false},
    CheckOut: { type: String, required: false},
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);


const Library = mongoose.model("library", librarySchema); 


const userSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    email: { type: String, required: true,unique:true },
    libraryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "library",
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);


const User = mongoose.model("user", userSchema); 

const booktakenOutSchema=new mongoose.Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true,
  },
  libraryId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"library",
    required:true,
    unique:true,
  },
},
{
  versionKey:false,
  timestamps:true,
}
);

const CheckOut=mongoose.model("out",booktakenOutSchema)

const commentSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


const Comment = mongoose.model("comment", commentSchema); // comment => comments

app.get("/library", async (req, res) => {
  try {
    const library = await Library.find().lean().exec();

    return res.status(200).send({ boks: library}); // []
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Something went wrong .. try again later" });
  }
});

app.post("/library", async (req, res) => {
  try {
    const library = await Library.create(req.body);

    return res.status(201).send(library);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


app.get("/library/:id", async (req, res) => {
  try {
    const user = await Library.findById(req.params.id).lean().exec();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.patch("/libaray/:id", async (req, res) => {
  try {
    const user = await Library.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.delete("/library/:id", async (req, res) => {
  try {
    const user = await Library.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


app.get("/user", async(req,res) => {
  try{
    const user=await User.find().lean().exec();
    return res.status(200).send({users:user})
  }
  catch(err){

    return res.status(500).send({message:err.message})
  }
});
app.get("/user/:id", async (req,res)=>{
  try{
    const users= await User.findById(req.params.id).lean().exec();
    return res.status(200).send(users);
  }catch(err){
    return res.status(500).send(err.message)
  }
});

app.post("/user", async (req, res) => {
  try{
    const user=await User.create(req.body);
    return res.status(201).send(user)
  }catch(err){
    return res.status(500).send({message:err.message})
  }
});
app.patch("/user/:id", async ( req , res ) => {
  try{
    const user= User.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
    }).lean().exec();
    return res.status(200).send(user)
  }catch(err){
    return res.status(500).send({message:err.message})
  }
});
app.delete("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id,{
      new :true,
    }).lean().exec();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.get("/out", async (req,res) => {
  try{
    const use= await CheckOut.find().lean().exec();
    return res.status(200).send({CheckOut_List:use})
  }catch(err){
    return res.status(500).send({message:err.message})
  }
});
app.post("/out",async (req,res) => {
  try{
  const use = await CheckOut.create(req.body);
  return res.status(201).send(use);
  }catch(err){
    return res.status(500).send({message:err.message})
  }
});
app.delete("/out/:id", async (req,res)=>{
  try{
    const use = await CheckOut.findByIdAndDelete(req.params.id,req.body).lean().exec();
    return res.status(200).send(use)
  }catch(err){
    return res.status(500).send({message:err.message})
  }
  
});

app.listen(7000, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }

  console.log("listening on port 7000");
});
