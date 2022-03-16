const express=require("express");

const app=express();

app.use(express.json());





const usercontroller=require("./controllers/user.controllers");
const studentcontroller=require("./controllers/student.controllers")

app.use("/user",usercontroller)
app.use("/student",studentcontroller)


module.exports=app;



