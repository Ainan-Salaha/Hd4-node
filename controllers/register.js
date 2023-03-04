const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const CONSTANT = require("../config/constant");

const userRegisterController = function(req, res){
  console.log("Registering the User...");
  const userDetails = req.body;
  console.log("Recieved User's Data ==>", userDetails);
  const password = userDetails.password;
  const roundsOfsalt = 10;
  bcrypt.genSalt(roundsOfsalt, function(err, salt){
    if (err) {
      console.log(err);
    } 
    else {
      bcrypt.hash(password, salt, function(err, hashedPassword){
        if (err) {
          console.log(err);
          
        } 
        else {
          console.log("....Registered Successfully....");
          res.send({ "hashedPassword": hashedPassword });
        }
      })
    }
  })
};

module.exports = { userRegisterController };
