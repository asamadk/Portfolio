const Experience = require('../Models/Experience');
const mongoose = require('mongoose');

const addExperience = async (req,res,next) => {
    const experience = new Experience({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        company: req.body.company,
        city: req.body.city,
        startDate: new Date(req.body.startDate),
        endDate: req.body.endDate ? new Date(req.body.endDate) : null,
        description: req.body.description,
        technologies: req.body.technologies,
    })
    try{
        console.log("YES",experience);
        await experience.save();
        res.status(200).json(experience);
    }catch(err){
        res.status(500).json({
            Error : err
        })
    }
}

const getOneExperience = async (req,res,next) => {
    const id = req.params.experienceId;
    try{
        const experience = await Experience.findById(id);
        res.status(200).json(experience)
    }catch(err){
        res.status(500).json({
            Error : err
        });
    }
}

const getAllExperiences = async (req,res,next) => {
    try{
        const experience = await Experience.find();
        res.status(200).json(experience);
    }catch(err){
        res.status(500).json({
            Error : err
        })
    }
}

const deleteExperience = async (req,res,next) => {
    const id = req.params.experienceId;
    try{
        await Experience.deleteOne({_id : id});
        res.status(200).json({
            Message : "Experience deleted succesfully"
        })
    }catch(err){
        res.status(500).json({
            Error : err
        })
    }
}

const updateExperience = async (req,res,next) => {
    const id = req.params.experienceId;
    Experience.findByIdAndUpdate(id,
    {
        title: req.body.title,
        company: req.body.company,
        city: req.body.city,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        description: req.body.description,
        technologies: req.body.technologies,
    },
        function(err,experience){
            if(err){
                res.status(500).json({
                    Error : err
                })
            }else{
                res.status(200).json({
                    Message : "Experience updated succesfully",
                    Experience : experience
                })
            }
        }
    )
}

module.exports = {
    addExperience,
    getOneExperience,
    getAllExperiences,
    deleteExperience,
    updateExperience
}