const mongoose = require("mongoose");
const upvoteschema = new mongoose.Schema({
       

    photoname: {
        type:String,
        required:true,
    }
   

},{timestamps:true});
const Upvote = mongoose.model('UPVOTE',upvoteschema);
module.exports = Upvote;