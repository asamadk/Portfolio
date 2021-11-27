const Message = require('../Models/Message');
const mongoose = require('mongoose');

const addMessage = async (req,res,next) => {
    console.log('addMEssage');
}

const getAllMessages  = async (req,res,next) => {
    console.log('getAllMEssage');
}

const updateMessage = async (req,res,next) => {
    console.log('updateMEssage');
}

module.exports = {
    addMessage,
    getAllMessages,
    updateMessage
}