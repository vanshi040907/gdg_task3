import React from "react";
import { Link } from "react-router-dom";
import '../css/Header.css'


function Header() {
    return (
        <>
            <div className="header">

                <div className="logo">
                    <div className="name">Gallery</div>
                    <div className="tag">capturing memories</div>
                </div>

                <div className="login">
                    <Link to="/login" className="navlink">log in</Link></div>

            </div>
        </>
    );
}

export default Header;