import React from "react";

function Events() {
  return (
    <>
      <div style={{ height: "50rem", position: "relative" }}>
        <img
          src="/assets/EventsBg.jpeg"
          alt=""
          style={{
            width: "100%",
            opacity: "1.5",
            height: "100%",
            zIndex: "-1",
            objectFit: "cover", // Ensure the background image covers the entire container
            /* Add the blur effect */
            filter: "blur(1px)",
            webkitFilter: "blur(1px)",
            backgroundColor: "black",
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
            "What's In and What's Out in Blockchain for the Next 24 Months"
          </div>
          <p style={{ fontSize: "1.5rem", textShadow: "3px 3px black" }}>
            Unlocking the Future: Join Us at
          </p>
          <h3
            style={{
              fontSize: "5rem",
              color: "#eb4343",
              textShadow: "black 7px 6px",
            }}
          >
            BlockCon 2k23
          </h3>
        </div>
      </div>
    </>
  );
}

export default Events;
