export const NAV_LINKS = [
  { name: 'Home', href: 'hero' },
  { name: 'About', href: 'about' },
  { name: 'Services', href: 'services' },
  { name: 'Gallery', href: 'gallery' },
  { name: 'Testimonials', href: 'testimonials' },
  { name: 'Book Now', href: 'booking' },
  { name: 'Contact', href: 'contact' },
];

export const SERVICES = [
  {
    id: 1,
    name: 'Signature Haircut',
    description: 'Precision cutting with expert styling. Includes wash, cut, and finish with premium products.',
    price: 5000,
    duration: '45 min',
    icon: 'Scissors',
    featured: true,
  },
  {
    id: 2,
    name: 'Beard Sculpting',
    description: 'Artisan beard shaping and trimming. Hot towel treatment with premium beard oils.',
    price: 3500,
    duration: '30 min',
    icon: 'Sparkles',
    featured: true,
  },
  {
    id: 3,
    name: 'Hair Coloring',
    description: 'Premium color treatments including highlights, lowlights, and full color transformations.',
    price: 8000,
    duration: '90 min',
    icon: 'Palette',
    featured: false,
  },
  {
    id: 4,
    name: 'VIP Home Service',
    description: 'Exclusive at-home grooming experience. Our master barber comes to your location.',
    price: 15000,
    duration: '60 min',
    icon: 'Crown',
    featured: true,
  },
  {
    id: 5,
    name: 'Kids Haircut',
    description: 'Gentle and patient service for young gentlemen. Fun, comfortable experience guaranteed.',
    price: 3000,
    duration: '30 min',
    icon: 'Baby',
    featured: false,
  },
  {
    id: 6,
    name: 'Premium Package',
    description: 'The ultimate grooming experience. Haircut, beard sculpt, facial treatment, and hot towel shave.',
    price: 12000,
    duration: '120 min',
    icon: 'Gem',
    featured: true,
  },
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/images/haircur5.jpg',
    alt: 'Classic Fade Cut',
    category: 'Haircuts',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop',
    alt: 'Beard Sculpting',
    category: 'Beards',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=800&fit=crop',
    alt: 'Modern Undercut',
    category: 'Haircuts',
  },
  {
    id: 4,
    src: '/images/barber-shop.jpg',
    alt: 'Luxury Salon Interior',
    category: 'Interior',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=800&fit=crop',
    alt: 'Textured Crop',
    category: 'Haircuts',
  },
  {
    id: 6,
    src: '/images/haircut3.jpg',
    alt: 'Hot Towel Treatment',
    category: 'Services',
  },
  {
    id: 7,
    src: '/images/haircut1.jpg',
    alt: 'Buzz Cut with Design',
    category: 'Haircuts',
  },
  {
    id: 8,
    src: '/images/haircut2.jpg',
    alt: 'Full Beard Grooming',
    category: 'Beards',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Chinedu Okonkwo',
    role: 'Business Executive',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Absolutely the best barbershop experience I have ever had. The attention to detail is unmatched. I walk out feeling like a million bucks every single time.',
  },
  {
    id: 2,
    name: 'David Adeyemi',
    role: 'Fashion Designer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Tunex transformed my look completely. The VIP home service is a game-changer for my busy schedule. Professional, punctual, and perfectly executed.',
  },
  {
    id: 3,
    name: 'Michael Obi',
    role: 'Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'I have been coming here for 3 years now. The consistency in quality is remarkable. They understand exactly what I want before I even say it.',
  },
  {
    id: 4,
    name: 'Emmanuel Nwosu',
    role: 'Entrepreneur',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'The atmosphere alone is worth the visit. Dark, moody, luxurious. Then the cut itself is pure artistry. This is not just a haircut, it is an experience.',
  },
  {
    id: 5,
    name: 'Tunde Bakare',
    role: 'Music Artist',
    avatar: '/images/haircut4.jpg',
    rating: 5,
    text: 'As someone in the public eye, my appearance matters. Tunex never disappoints. The beard sculpting is next level. Five stars every time.',
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 1,
    title: 'Professional Barbers',
    description: 'Certified master barbers with 5+ years of experience in premium grooming.',
    icon: 'Award',
  },
  {
    id: 2,
    title: 'Sterilized Equipment',
    description: 'Hospital-grade sterilization for every tool. Your safety is our priority.',
    icon: 'ShieldCheck',
  },
  {
    id: 3,
    title: 'Luxury Experience',
    description: 'Premium ambiance with complimentary beverages and entertainment.',
    icon: 'Crown',
  },
  {
    id: 4,
    title: 'Affordable Pricing',
    description: 'Luxury quality at competitive prices. No hidden charges, ever.',
    icon: 'Wallet',
  },
  {
    id: 5,
    title: 'Fast Service',
    description: 'Punctual appointments with minimal wait times. We value your time.',
    icon: 'Clock',
  },
  {
    id: 6,
    title: 'Customer Satisfaction',
    description: '100% satisfaction guarantee. Not happy? We will make it right.',
    icon: 'Heart',
  },
];

export const BUSINESS_HOURS = [
  { day: 'Monday - Friday', hours: '9:00 AM - 9:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 8:00 PM' },
  { day: 'Sunday', hours: '12:00 PM - 6:00 PM' },
];

export const STATS = [
  { value: '1000+', label: 'Fresh Cuts' },
  { value: '5+', label: 'Years Experience' },
  { value: '500+', label: 'Happy Clients' },
  { value: '4.9', label: 'Star Rating' },
];
