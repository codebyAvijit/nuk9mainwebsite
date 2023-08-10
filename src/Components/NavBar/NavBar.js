import React, { useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleAboutUs = () => {
    navigate("/about");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            className="imglogo"
            src="assets/images/logo1.webp"
            alt="nuk9 Logo"
          />
          &nbsp;&nbsp;
          <span className="compname">
            NUK 9 Information Security Auditors LLP&nbsp;<sup>TM</sup>
          </span>
        </Link>
      </div>

      <nav>
        <ul className="menu">
          <li className="menu-item">
            <NavLink exact to="/" activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li
            className={`menu-item dropdown ${showDropdown ? "show" : ""}`}
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <NavLink to="" activeClassName="active">
              EXPLORE
            </NavLink>
            <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
              <li>
                <NavLink to="/systemaudit">System Audit</NavLink>
              </li>
              <li>
                <NavLink to="/riskassesment">Risk Assessment</NavLink>
              </li>
              {/* Add more links for other services */}
              <li>
                <NavLink to="/systeminfiltration">System Infiltration</NavLink>
              </li>
              <li>
                <NavLink to="/grcs">GRCs</NavLink>
              </li>
              <li>
                <NavLink to="/secucoahing">Security Coaching</NavLink>
              </li>
              <li>
                <NavLink to="/servicesroute">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <NavLink to="/servicesroute" activeClassName="active">
              SERVICES
            </NavLink>
          </li>
          {/* <li className="menu-item">
            <NavLink to="/portfolio" activeClassName="active">
              PORTFOLIO
            </NavLink>
          </li> */}
          <li className="menu-item">
            <NavLink
              onClick={handleAboutUs}
              to="/about"
              activeClassName="active"
            >
              ABOUT US
            </NavLink>
          </li>
          {/* <li className="menu-item">
            <NavLink to="/our-clientel" activeClassName="active">
              OUR CLIENTEL
            </NavLink>
          </li> */}
          <li className="menu-item">
            <NavLink to="/contact" activeClassName="active">
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
