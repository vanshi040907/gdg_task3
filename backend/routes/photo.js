const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const {restrictToLoggedInUserOnly,identifypersonWhoUpvote}= require("../middleware/auth.js");

const {handlephotoupload,handlephotoshow,handleupvote, handleupvoteshow}= require("../controllers/photo");
router
    .route("/upload")
    .post(upload.single("uploadedphoto"),handlephotoupload);

router
    .route("/photo")
    .get(handlephotoshow);

    


router.post("/upvote/:buttonid", restrictToLoggedInUserOnly, handleupvote);

router
    .route("/upvoteshow/:buttonid")
    .get(handleupvoteshow)



module.exports=router;