import React, { useEffect } from 'react';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Flashs from './components/Flashs';
import InstagramFeed from './components/InstagramFeed';
import SchedulingForm from './components/SchedulingForm';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FixedCTA from './components/FixedCTA';

function App() {
  return (
    <div className="app-container">
      <Toaster position="top-center" richColors theme="dark" />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero theme="dark" />
        <About />
        <Portfolio />
        <Flashs />
        <InstagramFeed />
        <Testimonials />
        <FAQ />
        <SchedulingForm />
      </main>

      <Footer />
      <FixedCTA />
    </div>
  );
}

export default App;
