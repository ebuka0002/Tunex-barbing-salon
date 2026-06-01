import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '../utils/constants';

const Gallery = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(GALLERY_IMAGES.map((img) => img.category))];

  const filteredImages =
    activeFilter === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-poppins text-tunex-gold text-xs tracking-[0.3em] uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-4">
            STYLE <span className="text-gold-gradient">GALLERY</span>
          </h2>
          <p className="font-poppins text-white/50 text-base max-w-xl mx-auto">
            Real transformations. Real confidence. See the Tunex difference.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full font-poppins text-sm tracking-wider uppercase transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-tunex-gold text-tunex-black'
                  : 'bg-tunex-dark text-white/60 hover:text-white border border-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative group break-inside-avoid rounded-xl overflow-hidden cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                layout
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-auto">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-tunex-black/80 via-tunex-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-poppins text-[10px] text-tunex-gold tracking-wider uppercase mb-1">
                      {image.category}
                    </span>
                    <h4 className="font-bebas text-xl text-white tracking-wider">
                      {image.alt}
                    </h4>
                  </div>

                  {/* Zoom Icon */}
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-tunex-gold/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ZoomIn size={18} className="text-tunex-gold" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] bg-tunex-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-tunex-dark flex items-center justify-center text-white hover:bg-tunex-gold/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              className="max-w-4xl max-h-[85vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-xl"
              />
              <div className="mt-4 text-center">
                <span className="font-poppins text-tunex-gold text-xs tracking-wider uppercase">
                  {selectedImage.category}
                </span>
                <h4 className="font-bebas text-2xl text-white tracking-wider mt-1">
                  {selectedImage.alt}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
