import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from "@material-ui/icons/Menu";
import './Navbar.css';

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Add a state for the dropdown

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);
  return (
    <>
      <div className="nav" open={isOpen}>
        <h6 className="title">Company</h6>
        <div className="navMenu">
          <Link to="/home">
            <span>Home</span>
          </Link>
          <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <Link to="/applicant">
  <span className="styledSpan1">Ta Applicant</span>
</Link>
            {dropdownOpen && (
              <div className="dropdownMenu">
                <Link to="/submit-application">Submit Application</Link>
                <Link to="/check-status">Check Status</Link>
                <Link to="/your-data">Your Data</Link>
                <Link to="/notifications">Notifications</Link>
                <Link to="/logout">Logout</Link>
              </div>
            )}
          </div>
          <Link to="/">
            <span>Department Staff</span>
          </Link>
          <Link to="/">
            <span>Ta Committe</span>
          </Link>
          <Link to="/">
            <span>Instructor</span>
          </Link>
          <Link to="/">
            <span>Contact Us</span>
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
          <Link className="styledLink" to="/home">
            <span className="styledSpan">Home</span>
          </Link>
          <span className="span" />
          <Link className="styledLink" to="/applicant">
            <span className="styledSpan">Ta Applicant</span>
          </Link>
          <span className="span" />
          <Link className="styledLink" to="/">
            <span className="styledSpan">Department Staff</span>
          </Link>
          <span className="span" />
          <Link className="styledLink" to="/">
            <span className="styledSpan">Ta Committe</span>
          </Link>
          <span className="span" />
          <Link className="styledLink" to="/">
            <span className="styledSpan">Instructor</span>
          </Link>
          <span className="span" />
          <Link className="styledLink" to="/">
            <span className="styledSpan">Contact Us</span>
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

export default Header;