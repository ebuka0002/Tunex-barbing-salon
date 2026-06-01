import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  Award,
  ShieldCheck,
  Crown,
  Wallet,
  Clock,
  Heart,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../utils/constants';

const iconMap = {
  Award,
  ShieldCheck,
  Crown,
  Wallet,
  Clock,
  Heart,
};

const WhyChooseUs = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-poppins text-tunex-gold text-xs tracking-[0.3em] uppercase mb-4 block">
            Why Tunex
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-4">
            WHY <span className="text-gold-gradient">CHOOSE US</span>
          </h2>
          <p className="font-poppins text-white/50 text-base max-w-xl mx-auto">
            We go beyond the cut. Here is why gentlemen across Nigeria choose Tunex.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Award;
            return (
              <motion.div
                key={feature.id}
                className="group glass-card-hover rounded-2xl p-6 md:p-8 text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.23, 1, 0.32, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-tunex-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-tunex-gold/20 transition-colors duration-300"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <IconComponent size={28} className="text-tunex-gold" />
                </motion.div>

                {/* Title */}
                <h3 className="font-bebas text-xl tracking-wider text-white mb-3 group-hover:text-tunex-gold transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-poppins text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-tunex-gold/5 via-transparent to-tunex-gold/5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
