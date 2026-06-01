import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import { BUSINESS_HOURS } from '../utils/constants';
import { whatsappLink } from '../utils/utils';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
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
            Get In Touch
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-4">
            VISIT <span className="text-gold-gradient">US</span>
          </h2>
          <p className="font-poppins text-white/50 text-base max-w-xl mx-auto">
            Ready for your transformation? Find us or reach out directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Address */}
            <motion.div
              className="glass-card-hover rounded-2xl p-6 flex items-start gap-4"
              whileHover={{ x: 4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-tunex-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-tunex-gold" />
              </div>
              <div>
                <h4 className="font-bebas text-lg text-white tracking-wider mb-1">
                  Location
                </h4>
                <p className="font-poppins text-white/50 text-sm leading-relaxed">
                  42 Admiralty Way, Lekki Phase 1<br />
                  Lagos, Nigeria
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.a
              href="tel:+2348123456789"
              className="glass-card-hover rounded-2xl p-6 flex items-start gap-4 block"
              whileHover={{ x: 4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-tunex-gold/10 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-tunex-gold" />
              </div>
              <div>
                <h4 className="font-bebas text-lg text-white tracking-wider mb-1">
                  Phone
                </h4>
                <p className="font-poppins text-white/50 text-sm">
                  +234 812 345 6789
                </p>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href={whatsappLink('Hi Tunex, I have a question about your services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-hover rounded-2xl p-6 flex items-start gap-4 block"
              whileHover={{ x: 4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-tunex-gold/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={20} className="text-tunex-gold" />
              </div>
              <div>
                <h4 className="font-bebas text-lg text-white tracking-wider mb-1">
                  WhatsApp
                </h4>
                <p className="font-poppins text-white/50 text-sm flex items-center gap-1">
                  Chat with us
                  <ExternalLink size={12} />
                </p>
              </div>
            </motion.a>

            {/* Business Hours */}
            <motion.div
              className="glass-card-hover rounded-2xl p-6"
              whileHover={{ x: 4 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-tunex-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-tunex-gold" />
                </div>
                <div>
                  <h4 className="font-bebas text-lg text-white tracking-wider mb-1">
                    Business Hours
                  </h4>
                </div>
              </div>
              <div className="space-y-3 pl-16">
                {BUSINESS_HOURS.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center font-poppins text-sm"
                  >
                    <span className="text-white/60">{item.day}</span>
                    <span className="text-tunex-gold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              {[
                {
                  icon: Instagram,
                  label: 'Instagram',
                  href: 'https://instagram.com/tunexbarbing',
                },
                {
                  icon: MessageCircle,
                  label: 'TikTok',
                  href: 'https://tiktok.com/@tunexbarbing',
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-card-hover flex items-center justify-center text-tunex-gold hover:bg-tunex-gold/20 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            className="relative rounded-2xl overflow-hidden h-[400px] lg:h-auto min-h-[400px]"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-tunex-dark rounded-2xl border border-white/10 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-tunex-gold/10 flex items-center justify-center mb-4">
                <MapPin size={28} className="text-tunex-gold" />
              </div>
              <h4 className="font-bebas text-2xl text-white tracking-wider mb-2">
                Find Us on Google Maps
              </h4>
              <p className="font-poppins text-white/50 text-sm text-center max-w-xs mb-6">
                42 Admiralty Way, Lekki Phase 1, Lagos, Nigeria
              </p>
              <motion.a
                href="https://maps.google.com/?q=42+Admiralty+Way+Lekki+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-tunex-gold text-tunex-black font-poppins font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-tunex-gold-light transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                Open in Maps
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
