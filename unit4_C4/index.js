const express=require("express");

const {register,login}=require("./src/controller/authontication");

const userController=require("./src/controller/user.controller");

const todoController=require("./src/controller/todo.controller");

const commentController=require("./src/controller/comment.controller")

const app=express();

app.use(express.json());

app.post("/register",register);

app.post("/login",login);

app.get("/todo",todoController);

app.post("/todo",todoController);

app.post("/comment",commentController)


module.exports=app;