import Image_box from '../components/image_box.jsx'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import '../css/home.css'

function Home() {
    return (
        <>
            <div className='pic'>
                <div className="home">

                    <h1 className='welcome'>Welcome to Gallery</h1>
                    <p>Explore beautiful memories captured in photos.</p>

                </div>
                <div className='wrapper'>
                    <div className="login">
                        <Link to="/login" className="navlink">Log in</Link></div>
                </div>
            </div>





        </>

    )
}

export default Home