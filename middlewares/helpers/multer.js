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
        cb(null, file.fieldname + '-' + req.profile._id + '-' + Date.now() + path.extname(file.originalname))
    }
 })
  
 //Superadmin's..
 const storageBySuperAdmin = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.filename + '-' + req.admin.role + req.admin._id + '-' + Date.now() + path.extname(file.originalname));
    }
 })

const fileFilter = (res, file, callback) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.JPG' && ext !== '.jpeg') {
        return callback(new Error('Not Image'))
    }
    callback(null, true)
 }
const limits = { fileSize: 2480 * 3230 }


exports.uploadAdminDoc = multer({ storage, fileFilter, limits }).fields([ 
    { name: "citizenshipFront", maxCount: 1 }, 
    { name: "citizenshipBack", maxCount: 1 },
    { name: "businessLicense", maxCount: 1 }
]);


exports.uploadAdminDoc = multer({ storage, fileFilter, limits }).single("doc");
