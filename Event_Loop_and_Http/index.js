const express=require("express");

const book_details=require("./books.js")

const app=express();

var m=[book_details.books_details1(),book_details.books_details2(),book_details.books_details3(),book_details.books_details4()]

app.get("/home", function(req, res){
    console.log("hello users")
   res.send({hello:"This Is Your Home"})
});

app.get("/books",function(req,res){
    res.send(m);
    
})   


app.listen(7777, () =>{
    console.log(" Listening on port 7777")
});