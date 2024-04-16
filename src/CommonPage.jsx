import React, { useState } from 'react'
import Button from './components/Button'
import { useNavigate } from 'react-router-dom'

export default function CommonPage() {
	const [id,setID]=useState();
	const navigate=useNavigate();

	const handleSubmit=()=>{
		if(!id){
			alert('Please Select an Option')
		}
		else{
			if(id==1){
				navigate('/TAApplicant/login')
			}
			else if(id==2){
				navigate('/Department/login')
			}
			else if(id==3){
				navigate('/TACommitte/login')
			}
			else if(id==4){
				navigate('/Instructor/login')
			}
		}
	}
  return (
	<div style={{height:'100vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
		<div style={{width:'30vw',height:'20vh',background:'white',padding:'20px'}}>
			<h1>UniTAHub</h1>
			<h2>Login As</h2>
			<select name="" id="" style={{width:'100%',height:'2rem'}} value={id} onChange={(e)=>setID(e.target.value)}>
				<option value={0}>--Select--</option>
				<option value={1}>TA Applicant</option>
				<option value={2}>Department Staff</option>
				<option value={3}>TA Committe Member</option>
				<option value={4}>Instructor</option>
			</select>
			<Button title={'Submit'} onClick={handleSubmit}/>
		</div>
	</div>
  )
}
