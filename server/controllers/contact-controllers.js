
const Contact = require("../models/contact-model.js");

const contactForm = async (req, res) => {

    try{

        const response = req.body;

        const form = await Contact.create(response);

        return res.status(200).json(
            { message: "message send successfully",
            form });
    }
    catch(err){
        return res.status(500).json({ message: "message not delivered" });
    }
}

module.exports = contactForm;