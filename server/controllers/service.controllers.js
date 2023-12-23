const Service = require("../models/service-model.js");

const services = async ( req, res) => {

    // console.log("service");
    try{
        const response = await Service.find();
        // console.log("response",response);

        if( !response){
            return res.status(404).json({
                msg:"No services found"
            });
        }

        return res.status(404).json({
            msg:"services found successfully",
            data: response
        });
    }
    catch(err){
        return res.status(404).json({
            msg:"No services found"+err.message
        });
    }
}

module.exports = {services}