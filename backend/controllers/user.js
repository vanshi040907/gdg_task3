const User= require('../models/user');
async function handleusersignup(req,res) {
       const {username,email,password} =req.body;
        await User.create ({
        username:username,
        email:email,
        password:password,
    });

   return res.redirect("/"); 
    
   
}


module.exports = {handleusersignup};