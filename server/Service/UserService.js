const User = require('../Models/User');
const mongoose = require('mongoose');
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req,res,next) => {
    try{
        const searchUser = await User.find({
            email : req.body.email
        });
        if(searchUser.length >=1){
            return res.status(409).json({
                message : "This email already exists"
            })
        }
    }catch(err){
        res.status(500).json({
            error : `Error is ${err}`
        });
    }
    bCrypt.hash(req.body.password, 10 , async (err,hash)=> { 
        if(err){
            return res.status(500).json({
                error : `Error is ${err}`,
            });
        }else{
            const user = new User({
                _id : new mongoose.Types.ObjectId,
                name : req.body.name,
                email : req.body.email,
                password : hash,
            });
            console.log("USER",user);
            try{
                await user.save();
                res.status(201).json({
                    message : "user created"
                });
            }catch(err){
                res.status(500).json({
                    error : err
                })
            }
        }

    });
}

const login = async (req,res,next) => {
    try{
        const user = await User.find({
            email : req.body.email
        });
        if(user.length < 1){
            return res.status(401).json({
                message : "Auth failed"
            });
        }
        bCrypt.compare(req.body.password,user[0].password,(err,result) => {
            if(err){
                return res.status(401).json({
                    message : "Auth failed",
                });
            }
            if(result){
                const token = jwt.sign(
                {
                    email : user[0].email,
                    userId : user[0]._id
                },
                process.env.TOKEN_SECRET
                );
                return res.status(200).json({
                    message : "Auth success",
                    token : token,
                });
            }
    console.log("HERE4")

            res.status(401).json({
                message : "Auth failed",
            });
        });
    }catch(err){
        res.status(500).json({
            error : err
        })
    }
}

const getOneUser = async (req,res,next) => {
    const id = req.params.userId;
    try{
        const user = await User.findById(id);
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({
            error : err
        })
    }
}


module.exports = {
    signup,
    login,
    getOneUser
}