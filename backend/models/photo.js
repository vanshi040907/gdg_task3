const mongoose = require("mongoose");
const photoschema = new mongoose.Schema({
    photofilename : {
        type:String,
        required:true,
        unique:true
    },
     peopleupvote : [ {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
        
        
    }]
},{timestamps:true});
const Photo = mongoose.model('PHOTO',photoschema);
module.exports = Photo;