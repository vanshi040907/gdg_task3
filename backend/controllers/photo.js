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

async function handlephotoupload(req, res) {
    console.log("enter");
  try{
    if (!req.file) {
            return res.status(400).json({ error: "No file received" });
        }
    const cloudinaryresponse = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: "cloud_folder" },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );
            stream.end(req.file.buffer); // ← use buffer, not path
        });

        console.log("Cloudinary URL:", cloudinaryresponse.secure_url);

        await Photo.create({
            photofilename: cloudinaryresponse.secure_url,
        });

        req.io.emit('photofile', cloudinaryresponse.secure_url);

        return res.json({ success: true, url: cloudinaryresponse.secure_url });
    
}
catch (error) {
        console.error("Upload failed:", error);
        return res.status(500).json({ error: error.message });
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

async function handleFavourites(req,res) {
    const currentuser = req.user._id;
    const photofav= await Photo.find({peopleupvote:currentuser});
    console.log(photofav); 
    return res.json(photofav);
}

async function handleprofile(req, res) {
   const currentuser = req.user._id;
   const profile = await User.findById(currentuser);
   console.log(profile);
   console.log("this is profile");
   return res.json(profile);
}

module.exports = {handlephotoupload,handlephotoshow,handleupvote, handleupvoteshow, handleFavourites, handleprofile};
    


