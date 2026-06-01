import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const CustomCursor = () => {
  const { x, y } = useMousePosition();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-tunex-gold/50 pointer-events-none z-[99] mix-blend-difference hidden md:block"
        animate={{ x: x - 8, y: y - 8 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-tunex-gold/30 pointer-events-none z-[99] hidden md:block"
        animate={{ x: x - 20, y: y - 20 }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.8 }}
      />
    </>
  );
};

export default CustomCursor;
