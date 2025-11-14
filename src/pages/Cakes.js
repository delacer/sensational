import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet"; // SEO meta tags
import "../styles/Cakes.css";

const cakeData = [
  {
    title: "Baby Shower Cakes",
    image: "/assets/babyshower.png",
    alt: "Baby Shower Cake",
    description:
      "Welcome new beginnings with a cake that’s soft, sweet, and full of charm. Whether it’s a gender reveal or a celebration of motherhood, we create delicate designs that honor the moment with warmth and beauty.",
    cta: "→ Book your baby shower cake and let joy rise in every layer",
  },
  {
    title: "Birthday Cakes",
    image: "/assets/birth-mic.png",
    alt: "Birthday Cake",
    description:
      "Celebrate life with a cake that’s as unique as you are. Whether it’s playful, elegant, or themed to your passions—sports, art, entertainment—we design custom birthday cakes that turn your vision into edible luxury.",
    cta: "→ Book your birthday cake and let your celebration taste extraordinary",
  },
  {
    title: "Wedding Cakes",
    image: "/assets/wedding.png",
    alt: "Wedding Cake",
    description:
      "Your love story deserves a masterpiece. Our wedding cakes are crafted with sophistication, tailored to your theme, and finished with exquisite detail.",
    cta: "→ Reserve your wedding cake and let elegance be the final touch to your vows",
  },
  {
    title: "Graduation Cakes",
    image: "/assets/custom.jpg",
    alt: "Graduation Cake",
    description:
      "Celebrate achievement with bold, inspiring designs. Our graduation cakes reflect pride, ambition, and the joy of new beginnings—customized to your field, colors, or future dreams.",
    cta: "→ Book your graduation cake and honor success with style",
  },
  {
    title: "Appreciation & Giving Cakes",
    image: "/assets/appreciation.png",
    alt: "Appreciation Cake",
    description:
      "Whether you're thanking someone special or hosting a community event, we design cakes that express gratitude with elegance.",
    cta: "→ Book your appreciation cake and let kindness be beautifully served",
  },
  {
    title: "Mother’s Day Cakes",
    image: "/assets/mothers-day.png",
    alt: "Mother’s Day Cake",
    description:
      "Honor the queens in your life with cakes that are graceful, heartfelt, and luxurious. From floral elegance to personalized messages, we create designs that celebrate motherhood with warmth and sophistication.",
    cta: "→ Book your Mother’s Day cake and let love bloom in every detail",
  },
  {
    title: "Anniversary Cakes",
    image: "/assets/ann.png",
    alt: "Anniversary Cake",
    description:
      "Mark your milestones with a cake that tells your story. Romantic, refined, and personalized to your journey—we craft anniversary cakes that celebrate love, commitment, and cherished memories.",
    cta: "→ Order your anniversary cake and relive the magic in every bite",
  },
  {
    title: "Engagement Cakes",
    image: "/assets/engaged.png",
    alt: "Engagement Cake",
    description:
      "Capture the excitement of your promise with a cake that’s romantic and radiant. We design engagement cakes that reflect your love, your style, and the anticipation of what’s to come.",
    cta: "→ Reserve your engagement cake and let the celebration begin beautifully",
  },
  {
    title: "Lobola Cakes",
    image: "/assets/lobola.png",
    alt: "Lobola Cake",
    description:
      "From spontaneous gatherings to planned parties, we create cakes that spark joy and connection. Fun, stylish, and personalized to your vibe.",
    cta: "→ Order your celebration cake and make memories sweeter together",
  },
];

const featuredCakes = cakeData.slice(0, 4);

