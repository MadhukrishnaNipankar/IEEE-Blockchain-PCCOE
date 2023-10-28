// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ fontSize: "1.5rem" }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" style={{ width: "10rem" }}>
            <img
              src="/ieeeStudentBranchLogo.png"
              style={{ width: "100%" }}
              alt="IEEE Blockchain"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link active">
                IEEE PCCOE Blockchain
              </Link>
              <Link to="/events" className="nav-link">
                Events
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
