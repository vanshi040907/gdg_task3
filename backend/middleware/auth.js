const {setuser,getuser} = require('../service/auth');
async function restrictToLoggedInUserOnly(req,res,next) {
    const useruid = req.cookies?.uid;
    if(!useruid) return res.status(401).json({ error: "Login required" });
    const user = getuser(useruid);
    if(!user) return res.status(401).json({ error: "Login required" });
    req.user=user;
    next();
}
async function identifypersonWhoUpvote(req,res,next) {
    const useruid = req.cookies?.uid;

    
    if (!useruid) {
        req.user = null;
        return next();
    }
    const user = getuser(useruid);
   
    req.user=user;
    next();
}
module.exports = {restrictToLoggedInUserOnly, identifypersonWhoUpvote};