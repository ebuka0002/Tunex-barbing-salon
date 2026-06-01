import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../utils/utils';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={whatsappLink('Hi Tunex, I would like to book an appointment.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="text-white fill-white" />

      {/* Pulse Ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.5, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />

      {/* Tooltip */}
      <motion.div
        className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-tunex-dark border border-white/10 whitespace-nowrap pointer-events-none"
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
      >
        <span className="font-poppins text-xs text-white">Book on WhatsApp</span>
      </motion.div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
