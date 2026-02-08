import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Flashs from './components/Flashs';
import InstagramFeed from './components/InstagramFeed';
import SchedulingForm from './components/SchedulingForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FixedCTA from './components/FixedCTA';

function App() {
  useEffect(() => {
    // Add a simple fade-in for elements on scroll
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    // We'll apply this to sections or containers if needed
    // For now, React components handle their own animations with Framer Motion
  }, []);

  return (
    <div className="app-container">
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Portfolio />
        <Flashs />
        <InstagramFeed />
        <Testimonials />
        <SchedulingForm />
      </main>

      <Footer />
      <FixedCTA />
    </div>
  );
}

export default App;
