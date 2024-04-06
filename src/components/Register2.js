import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage2.css';


const RegisterPage2 = () => {
  const [userid, setUserid] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact_number, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [additional_information, setAdditionalInformation] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
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
            <label htmlFor="userid" className="label">User ID</label>
            <input
              type="text"
              id="userid"
              name="userid"
              value={userid}
              onChange={(e) => setUserid(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="inputContainer">
  <label htmlFor="first_name" className="label">First Name</label>
  <input
    type="text"
    id="first_name"
    name="first_name"
    value={first_name}
    onChange={(e) => setFirstName(e.target.value)}
    required className="input"
  />
</div>
          <div className="inputContainer">
  <label htmlFor="last_name" className="label">Last Name</label>
  <input
    type="text"
    id="last_name"
    name="last_name"
    value={last_name}
    onChange={(e) => setLastName(e.target.value)}
    required className="input"
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
  <label htmlFor="contact_number" className="label">Contact Number</label>
  <input
    type="tel"
    id="contact_number"
    name="contact_number"
    value={contact_number}
    onChange={(e) => setContactNumber(e.target.value)}
    required className="input"
  />
</div>
          <div className="inputContainer">
  <label htmlFor="address" className="label">Address</label>
  <input
    type="text"
    id="address"
    name="address"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    required className="input"
  />
</div>
          <div className="inputContainer">
  <label htmlFor="cgpa" className="label">CGPA</label>
  <input
    type="number"
    id="cgpa"
    name="cgpa"
    value={cgpa}
    onChange={(e) => setCgpa(e.target.value)}
    required className="input"
  />
</div>
          <div className="inputContainer">
  <label htmlFor="additional_information" className="label">Additional Information</label>
  <input
    type="text"
    id="additional_information"
    name="additional_information"
    value={additional_information}
    onChange={(e) => setAdditionalInformation(e.target.value)}
    className="input"
  />
</div>
          <div className="inputContainer">
  <label htmlFor="password" className="label">Password</label>
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
  <label htmlFor="confirm_password" className="label">Confirm Password</label>
  <input
    type="password"
    id="confirm_password"
    name="confirm_password"
    value={confirm_password}
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

export default RegisterPage2;