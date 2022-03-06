const express = require("express");

const app = express();
const books=require("./books")


app.use(logger); // logger() logger

//use this data only to send the request
//  localhost:7000/books/GameOfThrones
//  localhost:7000/books/Lucifer
//  localhost:7000/books/HarryPotter



app.get("/books/:name",(req,res) =>{
   var m=req.params['name']
   books.forEach(ele=>{
    if(ele[m] != undefined){
        console.log(ele[m])
       return res.send(ele[m])
    }
    else{
        return res.send("Sorry! The Book Is Not Available In The Store")
    }
})

})

function logger(req,res,next){
    if(req.path =="/books"){
       console.log("Fetching all books");
       return;
    }
   else if(req.path=="/books/:name"){
    console.log("Fetching all books");
   }
    
    next();
}


app.listen(7000, () => {
  console.log("listening on port 7000");
});
// books.forEach(ele =>{
//    if(ele.HarryPotter !=undefined){
//        console.log(ele.HarryPotter)
//    }
// })