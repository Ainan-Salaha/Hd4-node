const jwt =require('jsonwebtoken');
// const CONSTANT = require ('../config/constant');

const userLoginController=(req,res)=>{
    console.log("User Loggin IN...");
    const loginData=req.body;
    if(loginData.username &&  loginData.password){
        console.log("Recieved Login Data ==>",loginData);
        const jwtToken =jwt.sign(loginData, 'bezkoder.SECRET_KEY');
        return res.status(200).send({"token":jwtToken});
    }
    else{
        return res.status(400).send({message:"Invalid Data is Provided"});
    }

};

module.exports={userLoginController}