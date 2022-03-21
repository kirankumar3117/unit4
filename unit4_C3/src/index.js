const express=require("express");

const userController=require("./controller/user.controller")
const commentController=require("./controller/comment.cotroller")
const publicationController=require("./controller/publication.controller")
const bookController=require("./controller/book.controller")
const app=express();

app.use(express.json());


app.use("/buser", userController);
app.use("/bbook", bookController);
app.use("/bcomment", commentController);
app.use("/bpublication", publicationController);

module.exports=app;