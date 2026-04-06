import '../css/footer.css'
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Heart, User, Home, Upload} from 'lucide-react'


function Footer() {
    const [file , setfile] = useState(null);
    const navigate = useNavigate();
    const [uploadActive, setUploadActive] = useState(false);
      
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const handleUpload = (e) =>{
           e.preventDefault();

           if (!file) {
            alert("Please select a file first!");
            return;
           }

        setUploadActive(true);

    const formdata = new FormData(); // ← MOVE INSIDE handler
        formdata.append("uploadedphoto", file); // ← now file has the actual value

        axios.post("http://localhost:1111/upload", formdata, {
            headers: { "Content-Type": "multipart/form-data" } // ← add this
        })
        .then((res) => {
            console.log("Upload success:", res);
            setUploadActive(false);
            navigate("/gallery");
        })
        .catch(err => console.log("Upload error:", err));
        // setUploadActive(false);
    };

  
    return (
        <div className="footer">
            <form onSubmit={handleUpload}  encType="multipart/form-data">
                <input 
                type="file"
                name="uploadedphoto"
                onChange={(e) => setfile(e.target.files[0])}
                />
                <button className='upload btn' type="submit"><Upload
                color={uploadActive ? 'green' : 'gray'}
                fill={uploadActive ? 'green' : 'none'}/></button>
            
            </form>
            <Link to="/gallery"><button className='home btn' type="button" ><Home
            color={isActive('/gallery') ? 'white' : 'gray'}
            fill={isActive('/gallery') ? 'white' : 'none'}/></button></Link>
            <Link to="/favorites"><button className='favorite btn'><Heart
            color={isActive('/favorites') ? 'white' : 'gray'}
            fill={isActive('/favorites') ? 'red' : 'none'}/></button></Link>
            <Link to="/profile"><button className='profie btn'><User
            color={isActive('/profile') ? 'white' : 'gray'}
            fill={isActive('/profile') ? 'white' : 'none'}/></button></Link>
        </div>
    
    )
}


export default Footer;