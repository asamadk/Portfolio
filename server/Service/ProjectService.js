const Project  = require('../Models/Projects');
const mongoose = require('mongoose');

const addProject = async (req,res,next) => {
    const project = new Project({
        _id : new mongoose.Types.ObjectId,
        title: req.body.title,
        description: req.body.description,
        technologies: req.body.technologies,
        haveLink: req.body.haveLink,
        link: req.body.link,
        projectImage: req.file.path,
    });

    try{
        await project.save();
        res.status(200).json(project);
    }catch(err){
        res.status(500).json({
            Error : err
        })
    }
}

const getOneProject = async (req,res,next) => {
    const id = req.params.projectId;
    try{
        const project = await Project.findById(id);
        res.status(200).json(project);
    }catch(err){
        res.status(500).json({
            Error : err
        })
    }
}

const getAllProjects = async (req,res,next) => {
    try{
        const projects = await Project.find({});
        res.status(200).json(projects)
    }catch(err){
        res.status(500).json({
            Error : err
        })
    }
}

const deleteProject = async (req,res,next) => {
    const id = req.params.projectId;
    try{
        await Project.deleteOne({_id : id});
        res.status(200).json({
            Message : "Project deleted sucessfully"
        });
    }catch(err){
        res.status(500).json({
            Error : err
        })
    }
}

const updateProject = async (req,res,next) => {
    const id = req.params.projectId;
    let projectSearch ;
    try{
        projectSearch = await Project.findById(id);
    }catch(err){
        res.status(500).json({
            Error : err
        });
    }
    let filePath ;
    if(req.file == undefined){
        filePath = projectSearch.projectImage;
    }else{
        filePath = req.file.path;
    }

    Project.findByIdAndUpdate(id, {
        title: req.body.title,
        description: req.body.description,
        technologies: req.body.technologies,
        haveLink: req.body.haveLink,
        link: req.body.link,
        projectImage: filePath,
    },
    {new : true},
    function(err, project){
        if(err){
            res.status(500).json({
                Error : err
            })
        }else{
            res.status(200).json({
                Message : "Project updated succesfully ",
                project
            })
        }
    }
    );
}

module.exports = {
    addProject,
    getOneProject,
    getAllProjects,
    deleteProject,
    updateProject
}