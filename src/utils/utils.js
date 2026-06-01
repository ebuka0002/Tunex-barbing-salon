export const cn = (...classes) => classes.filter(Boolean).join(' ');

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(price);
};

export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const whatsappLink = (message = '') => {
  const phone = '2348123456789'; // Replace with actual number
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};
