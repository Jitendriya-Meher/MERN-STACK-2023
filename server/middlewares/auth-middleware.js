const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const User = require("../models/user-model");
dotenv.config();

const authMiddleware = async(req,res,next) => {

    const token = req.header('Authorization');

    if( !token){
        return res.status(401).json({
            msg:'unauthenticated http, token not provide'
        })
    }
    console.log("token: " , token);

    const jwtToken = token.replace("Bearer ","").trim();
    console.log("jwt token: " , jwtToken);

    try{

        const isVerified = jwt.verify(jwtToken,process.env.JWY_SECRET_KEY);

        console.log("verify token: " , isVerified);

        const userData = await User.findOne({
            _id:isVerified.userId
        }).select({
            password:0
        });

        console.log("userData", userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;
        
        next();
    }
    catch(err){
        return res.status(500).json({
            msg:"error in token",
            error:err.message
        });
    }
};

module.exports = authMiddleware;