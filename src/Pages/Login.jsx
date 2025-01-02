import React from 'react';
import '../assets/css/Login.css';

const Login = () => {
  return (
    <div className="login-container">
    <div className="login">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />

        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="switch">Don't have an account? <a href="/SignUp">Sign up</a></p>
    </div>
    </div>
  );
};

export default Login;