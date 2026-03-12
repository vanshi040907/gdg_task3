const path = require("path");
const express = require("express");
const app = express();
const port = 8000;
const multer = require("multer");

const storage = multer.diskStorage({
   destination:function(req,file,cb) {
    return cb(null,'./uploads');
   },
   filename:function(req,file,cb) {
    return cb(null,`${Date.now()}-${file.originalname}`);
   }
});
const upload = multer({storage});

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.urlencoded({extended:false}));
app.use(express.static("./uploads"));

app.get("/",(req,res)=> {
    return res.render("homepage",{image:null});
});
app.post("/red",upload.single("image"),(req,res)=> {
    console.log(req.body);
    console.log(req.file);
    return res.render("homepage",{image:req.file.filename});

});






app.listen(port,console.log("server is running"));
