const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization
        // console.log("TOKEN",token)
        //const decoded = jwt.verify(token,process.env.TOKEN_SECRET);
        const decoded = jwt.verify(token,"nodeinuseqoijfqfiobqbn");
        // console.log("DECODED",decoded);
        req.userData = decoded;
        next();
    }catch(err){
        return res.status(401).json({
            message : 'Auth failed',
        });
    }
};