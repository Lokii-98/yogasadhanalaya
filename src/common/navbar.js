import React from "react";
import "./navBar.css";
export default function NavBar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light navBg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand logoSec" href="#aboutUs">
          <div>
            <img alt="logo" src="/assests/Logo.png" className="logo" />
          </div>
          <div className="logoContainer">
            <img alt="name" src="/assests/name.png" className="name" />
          </div>
        </a>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarTogglerDemo03"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link navLI" aria-current="page" href="#aboutUs">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navLI" href="#Events">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navLI" href="#contactUs">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
