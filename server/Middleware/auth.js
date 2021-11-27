const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization
        const decoded = jwt.verify(token,process.env.TOKEN_SECRET);
        req.userData = decoded;
        next();
    }catch(err){
        return res.status(401).json({
            message : 'Auth failed',
        });
    }
};