const Cakes = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const toggleDescription = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <main className="cakes">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Sensational Goodies | Custom Cakes in Cape Town – Wedding, Birthday & Celebration Cakes</title>
        <meta
          name="description"
          content="Order luxury cakes in Cape Town from Sensational Goodies. Wedding cakes, birthday cakes, baby shower cakes, and custom designs crafted with elegance and flavor."
        />
        <meta
          name="keywords"
          content="Sensational Goodies, Cape Town bakery, Delft bakery,sensational, goodies, custom cakes, wedding cakes, birthday cakes, baby shower cakes"
        />
        <link rel="canonical" href="https://sensationalgoodie.netlify.app/pages/Cakes" />

        {/* Open Graph */}
        <meta property="og:title" content="Sensational Goodies | Custom Cakes in Cape Town" />
        <meta property="og:description" content="Luxury cakes handcrafted for weddings, birthdays, baby showers, and more in Cape Town." />
        <meta property="og:image" content="/assets/wedding.png" />
        <meta property="og:url" content="https://sensationalgoodie.netlify.app/pages/Cakes" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sensational Goodies | Custom Cakes in Cape Town" />
        <meta name="twitter:description" content="Luxury cakes handcrafted for weddings, birthdays, baby showers, and more in Cape Town." />
        <meta name="twitter:image" content="/assets/wedding.png" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Bakery",
            "name": "Sensational Goodies",
            "url": "https://sensationalgoodie.netlify.app/pages/Cakes",
            "image": "https://sensationalgoodie.netlify.app/assets/wedding.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "50 Wheeltree Way, Delft",
              "addressLocality": "Cape Town",
              "addressRegion": "Western Cape",
              "postalCode": "7460",
              "addressCountry": "ZA"
            },
            "telephone": "+27-61-329-2763",
            "description": "Luxury cakes handcrafted for weddings, birthdays, baby showers, and more in Cape Town.",
            "makesOffer": [
              ${cakeData.map(cake => `{
                "@type": "Product",
                "name": "${cake.title}",
                "image": "https://sensationalgoodie.netlify.app${cake.image}",
                "description": "${cake.description}",
                "brand": {
                  "@type": "Brand",
                  "name": "Sensational Goodies"
                }
              }`).join(",")}
            ]
          }
          `}
        </script>
      </Helmet>
      <header className="cakes-header">
        <h1>🍰 Signature Cakes for Every Occasion</h1>
        <p>
          From elegant weddings to joyful birthdays, our cakes are handcrafted to elevate every celebration.
        </p>
      </header>

      {/* Carousel */}
      <section className="cake-carousel" aria-label="Featured Cakes">
        {featuredCakes.map((cake, index) => (
          <div key={index} className="carousel-item" onClick={() => setLightboxIndex(index)}>
            <img src={cake.image} alt={cake.alt} loading="lazy" />
            <h3>{cake.title}</h3>
          </div>
        ))}
      </section>

      {/* Design Prompt Section */}
      <section className="cake-design-prompt">
        <div className="design-content">
          <h2>Design Your Dream Cake</h2>
          <p>
            Have a vision in mind? Whether it’s a theme, color palette, or a unique idea,
            we’d love to bring it to life. Upload your inspiration or reach out to start crafting your custom creation.
          </p>
          <a href="/pages/Contact" className="cta-button">Start Your Custom Order →</a>
        </div>
        <div className="design-image">
          <img src="/assets/ann.png" alt="Custom cake design inspiration" loading="lazy" />
        </div>
      </section>

      {/* Cake Grid */}
      <section className="cake-grid" aria-label="All Cakes">
        {cakeData.map((cake, index) => (
          <div key={index} className="cake-card">
            <div className="cake-image" onClick={() => setLightboxIndex(index)}>
              <img src={cake.image} alt={cake.alt} loading="lazy" />
            </div>
            <div className="cake-content">
              <h2>{cake.title}</h2>
              <button
                className="toggle-button"
                aria-expanded={visibleIndex === index}
                aria-controls={`cake-desc-${index}`}
                onClick={() => toggleDescription(index)}
              >
                {visibleIndex === index ? "Hide Details" : "Show Details"}
              </button>
              <div
                id={`cake-desc-${index}`}
                className={`cake-description ${visibleIndex === index ? "visible" : ""}`}
              >
                <p>{cake.description}</p>
                <a href="/pages/Contact" className="cake-cta">{cake.cta}</a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightboxIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={cakeData[lightboxIndex].image} alt={cakeData[lightboxIndex].alt} />
            <h2>{cakeData[lightboxIndex].title}</h2>
            <p>{cakeData[lightboxIndex].description}</p>
            <a href="/pages/Contact" className="cake-cta">{cakeData[lightboxIndex].cta}</a>
            <button className="close-lightbox" onClick={() => setLightboxIndex(null)}>✕ Close</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cakes;
