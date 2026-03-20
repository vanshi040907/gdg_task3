const User= require('../models/user');
async function handleusersignup(req,res) {
       const {name,email,password} =req.body;
        await User.create ({
        name:name,
        email:email,
        password:password,
    });

   return res.redirect("/"); 
    
   
}


module.exports = {handleusersignup};