const multer=require('multer')
const path=require('path')
const storeFile= multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,'C:/Users/Prince Raj/Dropbox/My PC (LAPTOP-JKIOUD9K)/Documents/Room Booking System/Room Booking System/Frontend/public')
    },
    filename:(req,file,cb)=>{
        const pre=Math.floor(Date.now()/1000);
        cb(null,pre+file.originalname)
    }
})

const upload=multer({
    storage:storeFile
    // fileFilter:(req,file,cb)=>{
    //     console.log(path.extname(file.originalname))
    //     if(path.extname(file.originalname)==='.jpg')cb(null,true)
    //     else cb(null,false)
    // } 
})
module.exports= upload