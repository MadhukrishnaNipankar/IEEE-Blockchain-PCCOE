import React from "react";

function Navbar() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ fontSize: "1.5rem" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ width: "10rem" }}>
            <img
              src="/ieeeStudentBranchLogo.png"
              style={{ width: "100%" }}
              alt="IEEE Blockchain"
            />
          </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                IEEE PCCOE Blockchain
              </a>
              <a className="nav-link" href="/">
                Events
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
