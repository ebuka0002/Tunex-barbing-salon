import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, Star, Award, Users, Clock } from 'lucide-react';
import { STATS } from '../utils/constants';
import { whatsappLink, scrollToSection } from '../utils/utils';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const iconMap = {
    'Fresh Cuts': Users,
    'Years Experience': Award,
    'Happy Clients': Star,
    'Star Rating': Clock,
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tunex-black/70 via-tunex-black/50 to-tunex-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-tunex-black/80 via-transparent to-tunex-black/80" />
      </motion.div>

      {/* Floating Light Effects */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-tunex-gold/10 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-tunex-gold/10 blur-[80px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 section-padding text-center max-w-5xl mx-auto pt-24"
        style={{ opacity }}
      >
        {/* Logo */}
        <motion.div
          className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-6 rounded-full overflow-hidden border-2 border-tunex-gold/60 shadow-gold-lg"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <img
            src="/images/logo.png"
            alt="Tunex Barbing Salon"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Star size={14} className="text-tunex-gold fill-tunex-gold" />
          <span className="font-poppins text-xs text-tunex-gold tracking-wider uppercase">
            Nigeria's Premium Barbershop
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider leading-none">
            <span className="text-white">SHARP </span>
            <span className="text-gold-gradient">CUTS.</span>
          </h1>
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider leading-none mt-2">
            <span className="text-gold-gradient">PREMIUM </span>
            <span className="text-white">CONFIDENCE.</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          className="font-poppins text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Experience the art of premium grooming. Where precision meets luxury, 
          and every cut is a masterpiece crafted for the modern gentleman.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <motion.a
            href={whatsappLink('Hi Tunex, I would like to book an appointment.')}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn px-8 py-4 bg-tunex-gold text-tunex-black font-poppins font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-tunex-gold-light transition-colors shadow-gold-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Book Appointment
          </motion.a>
          <motion.button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 border border-tunex-gold/30 text-tunex-gold font-poppins font-medium text-sm tracking-wider uppercase rounded-full hover:bg-tunex-gold/10 transition-colors"
            whileHover={{ scale: 1.05, borderColor: 'rgba(212, 175, 55, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Styles
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          {STATS.map((stat, index) => {
            const IconComponent = iconMap[stat.label] || Star;
            return (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <IconComponent size={16} className="text-tunex-gold" />
                  <span className="font-bebas text-3xl md:text-4xl text-gold-gradient">
                    {stat.value}
                  </span>
                </div>
                <p className="font-poppins text-xs text-white/50 tracking-wider uppercase">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
        >
          <span className="font-poppins text-[10px] text-white/40 tracking-[0.3em] uppercase">
            Scroll
          </span>
          <ChevronDown size={20} className="text-tunex-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
