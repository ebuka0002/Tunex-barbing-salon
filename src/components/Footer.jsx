import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ArrowUp, Instagram, MessageCircle, Heart } from 'lucide-react';
import { NAV_LINKS } from '../utils/constants';
import { scrollToSection } from '../utils/utils';

const Footer = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const handleNavClick = (href) => {
    scrollToSection(href);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-tunex-black border-t border-white/5 pt-16 pb-8">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-tunex-gold/50">
                  <img
                    src="/images/logo-white.png"
                    alt="Tunex Barbing Salon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bebas text-2xl tracking-wider text-white leading-none">
                    TUNEX
                  </h3>
                  <p className="font-poppins text-[10px] text-tunex-gold/60 tracking-[0.2em] uppercase">
                    Barbing Salon
                  </p>
                </div>
              </div>
              <p className="font-poppins text-white/40 text-sm leading-relaxed">
                Nigeria's premier luxury barbershop. Where precision meets artistry, 
                and every gentleman leaves feeling unstoppable.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bebas text-lg text-white tracking-wider mb-6">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {NAV_LINKS.map((link) => (
                  <motion.button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="font-poppins text-sm text-white/40 hover:text-tunex-gold transition-colors text-left"
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Social & Contact */}
            <div>
              <h4 className="font-bebas text-lg text-white tracking-wider mb-6">
                Connect
              </h4>
              <div className="space-y-3 mb-6">
                <p className="font-poppins text-sm text-white/40">
                  42 Admiralty Way, Lekki Phase 1
                </p>
                <p className="font-poppins text-sm text-white/40">
                  Lagos, Nigeria
                </p>
                <p className="font-poppins text-sm text-white/40">
                  +234 812 345 6789
                </p>
              </div>
              <div className="flex gap-3">
                {[
                  {
                    icon: Instagram,
                    href: 'https://instagram.com/tunexbarbing',
                    label: 'Instagram',
                  },
                  {
                    icon: MessageCircle,
                    href: 'https://tiktok.com/@tunexbarbing',
                    label: 'TikTok',
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-tunex-dark flex items-center justify-center text-white/40 hover:text-tunex-gold hover:bg-tunex-gold/10 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-poppins text-xs text-white/30 flex items-center gap-1">
              Made with <Heart size={12} className="text-tunex-gold fill-tunex-gold" /> by Tunex Barbing Salon
            </p>
            <p className="font-poppins text-xs text-white/30">
              &copy; {new Date().getFullYear()} Tunex Barbing Salon. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-tunex-gold text-tunex-black flex items-center justify-center shadow-gold-lg z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
