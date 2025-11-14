import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp
} from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import '../styles/Footer.css';

const getSeasonalTheme = () => {
  const month = new Date().getMonth();
  if (month === 1) return 'valentine';
  if (month === 8) return 'heritage';
  if (month === 11) return 'christmas';
  if ([2, 3, 4].includes(month)) return 'spring';
  return 'default';
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    setTheme(getSeasonalTheme());
  }, []);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(process.env.REACT_APP_FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setError('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`footer ${theme}`}>
      {/* SEO Schema */}
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sensational Goodies",
            "brand": {
              "@type": "Brand",
              "name": "Sensational Goodies"
            },
            "image": "https://sensationalgoodie.netlify.app/assets/logo.png",
            "url": "https://sensationalgoodie.netlify.app/",
            "telephone": "+27-61-329-2763",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "50 Wheeltree Way, Delft",
              "addressLocality": "Cape Town",
              "addressRegion": "Western Cape",
              "postalCode": "7460",
              "addressCountry": "ZA"
            },
            "sameAs": [
              "https://www.facebook.com/peey.matsika",
              "https://wa.me/27613292763",
              "mailto:stevepeey@gmail.com"
            ]
          }
          `}
        </script>
      </Helmet>

      <div className="footer-top">
        <div className="footer-section footer-brand">
          <h2>Sensational Goodies Bakery Cape Town</h2>
          <p>
            Luxury baked goods and elegant event styling — crafted with love, legacy, and artistry.
          </p>
        </div>

        <div className="footer-section footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li><FaMapMarkerAlt /> 50 Wheeltree Way, Delft</li>
            <li><FaEnvelope /> <a href="mailto:stevepeey@gmail.com" aria-label="Email Sensational Goodies">stevepeey@gmail.com</a></li>
            <li><FaPhoneAlt /> <a href="tel:+27613292763" aria-label="Call Sensational Goodies">+27 61 329 2763</a></li>
          </ul>
        </div>

        <div className="footer-section footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/" aria-label="Go to Home">Home</Link></li>
            <li><Link to="/pages/Cakes" aria-label="Explore Cakes">Cakes</Link></li>
            <li><Link to="/pages/Events" aria-label="Explore Events">Events</Link></li>
            <li><Link to="/pages/About" aria-label="Learn About Us">About</Link></li>
            <li><Link to="/pages/Contact" aria-label="Contact Sensational Goodies">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-newsletter">
          <h4>Stay in the Loop</h4>
          <p>Subscribe for sweet updates and exclusive offers from Sensational Goodies.</p>
          <form onSubmit={handleNewsletterSubmit}>
            <div className="newsletter-input">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
                disabled={loading}
              />
              <button type="submit" disabled={loading}>
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {error && <p className="error-msg" role="alert">{error}</p>}
            {submitted && <p className="success-msg" role="status">✅ Thanks for subscribing!</p>}
          </form>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-social">
        <a href="https://www.facebook.com/peey.matsika" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://wa.me/27613292763" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="mailto:stevepeey@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sensational Goodies Bakery Cape Town. Crafted with love in South Africa.</p>
        <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
