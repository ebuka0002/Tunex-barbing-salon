import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          className="fixed inset-0 z-[100] bg-tunex-black flex flex-col items-center justify-center"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Logo */}
            <motion.div
              className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-tunex-gold/50"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <img
                src="/images/logo.png"
                alt="Tunex Barbing Salon"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.h1
              className="font-bebas text-5xl md:text-7xl text-gold-gradient tracking-wider mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              TUNEX
            </motion.h1>
            <motion.p
              className="font-poppins text-tunex-gold/60 text-sm tracking-[0.3em] uppercase mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Barbing Salon
            </motion.p>
          </motion.div>

          <div className="w-64 h-[2px] bg-tunex-gray rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gold-gradient"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>

          <motion.p
            className="font-poppins text-tunex-gray-light text-xs mt-4 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
