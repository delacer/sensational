import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" className="logo-link">
          {/* Removed the <img>, kept the company name */}
          <span className="company-name">Sensational Goodies</span>
        </NavLink>
      </div>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li><NavLink to="/" className={getLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/pages/Cakes" className={getLinkClass} onClick={() => setMenuOpen(false)}>Cakes</NavLink></li>
        <li><NavLink to="/pages/Events" className={getLinkClass} onClick={() => setMenuOpen(false)}>Events</NavLink></li>
        <li><NavLink to="/pages/About" className={getLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink></li>
        <li><NavLink to="/pages/Contact" className={getLinkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
