import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from "@material-ui/icons/Menu";

export default function Navbar() {
	const navigate=useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const handleLogOut=()=>{
		localStorage.removeItem('user');
		localStorage.removeItem('access_token');
		navigate('/')
	}
	return (
	  <>
		<div className="nav" open={isOpen}>
		  <h6 className="title">UniTAHub</h6>
		  <div className="navMenu">
			<Link to="/yourdata">
			  <span>Apply Here</span>
			</Link>
			<Link to="/register2">
			  <span>My Applications</span>
			</Link>
			<Link to="/preliminaryMatching">
			  <span>Application Status</span>
			</Link>
			<Link to="/dataReview">
			  <span>Accept/Decline Offers</span>
			</Link>
			<Link to="/sendPreliminaryMatches">
			  <span>Profile</span>
			</Link>
			<Link>
			  <span onClick={handleLogOut}>Logout</span>
			</Link>
		  </div>
		</div>
		<div className="menuIconContainer">
		  <MenuIcon onClick={() => setIsOpen(!isOpen)} />
		</div>
		<div className="sidebar" open={isOpen}>
		  <div className="nav" open={isOpen}>
			<Link className="styledLink" to="/showInstructors">
			  <span className="styledSpan">Show Instructors</span>
			</Link>
			<span className="span" />
			<Link className="styledLink" to="/courseManagement">
			  <span className="styledSpan">Course Management</span>
			</Link>
			<span className="span" />
			<Link className="styledLink" to="/preliminaryMatching">
			  <span className="styledSpan">Preliminary Matching</span>
			</Link>
			<span className="span" />
			<Link className="styledLink" to="/dataReview">
			  <span className="styledSpan">Data Review</span>
			</Link>
			<span className="span" />
			<Link className="styledLink" to="/sendPreliminaryMatches">
			  <span className="styledSpan">Send Preliminary Matches</span>
			</Link>
			<span className="span" />
			<Link className="styledLink">
			  <span className="styledSpan" onClick={handleLogOut}>Logout</span>
			</Link>
			<span className="span" />
			<Link to="/profile">
			  <img className="userImag" src="/"  alt="logo"/>
			</Link>
		  </div>
		</div>
	  </>
	);
  };
