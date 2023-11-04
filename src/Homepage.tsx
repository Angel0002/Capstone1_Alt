import React from "react";
import "./Homepage.css"; // Import your CSS file here
import { useNavigate } from "react-router-dom";

function Homepage() {
  return (
    <div className="page">
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#Login">Login</a>
        <a href="#SignUp">Sign Up</a>
        <div className="name">Garage Sale Finder</div>
      </div>
      <footer className="footer">
        Made with
        <span role="img" aria-label="Heart Emoji">
          ❤️
        </span>
        from Team Hex: <a href="https://github.com/Angel0002">Melis</a>
      </footer>
    </div>
  );
}

export default Homepage;
