import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const RegisterPage = () => {
  const [phone_no, setphone_no] = useState('');
  const [name,setname] =useState('');
  const [password, setPassword] = useState('');
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
            <label htmlFor="phone_no" className="label">User name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="phone_no" className="label">Email</label>
            <input
              type="number"
              id="phone_no"
              name="phone_no"
              value={phone_no}
              onChange={(e) => setphone_no(e.target.value)}
              required className="input"
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="phone_no" className="label">Phone No</label>
            <input
              type="number"
              id="phone_no"
              name="phone_no"
              value={phone_no}
              onChange={(e) => setphone_no(e.target.value)}
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