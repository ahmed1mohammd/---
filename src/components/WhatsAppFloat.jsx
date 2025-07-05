import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const phoneNumber = '966501234567'; // Replace with actual WhatsApp number
  const message = 'مرحباً، أود الاستفسار عن منتجاتكم';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const telUrl = `tel:+${phoneNumber}`;

  return (
    <div style={{ position: 'fixed', left: 40, bottom: 40, zIndex: 100 }} className="flex flex-col items-center gap-3">
      <a
        href={telUrl}
        className="bg-primary text-black w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-yellow-400 transition-colors font-bold text-xs mb-1"
        style={{ boxShadow: '2px 2px 3px #999' }}
        aria-label="اتصل الآن"
      >
        اتصل الآن
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float flex items-center justify-center"
        aria-label="تواصل عبر الواتساب"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default WhatsAppFloat;

