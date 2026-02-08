import React, { Suspense } from 'react';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Flashs from './components/Flashs';
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const InstagramFeed = React.lazy(() => import('./components/InstagramFeed'));
import SchedulingForm from './components/SchedulingForm';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FixedCTA from './components/FixedCTA';
import Specialties from './components/Specialties';

function App() {
  return (
    <div className="app-container">
      <Toaster position="top-center" richColors theme="dark" />
      <Navbar />

      <main>
        <Hero theme="dark" />
        <About />
        <Specialties />
        <Suspense fallback={<div className="h-96 flex items-center justify-center text-white/20">Carregando Galeria...</div>}>
          <Portfolio />
        </Suspense>
        <Flashs />
        <Suspense fallback={<div className="h-40" />}>
          <InstagramFeed />
        </Suspense>
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
