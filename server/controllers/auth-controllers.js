
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
        res.status(200).send("Welcome to Auth Resister page using routes");
    }
    catch(err){
        res.status(400).send("Welcome to Auth Resister page using routes !!! page not found");
    }
}

module.exports = {home,register};