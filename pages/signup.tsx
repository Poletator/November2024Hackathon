"use client"; // Indicate this is a client component

import React, { useState } from "react";
import "./css/signup.css"; // Import the CSS file

export default function Signup() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reset error message
    setErrorMessage("");

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!"); // Set error message
      return;
    }
    if (password.length < 8) {
      setErrorMessage("Password needs to be at least 8 characters long.")
      return;
    }

    // 
    // Additional logic for signup (API call, etc.)
  };

  return (
    <div className="signin-container">
      <h2>Sign-up Page</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstname">First name:</label>
          <input
            type="firstname"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <input
            type="surname"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="signin-button">
          Sign Up
        </button>
        <text style={{marginTop:30,alignSelf:"center",color:"#71797E",padding:10}}>Already registered? Please sign-in then!</text>
        <button type="submit" className="redirect-button">
          Redirect to Sign-in form
        </button>
      </form>
      {/* Display the error message as a popup */}
      {errorMessage && (
        <div className="error-popup">
          {errorMessage}
          <button onClick={() => setErrorMessage("")}>OK</button> {/* Close button */}
        </div>
      )}
    </div>
  );
}