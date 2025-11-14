import React, { useState } from "react";
import { Helmet } from "react-helmet"; // SEO meta tags
import "../styles/Home.css";

const Home = () => {
  const [reviews, setReviews] = useState([
    { name: "Thandi M.", text: "Sensational Goodies made my daughter’s birthday magical. The cake was stunning and delicious!", rating: 5 },
    { name: "Jason & Lerato", text: "Their styling transformed our wedding into a dream. Every detail was perfect.", rating: 5 },
  ]);

  const [newReview, setNewReview] = useState({ name: "", text: "", rating: 5 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.text.trim()) return;
    setReviews([...reviews, newReview]);
    setNewReview({ name: "", text: "", rating: 5 });
  };

  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < count ? "star filled" : "star"}>★</span>
    ));

  return (
    <main className="home">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Sensational Goodies | Luxury Cakes, Event Styling & Bakery in Cape Town</title>
        <meta
          name="description"
          content="Sensational Goodies bakery in Cape Town offers luxury cakes, event styling, and gift boxes. Handcrafted designs for weddings, birthdays, baby showers, and more."
        />
        <meta
          name="keywords"
          content="Sensational Goodies, Cape Town bakery, luxury cakes, wedding cakes, event styling, custom cakes,sensational, goodies"
        />
        <link rel="canonical" href="https://sensationalgoodie.netlify.app/" />

        {/* Open Graph */}
        <meta property="og:title" content="Sensational Goodies | Luxury Cakes & Event Styling in Cape Town" />
        <meta property="og:description" content="Discover Sensational Goodies — Cape Town’s luxury bakery for cakes, events, and gift boxes." />
        <meta property="og:image" content="/assets/birthday-bash.png" />
        <meta property="og:url" content="https://sensationalgoodie.netlify.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sensational Goodies | Luxury Cakes & Event Styling in Cape Town" />
        <meta name="twitter:description" content="Luxury cakes and event styling handcrafted in Cape Town." />
        <meta name="twitter:image" content="/assets/birthday-bash.png" />

        {/* Schema Markup */}
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
            "description": "Sensational Goodies bakery in Cape Town offers luxury cakes, event styling, and gift boxes.",
            "priceRange": "$$",
            "review": [
              {
                "@type": "Review",
                "author": "Thandi M.",
                "reviewBody": "Sensational Goodies made my daughter’s birthday magical. The cake was stunning and delicious!",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
              },
              {
                "@type": "Review",
                "author": "Jason & Lerato",
                "reviewBody": "Their styling transformed our wedding into a dream. Every detail was perfect.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
              }
            ]
          }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: 'url("/assets/birthday-bash.png")' }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Sensational Goodies — Luxury Cakes & Event Styling in Cape Town</h1>
          <p>Where every celebration becomes a masterpiece. From handcrafted cakes to elegant event styling, we craft experiences that reflect your story, values, and vision.</p>
          <div className="hero-buttons">
            <a href="/pages/Events" className="cta-button" aria-label="Explore Event Styling">Explore Event Styling →</a>
            <a href="/pages/Cakes" className="cta-button" aria-label="Explore Our Cakes">Explore Our Cakes →</a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro">
        <div className="intro-text">
          <h2>Why Choose Sensational Goodies?</h2>
          <p>We don’t just decorate—we design experiences. Our work is rooted in elegance, clarity, and legacy. Whether it’s a cake, a venue, or a moment, we make it unforgettable.</p>
          <ul>
            <li>✨ Elegant, personalized decor for every occasion</li>
            <li>🎂 Custom cakes that taste as good as they look</li>
            <li>💫 Styling that reflects legacy, love, and luxury</li>
          </ul>
          <a href="/pages/Contact" className="cta-button secondary">Start Your Journey →</a>
        </div>
        <div className="intro-image">
          <img src="/assets/hero.jpeg" alt="Sensational Goodies elegant cake slice in Cape Town" loading="lazy" />
        </div>
      </section>

      {/* Featured Services */}
      <section className="services" aria-label="Signature Offerings">
        <h2>Our Signature Offerings at Sensational Goodies</h2>
        <div className="service-cards">
          <div className="card">
            <img src="/assets/birth-mic.png" alt="Sensational Goodies custom birthday cake design in Cape Town" loading="lazy" />
            <h3>Custom Cake Design</h3>
            <p>Handcrafted cakes tailored to your theme, taste, and occasion.</p>
          </div>
          <div className="card">
            <img src="/assets/birthday-bash.png" alt="Sensational Goodies event styling services in Cape Town" loading="lazy" />
            <h3>Event Styling</h3>
            <p>From intimate gatherings to grand celebrations, we style with elegance and flair.</p>
          </div>
          <div className="card">
            <img src="/assets/appreciation.png" alt="Sensational Goodies luxury gift boxes in Cape Town" loading="lazy" />
            <h3>Luxury Gift Boxes</h3>
            <p>Curated treats and keepsakes that leave a lasting impression.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Client Love for Sensational Goodies</h2>
        <div className="testimonial-grid" aria-live="polite">
          {reviews.map((review, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-avatar">
                {review.name.split(" ").map(word => word[0]).join("")}
              </div>
              <p className="testimonial-quote">“{review.text}”</p>
              <div className="testimonial-stars">{renderStars(review.rating)}</div>
              <footer className="testimonial-author">— {review.name}</footer>
            </div>
          ))}
        </div>

        {/* Review Form */}
        <form className="review-form" onSubmit={handleSubmit}>
          <h3>Share Your Experience with Sensational Goodies</h3>
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Review"
            value={newReview.text}
            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
            required
          />
          <label>Rating:</label>
                    <select
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
          >
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>{r} Stars</option>
            ))}
          </select>
          <button type="submit">Submit Review</button>
        </form>
      </section>

      
    </main>
  );
};

export default Home;
