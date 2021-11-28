const Education = require('../Models/Educations');
const mongoose  = require('mongoose');

const addEducation = async (req,res,next) => {
    const education = new Education({
        _id : new mongoose.Types.ObjectId,
        title : req.body.title,
        school : req.body.school,
        city : req.body.city,
        startDate : new Date(req.body.startDate),
        endDate : new Date(req.body.endDate)
    });
    try{
        await education.save();
        res.status(201).json(education);
    }catch(err){
        res.status(500).json({
            Error : err
        })
    }
}

const getOneEducation = async (req,res,next) => {
    const id = req.params.educationId;
    try{
        const education = await Education.findById(id);
        res.status(200).json(education);
    }catch(err){
        res.status(500).json({
            Error : err
        })
    }
}

const  getAllEducation = async (req,res,next) => {
    try{
        const education = await Education.find({});
        res.status(200).json(education);
    }catch(err){
        res.status(500).json({
            Error : err
        })
    }
}

const deleteEducation = async (req,res,next) => {
    const id = req.params.educationId;
    try{
        await Education.deleteOne({
            _id : id 
        });
        res.status(200).json({
            Message : "Education deleted succesfully"
        })
    }catch(err){
        res.status(500).json({
            Error : err
        })
    }
}

const updateEducation = async(req,res,next) => {
    const id = req.params.educationId;
    // mongoose.set("useFindAndModify",false);
    Education.findByIdAndUpdate(
        id,
        {
            title: req.body.title,
            school: req.body.school,
            city: req.body.city,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
        },
        function(err,education){
            if(err){
                res.status(500).json({
                    Error : err
                })
            }else{
                res.status(200).json({
                    Message : "Education updated succesfully",
                    education : education
                });
            }
        }
    );
}

module.exports = {
    addEducation,
    getOneEducation,
    getAllEducation,
    deleteEducation,
    updateEducation
}