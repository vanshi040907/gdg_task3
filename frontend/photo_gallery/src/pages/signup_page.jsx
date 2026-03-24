import React, { useState } from "react";
import "../css/signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, email, password);
        alert("acount created!");

        navigate("/login");
    };

    return (
        <div className="signup-page">

            <div className="overlay">

                <div className="signup-container">

                    <h2>Sign Up</h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button>Create Account</button>

                    </form>

                    <div>
                        Already have an account? <Link to="/login">Login</Link>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Signup;