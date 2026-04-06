const User = require('../models/user');

async function handleusersignup(req, res) {
    const { username, email, password } = req.body;

    await User.create({
        username: username,
        email: email.trim().toLowerCase(),
        password: password.trim(),
    });

    return res.redirect({success:true});
}

module.exports = { handleusersignup };