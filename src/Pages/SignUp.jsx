import React from 'react';
import '../assets/css/Login.css';

const SignUp = () => {
  return (
    <div className="signup-container">
    <div className="signup">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p className="switch">Already have an account? <a href="/Login">Login</a></p>
    </div>
    </div>
  );
};

export default SignUp;