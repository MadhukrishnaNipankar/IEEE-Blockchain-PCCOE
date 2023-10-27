import React from "react";

function HomePage() {
  return (
    <div style={{ height: "50rem" }}>
      <img
        src="/assets/HomebgImg2.jpg"
        alt=""
        style={{
          width: "100%",
          opacity: "0.7",
          height: "100%",
          zIndex: "-1",
        }}
      />

      <div
        style={{
          zIndex: "1",
          position: "absolute",
          top: "50%",
          width: "100%",
          color: "white",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "5rem",
            textShadow: "3px 3px black",
          }}
        >
          IEEE PCCOE Blockchain Group
        </div>
        <p style={{ fontSize: "2rem", textShadow: "3px 3px black" }}>
          - A tech-savvy community deeply passionate about every facet of
          blockchain technology.
        </p>

        <div
          style={{
            fontSize: "1.5rem",
            border: "2px solid white",
            width: "9rem",
            padding: "1rem",
            borderRadius: "0.7rem",
            margin: "auto",
          }}
        >
          India
        </div>
      </div>
    </div>
  );
}

export default HomePage;
