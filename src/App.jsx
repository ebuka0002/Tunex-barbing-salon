import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import FloatingOrbs from './components/FloatingOrbs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-tunex-black text-white">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Noise Overlay for texture */}
      <div className="noise-overlay" />

      {/* Floating Gradient Orbs */}
      <FloatingOrbs />

      {/* Custom Cursor (desktop only) */}
      <CustomCursor />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <WhyChooseUs />
        <Booking />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
