import '../css/footer.css'
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faHouse, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return (
        <div className="footer">
            <button className='upload btn'><FontAwesomeIcon icon={faUpload} />Upload</button>
            <Link to="/"><button className='home btn'><FontAwesomeIcon icon={faHouse} /></button></Link>
            <Link to="/favorites"><button className='favorite btn'><FontAwesomeIcon icon={faHeart} /></button></Link>
            <Link to="/profile"><button className='profie btn'><FontAwesomeIcon icon={faUser} /></button></Link>
        </div>
    )
}

export default Footer;