import React from "react";
import '../css/Header.css'

function Header() {
    return (
        <>
            <div className="header">

                <div className="logo">
                    <div className="name">Gallery</div>
                    <div className="tag">capturing memories</div>
                </div>

                <div className="login">log in</div>

            </div>
        </>
    );
}

export default Header;