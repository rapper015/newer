import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import Button from "../../components/Button";
import axios from "axios";
import { BASE_URL } from "../../constant";

export default function Register() {
  const navigate=useNavigate();

	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault()
    const data={
      first_name:fullName,
      email,
      password,
      phone_no:phoneNumber,
      instructor:true
    }
    axios.post(`${BASE_URL}account/register/`,data)
    .then(res=>{
      navigate('/Instructor/login')
    })
    .catch(err=>{
      alert(err.response.data)
    })
  }
  return (
	<div className="container">
<div className="imageContainer">
  <img src='/empty-search.svg'  alt="Your description" />
</div>
<div className="divider" />
<div className="formContainer">
  <form>
	<h1 className="title">Instructor</h1>
	<h1 className="title">Register your account</h1>
	<div className="inputContainer">
        <label htmlFor="fullName" className="label">Full Name:</label>
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
        <label htmlFor="email" className="label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input"
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="phoneNumber" className="label">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
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
	 <Button title={'Register'} onClick={handleSubmit}/>
	</div>
	<Link to="/Instructor/login" className="linker">Already have an Account? Login In</Link>
  </form>
</div>  
</div>
  )
}

