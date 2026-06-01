import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Calendar, Clock, User, Phone, MessageSquare, Send, AlertCircle } from 'lucide-react';
import { SERVICES } from '../utils/constants';
import { whatsappLink } from '../utils/utils';

const Booking = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi Tunex, I would like to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}\nMessage: ${formData.message}`;
    window.open(whatsappLink(message), '_blank');
  };

  const inputClasses = (field) =>
    `w-full bg-tunex-dark/50 border ${
      focusedField === field
        ? 'border-tunex-gold/50 shadow-gold'
        : 'border-white/10'
    } rounded-xl px-4 py-3 pl-12 font-poppins text-white text-sm placeholder-white/30 focus:outline-none transition-all duration-300`;

  return (
    <section id="booking" className="relative py-24 md:py-32 overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-poppins text-tunex-gold text-xs tracking-[0.3em] uppercase mb-4 block">
              Reserve Your Spot
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-4 leading-tight">
              BOOK YOUR <span className="text-gold-gradient">FRESH CUT</span>
              <br />
              TODAY
            </h2>
            <p className="font-poppins text-white/50 text-base leading-relaxed mb-8">
              Do not wait for the perfect moment — create it. Fill out the form and we will 
              confirm your appointment within minutes via WhatsApp.
            </p>

            {/* Urgency Banner */}
            <motion.div
              className="glass-card rounded-xl p-5 mb-8 border-l-4 border-tunex-gold"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-start gap-3">
                <AlertCircle size={20} className="text-tunex-gold mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bebas text-lg text-tunex-gold tracking-wider mb-1">
                    Limited Slots Available Daily
                  </h4>
                  <p className="font-poppins text-white/50 text-sm">
                    We only accept 15 appointments per day to ensure every client gets our 
                    undivided attention. Book now to secure your spot.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '15', label: 'Daily Slots' },
                { value: '< 5min', label: 'Response Time' },
                { value: '100%', label: 'Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className="font-bebas text-2xl text-gold-gradient block">
                    {stat.value}
                  </span>
                  <span className="font-poppins text-[10px] text-white/50 tracking-wider uppercase">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-5">
              {/* Name */}
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses('name')}
                  required
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses('phone')}
                  required
                />
              </div>

              {/* Service */}
              <div className="relative">
                <Send
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('service')}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClasses('service')} appearance-none cursor-pointer`}
                  required
                >
                  <option value="" disabled>
                    Select a Service
                  </option>
                  {SERVICES.map((service) => (
                    <option key={service.id} value={service.name}>
                      {service.name} — ₦{service.price.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                  />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('date')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClasses('date')}
                    required
                  />
                </div>
                <div className="relative">
                  <Clock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                  />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('time')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClasses('time')}
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare
                  size={18}
                  className="absolute left-4 top-4 text-white/30"
                />
                <textarea
                  name="message"
                  placeholder="Any special requests? (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClasses('message')} min-h-[100px] resize-none pt-3`}
                  rows={3}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-4 bg-tunex-gold text-tunex-black font-poppins font-semibold text-sm tracking-wider uppercase rounded-xl hover:bg-tunex-gold-light transition-colors shadow-gold-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Book via WhatsApp
              </motion.button>

              <p className="font-poppins text-white/30 text-xs text-center">
                You will be redirected to WhatsApp to confirm your booking
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
