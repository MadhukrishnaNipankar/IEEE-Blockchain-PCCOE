import React from "react";

// Component Imports
import Aim from "../Components/Aim";

function HomePage() {
  return (
    <>
      <div style={{ height: "50rem", position: "relative" }}>
        <img
          src="/assets/HomebgImg2.jpg"
          alt=""
          style={{
            width: "100%",
            opacity: "0.7",
            height: "100%",
            zIndex: "-1",
            objectFit: "cover", // Ensure the background image covers the entire container
          }}
        />

        <div
          style={{
            zIndex: "1",
            position: "absolute",
            top: "50%",
            width: "100%",
            color: "white",
            transform: "translateY(-50%)", // Center content vertically
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "3rem", // Adjust font size for smaller screens
              textShadow: "3px 3px black",
            }}
          >
            IEEE PCCOE Blockchain Group
          </div>
          <p style={{ fontSize: "1.5rem", textShadow: "3px 3px black" }}>
            - A tech-savvy community deeply passionate about every facet of
            blockchain technology.
          </p>

          <div
            style={{
              fontSize: "1.2rem", // Adjust font size for smaller screens
              border: "2px solid white",
              width: "7rem", // Adjust width for smaller screens
              padding: "0.5rem", // Adjust padding for smaller screens
              borderRadius: "0.7rem",
              margin: "auto",
            }}
          >
            India
          </div>
        </div>
      </div>
      <Aim />
      <br />
      <br />
    </>
  );
}

export default HomePage;
