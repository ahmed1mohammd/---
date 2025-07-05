import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'المنتجات', href: '#products' },
    { name: 'اتصل بنا', href: '#contact' }
  ];

  const productCategories = [
    { name: 'أثاث منزلي', href: '#' },
    { name: 'أثاث مكتبي', href: '#' },
    { name: 'مكيفات سبليت', href: '#' },
    { name: 'مكيفات شباك', href: '#' },
    { name: 'اكسسوارات', href: '#' }
  ];

  const services = [
    { name: 'توصيل وتركيب', href: '#' },
    { name: 'صيانة', href: '#' },
    { name: 'ضمان', href: '#' },
    { name: 'تقسيط', href: '#' },
    { name: 'استشارات', href: '#' }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', name: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', name: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', name: 'Instagram' },
    { icon: <Youtube size={20} />, href: '#', name: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="text-xl lg:text-2xl font-bold">
                <span className="text-primary">الحارثي</span>
                <span className="text-white mr-2">للأثاث والتكييف</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              شركة رائدة في مجال الأثاث ومكيفات الهواء، نقدم أفضل المنتجات بأعلى معايير الجودة وأفضل الأسعار.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span className="text-gray-300">+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span className="text-gray-300">info@aldhahabi.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-gray-300">الرياض، حي الملك فهد</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">فئات المنتجات</h3>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">خدماتنا</h3>
            <ul className="space-y-3 mb-6">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">تابعنا</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-3 rounded-full hover:bg-primary hover:text-black transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              اشترك في <span className="text-primary">نشرتنا الإخبارية</span>
            </h3>
            <p className="text-gray-300 mb-6">
              احصل على آخر العروض والمنتجات الجديدة مباشرة في بريدك الإلكتروني
            </p>
            
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:border-primary focus:outline-none"
              />
              <button className="bg-primary text-black px-6 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                اشتراك
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} الحارثي للأثاث والتكييف. جميع الحقوق محفوظة. | 
              <a 
                href="https://wa.me/201023973147"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-yellow-400 transition-colors ml-1"
              >
                © CodeSage
              </a>
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                الشروط والأحكام
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                سياسة الإرجاع
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

