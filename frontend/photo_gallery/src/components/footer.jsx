import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import '../css/footer.css'
import {useState, useEffect} from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return (
        <div className="footer">
            <button className='upload btn'><FontAwesomeIcon icon={faUpload} />Upload</button>
        </div>
    )
}

export default Footer;
