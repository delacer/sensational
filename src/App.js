import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Cakes = lazy(() => import("./pages/Cakes"));
const Events = lazy(() => import("./pages/Events"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/Cakes" element={<Cakes />} />
            <Route path="/pages/Events" element={<Events />} />
            <Route path="/pages/About" element={<About />} />
            <Route path="/pages/Contact" element={<Contact />} />
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
