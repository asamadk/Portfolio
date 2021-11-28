const Message = require('../Models/Message');
const mongoose = require('mongoose');

const addMessage = async (req,res,next) => {
    const message = new Message({
        _id : new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
    });
    try{
        await message.save();
        res.status(200).json(message);
    }catch(err){
        res.status(500).json({
            Error : err
        })
    }
}

const getAllMessages  = async (req,res,next) => {
    try{
        const message = await Message.find({});
        res.status(200).json(message)
    }catch(err){
        res.status(500).json({
            Error : err
        })
    }
}

const updateMessage = async (req,res,next) => {
    const id = req.params.messageId;
    Message.findByIdAndUpdate(
        id,
        {
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
            isSeen: req.body.isSeen,
        },
        function(err,message){
            if(err){
                res.status(500).json({
                    Error : err
                })
            }else{
                res.status(200).json({
                    Message : "Message updated successfully",
                    message
                });
            }
        }
    )
}

module.exports = {
    addMessage,
    getAllMessages,
    updateMessage
}