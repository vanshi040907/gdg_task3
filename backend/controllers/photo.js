const Photo = require('../models/photo');
const User= require('../models/user');
const Upvote= require('../models/upvote');

const cloudinary = require("cloudinary").v2;
require('dotenv').config();
  cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

async function handlephotoupload(req,res) {
    console.log("enter");
  try{
    const filename = req.file.filename;
    const filepath = req.file.path;
    const cloudinaryresponse = await cloudinary.uploader.upload(filepath,{
        folder:"cloud_folder"
    })
       
    console.log(req.file);
    console.log(cloudinaryresponse);
    
    
    /*await Photo.create ({
        photofilename: filename,
    
    });*/
    await Photo.create ({
        photofilename:cloudinaryresponse.secure_url ,
    
    });

   
    req.io.emit('photofile',cloudinaryresponse.secure_url );
   
     
    return res.json({success:true});
}
catch (error) {
        console.error("Upload failed:", error);
        return res.status(500).send("Upload Error");
    }
}
async function handlephotoshow(req,res) {
    
    const allphoto = await Photo.find({});
    return res.json(allphoto);

}
async function handleupvote(req,res) {
const id =req.params.buttonid ;
const photoheart = await Photo.findOne({photofilename: id});

if(!photoheart.peopleupvote.includes(req.user._id)) {
    photoheart.peopleupvote.push(req.user._id);
    await photoheart.save();

}else{
     photoheart.peopleupvote.pop(req.user._id);
     await photoheart.save();
}
       req.io.emit('count',{
                   id: id,
                   count: photoheart.peopleupvote.length

                     });      

       return res.json({Success:true});
}

async function handleupvoteshow(req,res) {
    const id =req.params.buttonid ;
const photoheart = await Photo.findOne({photofilename: id});

return res.json({
        count: photoheart.peopleupvote.length
    });
}

module.exports = {handlephotoupload,handlephotoshow,handleupvote, handleupvoteshow};
    


