const User= require('../models/user');
const Photo = require('../models/photo');
const {setuser,getuser} = require('../service/auth');

async function handleuserlogin(req,res) {
      const {email,password}=req.body;
      const user = await User.findOne({email, password});
      if(!user) {
        console.error("invalid email or password");
        
       return res.status(401).json({
        success: false,
        message:"Invalid Email or password"
        }); 
        
      }
    
      const token = setuser(user);
      res.cookie('uid',token);
      


   return res.json({ success: true}); 
     
}

module.exports = {handleuserlogin};