const express = require("express");
const router = express.Router();
const path = require("path");

const {handleusersignup}= require("../controllers/user");
router
    .route("/enter")
    .post(handleusersignup);
router
    .route("/")
    .get((req,res)=> {
    return res.sendFile(path.resolve("./public/signin.html"))});


module.exports=router;
