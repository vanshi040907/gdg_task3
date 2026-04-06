import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import axios from "axios"
function Login_page() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("email", email);
        console.log("Password:", password);
        /*alert("Login Successful!");
        axios.post("http://localhost:1111/login/enter" ,{
            email: email,
            password: password
        })
             .then(res => navigate("/gallery"))
             .catch(err => console.log(err));*/
             try {
    const res = await axios.post(
      "http://localhost:1111/login/enter",
      {
        email,
        password
      },
      {
        withCredentials: true 
      }
    );

    alert("Login Successful!");
    navigate("/gallery");

  } catch (err) {
    if (err.response?.status === 401) {
      alert("Invalid email or password ❌");
    } else {
      alert("Server error ⚠️");
    }
  }      
    };
    handleSubmit();


    return (
        <div className="login-page">
            <div className="login-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                    <div style={{color:"white"}}>
                        Do not have an account yet?   <Link to="/signup">Sign up </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login_page;