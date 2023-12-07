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

const login = async (req, res) => {

    try{

        const {email, password} = req.body;
        
        const userExits = await User.findOne({email});

        // console.log("userExits", userExits);

        if( !userExits){
            return res.status(404).json({
                msg:"user not found ! register first"
            });
        }

        // const comp = await bcrypt.compare(password, userExits.password);

        const comp = await userExits.comparePassword(password);

        if( comp){
            const token = await userExits.generateToken();

            return res.status(200).json({
                msg:"user login successfully",
                token,
                userId: userExits._id.toString(),
            });
        }
        else{
            return res.status(200).json({
                msg:"password not match",
            });
        }
    }
    catch(err){
        res.status(500).json({
            msg:"error in login",
            error:err.message
        })
    }

}

const user = async (req, res) => {

    try{
        const userData = req.user;
        console.log("userData", userData);

        return res.status(200).json({
            msg:userData
        });

    }
    catch(err){
        return res.status(500).json({
            msg:"error in getting user info",
            error:err.message
        })
    }

}

module.exports = {home,register,login,user};