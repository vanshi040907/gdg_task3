const Photo = require('../models/photo');
const User= require('../models/user');
const Upvote= require('../models/upvote');

async function handlephotoupload(req,res) {
  
    const filename = req.file.filename;
    await Photo.create ({
        photofilename: filename,
    
    });

   
    req.io.emit('photofile',filename);
   
     
    return res.redirect("/");
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