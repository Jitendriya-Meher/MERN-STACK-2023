const adminMiddleware = async ( req, res, next) => {

    try{

        // return res.status(200).json({
        //     msg:"i am admin",
        //     user:req.user
        // });

        if( req.user.isAdmin === true){
            next();
        }
        else{
            return res.status(403).json({
                msg:"Access user is not admin",
            });
        }
    }
    catch(err){
        return res.status(500).json({
            msg:"user is not admin",
            error:err.message
        })
    }
}

module.exports ={adminMiddleware};