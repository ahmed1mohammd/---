import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'اتصل بنا',
      details: ['+966 50 123 4567', '+966 11 456 7890'],
      action: 'tel:+966501234567'
    },
    {
      icon: <Mail size={24} />,
      title: 'راسلنا',
      details: ['info@aldhahabi.com', 'sales@aldhahabi.com'],
      action: 'mailto:info@aldhahabi.com'
    },
    {
      icon: <MapPin size={24} />,
      title: 'زورنا',
      details: ['الرياض، حي الملك فهد', 'طريق الملك عبدالعزيز'],
      action: '#'
    },
    {
      icon: <Clock size={24} />,
      title: 'أوقات العمل',
      details: ['السبت - الخميس: 9 ص - 10 م', 'الجمعة: 2 م - 10 م'],
      action: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-primary">اتصل بنا</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نحن هنا لخدمتك! تواصل معنا للحصول على استشارة مجانية أو لأي استفسار
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="fade-in">
            <h3 className="text-3xl font-bold text-white mb-8">
              معلومات <span className="text-primary">التواصل</span>
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-xl hover-scale">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-black p-3 rounded-full flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300 mb-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <a
                href="tel:+966501234567"
                className="flex items-center gap-3 bg-primary text-black p-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors"
              >
                <Phone size={20} />
                اتصل الآن
              </a>
              <a
                href="https://wa.me/966501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-600 text-white p-4 rounded-xl font-bold hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={20} />
                واتساب
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">أرسل لنا رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">رقم الهاتف</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">الموضوع</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:border-primary focus:outline-none transition-colors"
                    required
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="furniture">استفسار عن الأثاث</option>
                    <option value="ac">استفسار عن المكيفات</option>
                    <option value="offer">طلب عرض سعر</option>
                    <option value="support">دعم فني</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">الرسالة</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="اكتب رسالتك هنا..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
              >
                إرسال الرسالة
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">موقعنا على الخريطة</h3>
            <div className="bg-gray-800 h-64 rounded-xl flex items-center justify-center">
              <p className="text-gray-400">خريطة تفاعلية - الرياض، حي الملك فهد</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

