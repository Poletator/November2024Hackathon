"use client"; // Indicate this is a client component 
 
import React, { useState } from "react"; 
import "./css/signup.css"; // Import the CSS file 
import bcrypt from "bcryptjs"; // Import bcrypt for password hashing 

export default function Signup() { 
  const [firstName, setFirstName] = useState(""); 
  const [surname, setSurname] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); // State for error message 
 
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault(); 
 
    // Reset error message 
    setErrorMessage(""); 
 
    // Check if passwords match 
    if (password !== confirmPassword) { 
      setErrorMessage("Passwords do not match!"); 
      return; 
    } 
    if (password.length < 8) { 
      setErrorMessage("Password needs to be at least 8 characters long."); 
      return; 
    } 
 
    try { 
      // Hash the password 
      const hashedPassword = await bcrypt.hash(password, 10); 
 
      // Create a JSON object to send 
      const signupData = { 
        firstName, 
        surname, 
        email, 
        password: hashedPassword, 
      }; 
 
      // Make the POST request 
      const response = await fetch("https://your-backend-url.com/signup", { 
        method: "POST", 
        headers: { 
          "Content-Type": "application/json", 
        }, 
        body: JSON.stringify(signupData), 
      }); 
 
      // Check the response status 
      if (response.ok) { 
        console.log("Signup successful!"); 
      } else { 
        setErrorMessage("Signup failed. Please try again."); 
      } 
    } catch (error) { 
      console.error("Error during signup:", error); 
      setErrorMessage("An error occurred. Please try again."); 
    } 
  }; 
 
  return ( 
    <div className="signin-container"> 
      <h2>Sign-up Page</h2> 
      <form onSubmit={handleSubmit} className="signin-form"> 
        <div className="form-group"> 
          <label htmlFor="firstName">First Name:</label> 
          <input 
            type="text" 
            id="firstName" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required 
            className="form-input" 
          /> 
        </div> 
        <div className="form-group"> 
          <label htmlFor="surname">Surname:</label> 
          <input 
            type="text" 
            id="surname" 
            value={surname} 
            onChange={(e) => setSurname(e.target.value)} 
            required 
            className="form-input" 
          /> 
        </div> 
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
      </form> 
      {/* Display the error message as a popup */} 
      {errorMessage && ( 
        <div className="error-popup"> 
          {errorMessage} 
          <button onClick={() => setErrorMessage("")}>OK</button> 
        </div> 
      )} 
    </div> 
  )};