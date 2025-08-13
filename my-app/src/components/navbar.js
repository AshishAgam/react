import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import mainlogo from "../assets/mainlogo.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={mainlogo} alt="MainLogo" />
      </div>
      
      <ul className="nav-links">
        <li><Link to="/product">Products</Link></li>
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/">Services</Link></li>
        <li><Link to="/">Resources</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Events</Link></li>
      </ul>
      <button className="nav-btn">See Demo</button>
    </nav>
  );
}
