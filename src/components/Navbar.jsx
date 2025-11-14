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
import { Helmet } from "react-helmet"; // for SEO meta tags
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* SEO Schema for Navigation */}
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": ["Home", "Cakes", "Events", "About", "Contact"],
            "url": [
              "https://sensationalgoodie.netlify.app/",
              "https://sensationalgoodie.netlify.app/cakes",
              "https://sensationalgoodie.netlify.app/events",
              "https://sensationalgoodie.netlify.app/about",
              "https://sensationalgoodie.netlify.app/contact"
            ]
          }
          `}
        </script>
      </Helmet>

      {/* Fixed Navbar */}
      <nav className="navigation-container" aria-label="Main Navigation">
        <div className="navigation-header">
          {/* Company name with keyword-rich branding */}
          <NavLink to="/" className="nav-title" onClick={handleLinkClick}>
            Sensational Goodies
          </NavLink>

          {/* Nav list */}
          <ul className={`navigation-list ${menuOpen ? "open" : ""}`}>
            <li>
              <NavLink to="/" className={getLinkClass} onClick={handleLinkClick} aria-current="page">
                <FaHome aria-hidden="true" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/pages/Cakes" className={getLinkClass} onClick={handleLinkClick}>
                <FaBirthdayCake aria-hidden="true" /> Cakes
              </NavLink>
            </li>
            <li>
              <NavLink to="/pages/Events" className={getLinkClass} onClick={handleLinkClick}>
                <FaCalendarAlt aria-hidden="true" /> Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/pages/About" className={getLinkClass} onClick={handleLinkClick}>
                <FaInfoCircle aria-hidden="true" /> About
              </NavLink>
            </li>
            <li>
              <NavLink to="/pages/Contact" className={getLinkClass} onClick={handleLinkClick}>
                <FaPhone aria-hidden="true" /> Contact
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
            <FaBars aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Spacer div */}
      <div style={{ height: "70px" }}></div>
    </>
  );
};

export default Navbar;
