import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from "@material-ui/icons/Menu";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false); 
  
	const toggleDropdown = () => setDropdownOpen(prevState => !prevState);
	return (
	  <>
		<div className="nav" open={isOpen}>
		  <h6 className="title">Company</h6>
		  <div className="navMenu">
			<Link to="/yourdata">
			  <span>Show Instructors</span>
			</Link>
			<Link to="/register2">
			  <span>Course Management</span>
			</Link>
			<Link to="/preliminaryMatching">
			  <span>Preliminary Matching</span>
			</Link>
			<Link to="/dataReview">
			  <span>Data Review</span>
			</Link>
			<Link to="/sendPreliminaryMatches">
			  <span>Send Preliminary Matches</span>
			</Link>
			<Link to="/logout">
			  <span>Logout</span>
			</Link>
		  </div>
		  <Link to="/">
			<img className="userImag" src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" />
		  </Link>
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
			<Link className="styledLink" to="/logout">
			  <span className="styledSpan">Logout</span>
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