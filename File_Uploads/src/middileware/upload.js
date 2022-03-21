const multer=require("multer");
const req = require("express/lib/request");

const path=require("path")

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, path.join(__dirname ,"../uploads-my"))
    },
    filename: function (req, file, callback) {
      const uniquePrefix = Date.now() 
      callback(null, uniquePrefix+"_"+ file.originalname );
    }
  });
  
const fileFilter = (req, file ,callback) => {

  if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
    callback(null,true);
  }
else{
  callback(null,false);
};

}

const details=
    {
      fileFilter,
        storage,
       
        limits:{
            fileSize:1024 * 1024 * 5,
        },
    }


const uploads=multer(details);

const single=(key)=>{
  return function (req,res,next){
    const uploaditems=uploads.single(key);

    return uploaditems(req,res,function(err){
      if(err instanceof multer.MulterError){
        return res.status(500).send({message:err.message});

      }else if(err){
        return res.status(501).send({message:err.message})
      };
      return next();
    })
  }
}
const multiple=(key)=>{
  return function (req,res,next){
    const uploaditems=uploads.any(key);

    return uploaditems(req,res,function(err){
      if(err instanceof multer.MulterError){
        return res.status(500).send({message:err.message});

      }else if(err){
        return res.status(501).send({message:err.message})
      };
      return next();
    })
  }
}

module.exports=({single,multiple});
