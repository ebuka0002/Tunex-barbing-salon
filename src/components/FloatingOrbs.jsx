import { motion } from 'framer-motion';

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="gradient-orb w-[500px] h-[500px] bg-tunex-gold"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="gradient-orb w-[400px] h-[400px] bg-tunex-gold-dark"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '60%', right: '5%' }}
      />
      <motion.div
        className="gradient-orb w-[300px] h-[300px] bg-tunex-gold-light"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ bottom: '20%', left: '40%' }}
      />
    </div>
  );
};

export default FloatingOrbs;
