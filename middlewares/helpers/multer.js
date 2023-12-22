const path = require("path");
const multer = require("multer");

//User's
const storageByUser = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + req.user._id + '-' + Date.now() + path.extname(file.originalname));   
    }
})


//admin's 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },  
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + req.profile._id + '-' + Date.now() + path.extname(file.origin))
    }
 })