const express=require("express");

const usercontrollers=require("./controllers/user.controller")

const {register,login} = require("./controllers/autho.controller")

const productcontroller=require("./controllers/product.controller")

const app=express();

app.use(express.json());

app.get("/userdetail",usercontrollers);

app.post("/register",register);

app.post("/login",login);

app.get("/products",productcontroller);

module.exports=app;