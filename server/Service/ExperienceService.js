const Experience = require('../Models/Experience');
const mongoose = require('mongoose');

const addExperience = async (req,res,next) => {
    console.log('addExperince')
}

const getOneExperience = async (req,res,next) => {
    console.log('getOneExperience')
}

const getAllExperiences = async (req,res,next) => {
    console.log('getAllExperience')
}

const deleteExperience = async (req,res,next) => {
    console.log('deleteExperience')
}

const updateExperience = async (req,res,next) => {
    console.log('updateExperience')
}

module.exports = {
    addExperience,
    getOneExperience,
    getAllExperiences,
    deleteExperience,
    updateExperience
}