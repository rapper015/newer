import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="container">
      <div className="imageContainer">
        <img src='/empty-search.svg'  alt="Your description" />
      </div>
      <div className="divider" />
      <div className="formContainer">
        <form>
          <h1 className="title">Company name</h1>
          <h1 className="title">Log in to your account</h1>

          <div className="inputContainer">
            <label htmlFor="fullName" className="label">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required className="input"
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="userID" className="label">UserID</label>
            <input
              type="text"
              id="userID"
              name="userID"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
              required className="input"
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
              required className="input"
            />
           </div>
           <div className="inputContainer">
            <label htmlFor="confirmPassword" className="label">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required className="input"
            />
           </div>
           <div className="buttonContainer">
            <button type="submit" className="button primaryButton">
              Register
            </button>
          </div>
          <Link to="/" className="linker">login</Link>
        </form>
      </div>  
    </div>
  );
};
export default RegisterPage;
