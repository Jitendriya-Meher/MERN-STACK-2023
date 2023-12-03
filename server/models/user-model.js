
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
});

// secure password with bcrypt
userSchema.pre('save',async function(next){

    // console.log("pre method save ",this);

    const user = this;

    if( !user.isModified("password") ){
        next();
    }

    try{
        const saltRound = await bcrypt.genSalt(10);
        
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    }
    catch(err){
        next(err);
    }
});

// json web token
userSchema.methods.generateToken = async function(){

    try{
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin, 
        },
        process.env.JWY_SECRET_KEY,{
            expiresIn:"2d",
        }
        );
    }
    catch(err){
        console.log("error generating in token",err);
    }
};

//compare password
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password);
}

const User = new mongoose.model("User",userSchema);
module.exports = User;