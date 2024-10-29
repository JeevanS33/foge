// src/components/Navbar/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthProvider/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>FOGE</h1>
      </div>
      <ul className="navbar-links">
        <li>
          {user ? (
            <>
              <span>{user.username}</span>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
