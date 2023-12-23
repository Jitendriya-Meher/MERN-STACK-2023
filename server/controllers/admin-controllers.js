const Contact = require("../models/contact-model");
const User = require("../models/user-model");

const getAllUsers = async (req, res, next) => {
    try{
        const users = await User.find({},{
            password:0
        });

        return res.status(200).json({
            msg:"users found successfully",
            data: users
        });
    }
    catch(err){
        next(err);
    }
}

const getAllContacts = async (req, res, next) => {
    try{
        const contacts = await Contact.find();

        return res.status(200).json({
            msg:"contacts found successfully",
            data: contacts
        });
    }
    catch(err){
        next(err);
    }
}

module.exports = {getAllUsers , getAllContacts};