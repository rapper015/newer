import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import axios from 'axios';
import { BASE_URL } from '../../constant';

export default function Login() {
  const navigate=useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault()
    const data={
      email,
      password
    }
    axios.post(`${BASE_URL}/account/login/`,data)
    .then(res=>{
      localStorage.setItem('access_token',res.data.tokens.access)
      localStorage.setItem('user','department')
      setTimeout(() => {
        navigate('/TAApplicant/Home')
      }, 1000);
    })
    .catch(err=>{
      alert(err.response.data)
    })
  }
  return (
	<div className="container">
	<div className="imageContainer">
	  <img src='/elements.svg'  alt="Your description" />
	</div>
	<div className="divider" />
	<div className="formContainer">
	  <form 
	//   onSubmit={handleSubmit}
	  >
		<h1 className="title">Department Staff</h1>
		<h1 className="title">Log in to your account</h1>

		<div className="inputContainer">
        <label htmlFor="email" className="label">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
		  <Button title={'Login'} onClick={handleSubmit}/>
		</div>
		<Link to="/Department/register" className="linker">Don't have an account? Register Here</Link>
	  </form>
	</div>  
  </div>
  )
}
