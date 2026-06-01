import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../utils/constants';
import { scrollToSection } from '../utils/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map((link) => link.href);
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-tunex-black/80 backdrop-blur-xl border-b border-tunex-gold/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="section-padding py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-tunex-gold/50 group-hover:border-tunex-gold transition-colors duration-300">
              <img
                src="/images/logo.png"
                alt="Tunex Barbing Salon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bebas text-2xl md:text-3xl tracking-wider text-white leading-none">
                TUNEX
              </h1>
              <p className="font-poppins text-[10px] text-tunex-gold/60 tracking-[0.25em] uppercase">
                Barbing Salon
              </p>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-poppins text-sm tracking-wider uppercase transition-colors relative ${
                  activeSection === link.href
                    ? 'text-tunex-gold'
                    : 'text-white/70 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
                {activeSection === link.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-tunex-gold"
                    layoutId="activeNav"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-tunex-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-tunex-black/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {/* Mobile Logo */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-tunex-gold mx-auto mb-3">
                  <img
                    src="/images/logo.png"
                    alt="Tunex Barbing Salon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="font-bebas text-3xl text-gold-gradient text-center tracking-wider">TUNEX</h2>
              </motion.div>

              {NAV_LINKS.map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-bebas text-4xl tracking-wider uppercase ${
                    activeSection === link.href
                      ? 'text-tunex-gold'
                      : 'text-white/70'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, color: '#D4AF37' }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
