const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const home = async() => {

    try{
        res.status(200).send("Welcome to Auth page using routes");
    }
    catch(err){
        console.log(err);
    }
}

const register = async (req, res) => {
    
    try{
        // get data from request
        const {username,email,phone,password} = req.body;
        
        // check user already registered or not 
        const userExists = await User.findOne({
            email: email
        }); 

        if(userExists){
            return res.status(400).json({
                msg:"email already registered"
            });
        }

        // hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const user = await User.create({
            username,
            email,
            phone,
            // password:hash_password
            password
        });

        const token = await user.generateToken();

        return res.status(200).json({
            msg:"user created successfully",
            token,
            userId: user._id.toString(),
        });

    }
    catch(err){
        res.status(400).json({
            msg:"error in user creation",
            error: err.message
        });
    }
}

module.exports = {home,register};