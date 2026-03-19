const express = require("express");
const router = express.Router();
const path = require("path");

const {handleuserlogin}= require("../controllers/login");
router
    .route("/enter")
    .post(handleuserlogin);
router
    .route("/")
    .get((req,res)=> {
    return res.sendFile(path.resolve("./public/login.html"))});


module.exports=router;