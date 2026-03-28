const express = require("express");
const path = require("path");
const cookieparser = require("cookie-parser");
const {restrictToLoggedInUserOnly,identifypersonWhoUpvote}= require("./middleware/auth.js");
require('dotenv').config();

//const PORT = process.env.PORT || 1111;
const app = express();
const http = require("http");
const{Server} = require("socket.io");
const {connectmongoose} = require('./connection.js');
const photoroute = require("./routes/photo.js");
const userroute = require("./routes/user.js");
const loginroute = require("./routes/login.js");
const cors = require("cors");
const server = http.createServer(app);
/*const io = new Server(server,{
    cors: {
        origin: "*", 
        methods: ["GET", "POST"]
    }
});*/
const io =new Server(server);
connectmongoose("mongodb://127.0.0.1:27017/imageapp");


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static( path.resolve("./public")));
app.use(cookieparser());

app.use("/uploads", express.static(path.resolve("./uploads")));
app.use((req,res,next)=>{
    req.io = io;
    next();
});


app.use("/",identifypersonWhoUpvote,photoroute);

app.use("/signin",userroute);
app.use("/login",loginroute);
app.get('/',(req,res)=> {
    return res.sendFile("./public/index.html");
});

 io.on('connection',(socket)=> {
    
   console.log("new user to share");

});



server.listen(1111,console.log("server started!!"));