const Education = require('../Models/Educations');
const mongoose  = require('mongoose');

const addEducation = async (req,res,next) => {
    console.log('addEducation');
}

const getOneEducation = async (req,res,next) => {
    console.log('addEducation');
}

const  getAllEducation = async (req,res,next) => {
    console.log('getAllEducation')
}

const deleteEducation = async (req,res,next) => {
    console.log('deleteEducation');
}

const updateEducation = async(req,res,next) => {
    console.log('updateEducation');
}

module.exports = {
    addEducation,
    getOneEducation,
    getAllEducation,
    deleteEducation,
    updateEducation
}