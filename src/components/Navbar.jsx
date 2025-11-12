import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when resizing back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="navbar-logo">
        <NavLink to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
          <span className="company-name">Sensational Goodies</span>
        </NavLink>
      </div>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      {/* Links */}
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" className={getLinkClass} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/pages/Cakes" className={getLinkClass} onClick={() => setMenuOpen(false)}>
            Cakes
          </NavLink>
        </li>
        <li>
          <NavLink to="/pages/Events" className={getLinkClass} onClick={() => setMenuOpen(false)}>
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/pages/About" className={getLinkClass} onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/pages/Contact" className={getLinkClass} onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
