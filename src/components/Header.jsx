import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white relative z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-black py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+966 50 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@alharthi.com</span>
            </div>
          </div>
          <div className="text-sm font-semibold text-center sm:text-right">
            مرحباً بكم في الحارثي للأثاث والتكييف
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold">
              <span className="text-primary">الحارثي</span>
              <span className="text-white mr-2 hidden sm:inline">للأثاث والتكييف</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#home" className="hover:text-primary transition-colors duration-300">الرئيسية</a>
            <a href="#about" className="hover:text-primary transition-colors duration-300">من نحن</a>
            <a href="#products" className="hover:text-primary transition-colors duration-300">المنتجات</a>
            <a href="#contact" className="hover:text-primary transition-colors duration-300">اتصل بنا</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-primary transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-primary transition-colors duration-300" onClick={toggleMenu}>الرئيسية</a>
              <a href="#about" className="hover:text-primary transition-colors duration-300" onClick={toggleMenu}>من نحن</a>
              <a href="#products" className="hover:text-primary transition-colors duration-300" onClick={toggleMenu}>المنتجات</a>
              <a href="#contact" className="hover:text-primary transition-colors duration-300" onClick={toggleMenu}>اتصل بنا</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

