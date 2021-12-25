const multer = require('multer');
const { updateProject } = require('../Service/ProjectService');
const path = require('path');

//uploading a file learn and implement
const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,'./uploads/')
    },
    filename : (req,file,cb) => {
        console.log("FIlename",file);
        cb(null,new Date().toISOString().replace(/:/g, "-") + file.originalname);
    }
});

const fileFilter = (req,file,cb) => {
    if(file.mimetype == "image/jpeg" || file.mimetype == "image/png"){
        cb(null,true);
    }else{
        cb(null,false);
    }
};

const uploadMulter = multer({
    storage : storage,
    fileFilter : fileFilter
});

module.exports = uploadMulter;