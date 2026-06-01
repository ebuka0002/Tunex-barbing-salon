import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Quote } from 'lucide-react';

const About = () => {
  const sectionRef = useRef(null);
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const stats = [
    { value: '5+', label: 'Years of Excellence' },
    { value: '1000+', label: 'Fresh Cuts Delivered' },
    { value: '500+', label: 'Satisfied Clients' },
    { value: '50+', label: 'Awards Won' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden aspect-[4/5]"
                style={{ y: imageY }}
              >
                <img
                  src="images/barber-shop.jpg"
                  alt="Tunex Barbing Salon Interior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tunex-black/60 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Logo Frame */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl overflow-hidden border-2 border-tunex-gold/40 shadow-gold-lg bg-tunex-black p-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <img
                  src="/images/logo.png"
                  alt="Tunex Logo"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </motion.div>

              {/* Gold Accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-tunex-gold/40 rounded-tl-2xl" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Small Logo */}
            <motion.div
              className="w-12 h-12 rounded-full overflow-hidden border border-tunex-gold/30 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 }}
            >
              <img
                src="/images/logo.png"
                alt="Tunex"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.span
              className="font-poppins text-tunex-gold text-xs tracking-[0.3em] uppercase mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Our Story
            </motion.span>

            <motion.h2
              className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              CRAFTING <span className="text-gold-gradient">CONFIDENCE</span>
              <br />
              ONE CUT AT A TIME
            </motion.h2>

            <motion.p
              className="font-poppins text-white/60 text-base leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              Founded in 2019, Tunex Barbing Salon was born from a simple belief: every man 
              deserves to look and feel his absolute best. What started as a small barbershop 
              with a single chair has evolved into Nigeria's premier luxury grooming destination.
            </motion.p>

            <motion.p
              className="font-poppins text-white/60 text-base leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              Our master barbers combine traditional techniques with modern artistry, 
              delivering precision cuts that turn heads and build confidence. We do not just 
              cut hair — we craft identities, shape personalities, and elevate your presence 
              in every room you enter.
            </motion.p>

            {/* Quote */}
            <motion.div
              className="relative pl-6 border-l-2 border-tunex-gold/40 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <Quote size={20} className="text-tunex-gold/40 mb-2" />
              <p className="font-poppins text-white/80 italic text-lg leading-relaxed">
                "A great haircut is not just about looking good — it is about feeling 
                unstoppable. That is the Tunex promise."
              </p>
              <p className="font-poppins text-tunex-gold text-sm mt-3 tracking-wider">
                — Tunex Founder
              </p>
            </motion.div>

            {/* Achievement Counters */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card-hover rounded-xl p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <span className="font-bebas text-3xl text-gold-gradient block">
                    {stat.value}
                  </span>
                  <span className="font-poppins text-xs text-white/50 tracking-wider uppercase">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
