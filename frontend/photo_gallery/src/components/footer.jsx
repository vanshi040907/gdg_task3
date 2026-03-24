import '../css/footer.css'
import {useState, useEffect} from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faHouse, faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return (
        <div className="footer">
            <button className='upload btn'><FontAwesomeIcon icon={faUpload} />Upload</button>
            <button className='home btn'><FontAwesomeIcon icon={faHouse} /></button>
            <button className='favorite btn'><FontAwesomeIcon icon={faHeart} /></button>
        </div>
    )
}

export default Footer;
