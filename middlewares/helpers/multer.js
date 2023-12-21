const path = require("path");
const multer = require("multer");

//User's
const storageByUser = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, file.feldname)
    }
})
