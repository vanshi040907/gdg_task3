import '../css/footer.css'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faHouse, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";



function Footer() {
    const [file , setfile] = useState(null);
  
    const navigate = useNavigate();
      const formdata = new FormData();
      formdata.append("uploadedphoto",file)
      
    const handleUpload = (e) =>{
           e.preventDefault();
           axios.post("http://localhost:1111/upload" , formdata)
             .then((res)=> console.log(res))
             .catch(err => console.log(err));
             navigate("/gallery")
    };

  
    return (
        <div className="footer">
            
           
            <form onSubmit={handleUpload}  encType="multipart/form-data">
                   <input type="file"
                          name="uploadedphoto"
                          onChange={(e) => setfile(e.target.files[0])}/>
                 <button className='upload btn'  type="submit" id ="send"><FontAwesomeIcon icon={faUpload} />Upload</button>
            <Link to="/gallery"><button className='home btn'><FontAwesomeIcon icon={faHouse} /></button></Link>
            </form>
            
            <Link to="/favorites"><button className='favorite btn'><FontAwesomeIcon icon={faHeart} /></button></Link>
            <Link to="/profile"><button className='profie btn'><FontAwesomeIcon icon={faUser} /></button></Link>
        </div>
    
    )
}


export default Footer;