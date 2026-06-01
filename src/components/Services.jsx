import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  Scissors,
  Sparkles,
  Palette,
  Crown,
  Baby,
  Gem,
  ArrowRight,
} from 'lucide-react';
import { SERVICES } from '../utils/constants';
import { whatsappLink } from '../utils/utils';

const iconMap = {
  Scissors,
  Sparkles,
  Palette,
  Crown,
  Baby,
  Gem,
};

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Section Header */}
      <div className="section-padding max-w-7xl mx-auto mb-16">
        <motion.div
          ref={ref}
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-poppins text-tunex-gold text-xs tracking-[0.3em] uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-4">
            PREMIUM <span className="text-gold-gradient">SERVICES</span>
          </h2>
          <p className="font-poppins text-white/50 text-base max-w-xl mx-auto">
            Every service is delivered with precision, care, and the luxury experience you deserve.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Scissors;
            return (
              <motion.div
                key={service.id}
                className={`group relative glass-card-hover rounded-2xl p-6 md:p-8 cursor-pointer ${
                  service.featured ? 'lg:col-span-1' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.23, 1, 0.32, 1],
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-tunex-gold/10 via-transparent to-tunex-gold/5" />
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <motion.div
                    className="absolute inset-0 border border-tunex-gold/0 group-hover:border-tunex-gold/30 rounded-2xl transition-colors duration-500"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-tunex-gold/10 flex items-center justify-center mb-6 group-hover:bg-tunex-gold/20 transition-colors duration-300"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <IconComponent size={24} className="text-tunex-gold" />
                  </motion.div>

                  {/* Service Name */}
                  <h3 className="font-bebas text-2xl tracking-wider text-white mb-2 group-hover:text-tunex-gold transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="font-poppins text-white/50 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="font-bebas text-3xl text-gold-gradient">
                        ₦{service.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-white/40">
                      <span className="font-poppins text-xs">{service.duration}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={whatsappLink(`Hi Tunex, I would like to book a ${service.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-poppins text-sm text-tunex-gold tracking-wider uppercase group-hover:gap-4 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    Book Now
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>

                {/* Featured Badge */}
                {service.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-tunex-gold/20 text-tunex-gold font-poppins text-[10px] tracking-wider uppercase">
                      Popular
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
