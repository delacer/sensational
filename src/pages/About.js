import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <main className="about-container">
      {/* Page Header */}
      <header className="about-header">
        <h1 className="about-title">Get to Know Us</h1>
        <p className="about-subtitle">
          Behind every cake and celebration is a story — ours begins with passion, purpose, and a sprinkle of magic.
        </p>
      </header>

      {/* Founder Section */}
      <section className="about-intro">
        <figure className="about-image">
          <img
            src="/assets/owner.png"
            alt="Founder of Sensational Goodies"
            className="founder-photo"
          />
          <figcaption className="owner-caption">Founder & Creative Director</figcaption>
        </figure>

        <div className="about-text">
          <h2>Meet the Heart Behind the Brand</h2>
          <p>
            Sensational Goodies was born from a love of celebration, elegance, and meaningful moments.
            Our founder — whose warmth and creativity shine through every detail — built this brand to reflect
            not just beauty, but legacy. With a background in styling, baking, and heartfelt service,
            she brings joy to every event and every bite.
          </p>
          <blockquote className="founder-quote">
            “I believe every celebration should feel like a masterpiece — crafted with love, styled with intention, and remembered forever.”
          </blockquote>
        </div>
      </section>

      {/* Brand Journey Timeline */}
      <section className="about-journey">
        <h2>Our Journey</h2>
        <div className="journey-timeline">
          <div className="timeline-item">
            <h3 aria-label="Spark">🎉 The Spark</h3>
            <p>It started with a single cake — a birthday surprise that turned into a calling.</p>
          </div>
          <div className="timeline-item">
            <h3 aria-label="Craft">🎂 The Craft</h3>
            <p>From baking to styling, we mastered the art of making moments unforgettable.</p>
          </div>
          <div className="timeline-item">
            <h3 aria-label="Legacy">💖 The Legacy</h3>
            <p>Today, Sensational Goodies is a name synonymous with elegance, emotion, and excellence.</p>
          </div>
        </div>
      </section>

      {/* Values / Philosophy */}
      <section className="about-values">
        <h2>Our Philosophy</h2>
        <div className="values-grid">
          <div className="value-card">
            <span className="value-icon" role="img" aria-label="Cake">🎂</span>
            <h3>Every Cake Tells a Story</h3>
            <p>We design cakes that speak to your memories, milestones, and moments worth celebrating.</p>
          </div>
          <div className="value-card">
            <span className="value-icon" role="img" aria-label="Sparkle">✨</span>
            <h3>Elegance in Every Detail</h3>
            <p>From florals to frosting, we believe beauty belongs in every corner of your celebration.</p>
          </div>
          <div className="value-card">
            <span className="value-icon" role="img" aria-label="Magic">💫</span>
            <h3>Clients Become Family</h3>
            <p>We treat every client with warmth, care, and the joy of shared celebration.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
