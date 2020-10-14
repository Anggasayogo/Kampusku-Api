const jwt = require('jsonwebtoken')
const UsersModel = require('../../models/Users');

const verifytoken = async (req,res,next)=>{
    const token = await req.headers['access-token']
    
    if(!token){res.send("Access deined !"); }

    try{
        const check = await UsersModel.findOne({api_token : token});
        const verify = await jwt.verify(check.api_token, process.env.SECRET_KEY)
        req.user = verify
    }
    catch(err){
        res.status(401).send("Invalid access-token")
    }
    next();

}

module.exports = verifytoken;