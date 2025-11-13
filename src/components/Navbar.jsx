import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBirthdayCake,
  FaCalendarAlt,
  FaInfoCircle,
  FaPhone,
  FaBars,
} from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="navigation-container">
        <div className="navigation-header">
          {/* Company name */}
          <h1 className="nav-title">Sensational Goodies</h1>

          {/* Nav list (inline on desktop, dropdown on mobile) */}
          <ul className={`navigation-list ${menuOpen ? "open" : ""}`}>
            <li>
              <NavLink to="/" className={getLinkClass} onClick={handleLinkClick}>
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pages/Cakes"
                className={getLinkClass}
                onClick={handleLinkClick}
              >
                <FaBirthdayCake /> Cakes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pages/Events"
                className={getLinkClass}
                onClick={handleLinkClick}
              >
                <FaCalendarAlt /> Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pages/About"
                className={getLinkClass}
                onClick={handleLinkClick}
              >
                <FaInfoCircle /> About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pages/Contact"
                className={getLinkClass}
                onClick={handleLinkClick}
              >
                <FaPhone /> Contact
              </NavLink>
            </li>
          </ul>

          {/* Hamburger (mobile only) */}
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Spacer div to prevent content being hidden behind fixed navbar */}
      <div style={{ height: "70px" }}></div>
    </>
  );
};

export default Navbar;
