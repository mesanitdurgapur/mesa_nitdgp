import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/mesa-white.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Toggle the navbar state
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Bootstrap" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse justify-content-end`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                aria-current="page"
                onClick={handleNavCollapse}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/event" onClick={handleNavCollapse}>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team" onClick={handleNavCollapse}>
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery" onClick={handleNavCollapse}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavCollapse}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
