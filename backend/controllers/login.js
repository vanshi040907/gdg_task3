const User= require('../models/user');
const Photo = require('../models/photo');
const {setuser,getuser} = require('../service/auth');
async function handleuserlogin(req,res) {
      const {email,password}=req.body;
      const user = await User.findOne({email,password});
      if(!user) {
        console.error("invalid email or password");
        
        return res.redirect("/login");
        
      }
      const token = setuser(user);
      res.cookie('uid',token);
      


   return res.redirect("/"); 
    
   
}



module.exports = {handleuserlogin};