// src/components/Login/Login.js
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      toast.success("Login Successful!", { autoClose: 1000 });
      navigate("/");
    } else {
      toast.error("Login Failed. Please try again.", { autoClose: 1000 });
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onFormSubmit}>
        <h2>Login</h2>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
