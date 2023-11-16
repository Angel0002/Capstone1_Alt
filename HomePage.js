import React, { useState } from "react";
import "./HomePage.css";
import SignUp from "./SignUp"; // Import the SignUp component

function HomePage() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateToSignUp = () => {
    setCurrentPage("signup");
  };

  const navigateToHome = () => {
    setCurrentPage("home");
  };

  return (
    <div className="page">
      {currentPage === "home" && (
        <>
          <div className="topnav">
            <a className="active" href="#home">
              Home
            </a>
            <a href="#Login">Login</a>
            <button className="button" onClick={navigateToSignUp}>
              Sign Up
            </button>
            <div className="name">Garage Sale Finder</div>
          </div>
          <footer className="footer">
            Made with
            <span role="img" aria-label="Heart Emoji">
              ❤️
            </span>
            from Team Hex: <a href="https://github.com/Angel0002">Melis</a>
          </footer>
        </>
      )}

      {currentPage === "signup" && <SignUp onNavigateBack={navigateToHome} />}
    </div>
  );
}

export default HomePage;
