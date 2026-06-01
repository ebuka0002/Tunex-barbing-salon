import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../utils/constants';

const Testimonials = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <div className="section-padding max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-poppins text-tunex-gold text-xs tracking-[0.3em] uppercase mb-4 block">
            Client Love
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-4">
            WHAT THEY <span className="text-gold-gradient">SAY</span>
          </h2>
          <p className="font-poppins text-white/50 text-base max-w-xl mx-auto">
            Real stories from real gentlemen who trust Tunex with their look.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="glass-card rounded-2xl p-8 md:p-12"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Quote Icon */}
                  <Quote size={32} className="text-tunex-gold/30 mb-6" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-tunex-gold fill-tunex-gold"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="font-poppins text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-8 italic">
                    "{TESTIMONIALS[currentIndex].text}"
                  </p>

                  {/* Avatar & Info */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-tunex-gold/30">
                      <img
                        src={TESTIMONIALS[currentIndex].avatar}
                        alt={TESTIMONIALS[currentIndex].name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-bebas text-xl text-white tracking-wider">
                        {TESTIMONIALS[currentIndex].name}
                      </h4>
                      <p className="font-poppins text-tunex-gold/60 text-sm">
                        {TESTIMONIALS[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-tunex-gold/30 flex items-center justify-center text-tunex-gold hover:bg-tunex-gold/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-tunex-gold'
                      : 'bg-tunex-gold/30 hover:bg-tunex-gold/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-tunex-gold/30 flex items-center justify-center text-tunex-gold hover:bg-tunex-gold/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
