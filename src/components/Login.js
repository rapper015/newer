import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
  const [phone_no, setphone_no] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="container">
      <div className="imageContainer">
        <img src='/elements.svg'  alt="Your description" />
      </div>
      <div className="divider" />
      <div className="formContainer">
        <form>
          <h1 className="title">Company name</h1>
          <h1 className="title">Log in to your account</h1>

          <div className="inputContainer">
            <label htmlFor="phone_no" className="label">User name / Email</label>
            <input
              type="number"
              id="phone_no"
              name="phone_no"
              value={phone_no}
              onChange={(e) => setphone_no(e.target.value)}
              required
              className="input"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="password" className="label">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              className="input"
            />
          </div>

          <div className="buttonContainer">
            <button type="submit" className="button primaryButton">
              Login
            </button>
            <button type="button" className="button secondaryButton">
              Forgot Password?
            </button>
          </div>
          <Link to="/register" className="linker">Don't have an account? Register Here</Link>
        </form>
      </div>  
    </div>
  );
};

export default LoginPage;