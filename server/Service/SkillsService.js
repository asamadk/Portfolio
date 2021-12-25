const Skills = require('../Models/Skills');
const mongoose = require('mongoose');

const addSkill = async (req,res,next) => {
    const skill = new Skills({
        _id : new mongoose.Types.ObjectId,
        name : req.body.skill
    });
    try{
        await skill.save();
        res.status(200).json(skill)
    }catch(err){
        res.status(500).json({
            Error : err
        })
    }
}

const getOneSkill = async (req,res,next) => {
    const id = req.params.skillId;
    try{
        const skill = await Skills.findById({_id : id});
        res.status(200).json(skill);
    }catch(err){
        res.status(500).json({
            Error : err
        })
    }
}

const getAllSkills = async (req,res,next) => {
    try{
        const skills = await Skills.find();
        res.status(200).json(skills);
    }catch(err){
        res.status(500).json({
            Error : err
        });
    }
}

const deleteSkill = async (req,res,next) => {
    const id = req.params.skillId;
    try{
        await Skills.deleteOne({ _id : id});
        res.status(200).json({
            Message : "Skill deleted succesfully"
        })
    }catch(err){
        res.status(500).json({
            Error : err
        })
    }
}

const updateSkill = async (req,res,next) => {
    const id = req.params.skillId;
    // console.log(id)
  Skills.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
    //   level: req.body.level,
    },
    function (err, skill) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Project updated successfully", skill });
      }
    }
  );
}


module.exports = {
    addSkill,
    getAllSkills,
    getOneSkill,
    deleteSkill,
    updateSkill
}