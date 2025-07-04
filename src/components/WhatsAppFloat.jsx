import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const phoneNumber = '966501234567'; // Replace with actual WhatsApp number
  const message = 'مرحباً، أود الاستفسار عن منتجاتكم';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float flex items-center justify-center"
      aria-label="تواصل عبر الواتساب"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppFloat;

