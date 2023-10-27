import React from "react";
import "../Styles/Aim.css";

function Aim() {
  return (
    <section className="aim-container">
      <div className="aim-text">
        <h3 style={{ maxWidth: "30rem", margin: "1rem" }}>
          We aim to share scientific and academic knowledge and contribute to
          the local community.
        </h3>
        <div style={{ margin: "1rem" }}>
          <p>
            ✅ Collaborate with industry, academia, government, relevant R&D
            establishments.
          </p>
          <p>
            ✅ Provide training to students in blockchain and allied
            disciplines.
          </p>
        </div>
      </div>
      <div className="aim-image">
        <img src="assets/pccoeImg.jpg" alt="" />
      </div>
    </section>
  );
}

export default Aim;
