const Skills = require('../Models/Skills');
const mongoose = require('mongoose');

const addSkill = async (req,res,next) => {
    console.log('addSkill')
}

const getOneSkill = async (req,res,next) => {
    console.log('getOneSkill')
}

const getAllSkills = async (req,res,next) => {
    console.log('getAllSkill')
}

const deleteSkill = async (req,res,next) => {
    console.log('deleteSkill')
}

const updateSkill = async (req,res,next) => {
    console.log('updateSkill')
}


module.exports = {
    addSkill,
    getAllSkills,
    getOneSkill,
    deleteSkill,
    updateSkill
}