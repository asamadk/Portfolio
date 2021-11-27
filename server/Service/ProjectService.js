const Project  = require('../Models/Projects');
const mongoose = require('mongoose');

const addProject = async (req,res,next) => {
    console.log('addProject');
}

const getOneProject = async (req,res,next) => {
    console.log('getOneProject')
}

const getAllProjects = async (req,res,next) => {
    console.log('getAllProject')

}

const deleteProject = async (req,res,next) => {
    console.log('deleteProject')
}

const updateProject = async (req,res,next) => {
    console.log('updateProject')
}

module.exports = {
    addProject,
    getOneProject,
    getAllProjects,
    deleteProject,
    updateProject
}