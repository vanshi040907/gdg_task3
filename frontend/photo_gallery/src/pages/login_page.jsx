import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../css/login.css";

function Login_page() {
    const navigate = useNavigate();


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Username:", username);
        console.log("Password:", password);

        alert("Login Successful!");

        navigate("/gallery");
    };

    return (
        <div className="login-page">

            <div className="login-card">

                <h2>Login</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Login</button>

                    <div className="signup">
                        Do not have an account yet?   <Link to="/signup" className="navlink">Sign up </Link>
                    </div>

                </form>

            </div>

        </div>
    );
}

export default Login_page;