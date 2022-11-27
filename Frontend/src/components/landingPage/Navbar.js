import React from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar.css";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  return (
    <>
      <div className="navbar" style={{ backgroundColor: "#c6dabf" }}>
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            <Link to="/">
              <img style={{ width: "60px" }} src={logo} alt="" />
            </Link>
            <span style={{ marginLeft: "20px", fontWeight: "bold" }}>
              MedNect
            </span>
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <Link to="/">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
}
