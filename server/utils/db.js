
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {

    try{
        await mongoose.connect(process.env.URI);
        // console.log("env",process.env.URI);

        console.log("connectDB successfully");
    }
    catch(err){
        console.log("db connection error",err);
        process.exit(1);
    }
}

module.exports = connectDB;