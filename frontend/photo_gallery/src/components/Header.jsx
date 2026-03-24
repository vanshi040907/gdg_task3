import React from "react";
import { Link } from "react-router-dom";
import '../css/Header.css'

function Header() {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <Link to="/" className="navlink"><div className="name">Gallery</div></Link>
                    <div className="tag">capturing memories</div>
                </div>
            </div>
        </>
    );
}

export default Header;