const Photo = require('../models/photo');
const User= require('../models/user');
const Upvote= require('../models/upvote');

const cloudinary = require("cloudinary").v2;

  cloudinary.config({ 
        cloud_name: 'dkau0yjwe', 
        api_key: '815865897166141', 
        api_secret: 'IQ21_FD-K_5CjPqYwG18eNyXZR8' 
    });



async function handlephotoupload(req,res) {
  try{
    const filename = req.file.filename;
    const filepath = req.file.path;
    const cloudinaryresponse = await cloudinary.uploader.upload(filepath,{
        folder:"cloud_folder"
    })
    console.log(cloudinaryresponse);
    /*await Photo.create ({
        photofilename: filename,
    
    });*/
    await Photo.create ({
        photofilename:cloudinaryresponse.secure_url ,
    
    });

   
    req.io.emit('photofile',cloudinaryresponse.secure_url );
   
     
    return res.redirect("/");
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
    


