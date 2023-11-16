import React, { useState } from "react";
import "./SignUpPage.css"; // Ensure this path is correct

function SignUp({ onNavigateBack }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the sign-up logic here
    console.log(
      "Sign Up:",
      username,
      email,
      password,
      confirmPassword,
      dateOfBirth
    );
  };

  return (
    <div className="sign-up-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <button type="submit" className="button">
          Sign Up
        </button>
        <button
          type="button"
          onClick={onNavigateBack}
          className="button back-button"
        >
          Back to Home
        </button>
      </form>
    </div>
  );
}

export default SignUp;
