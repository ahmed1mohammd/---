import React from 'react';
import { ArrowLeft, Star, Shield, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right fade-in">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-white">أثاث</span>
              <span className="text-primary block">فاخر</span>
              <span className="text-white">ومكيفات حديثة</span>
            </h1>
            
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              نقدم لكم أجود أنواع الأثاث المنزلي والمكتبي بالإضافة إلى أحدث مكيفات الهواء 
              بأفضل الأسعار وأعلى معايير الجودة
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
              <button className="bg-primary text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-400 transition-all duration-300 hover-scale flex items-center justify-center gap-2">
                تصفح المنتجات
                <ArrowLeft size={20} />
              </button>
              <button className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-primary hover:text-black transition-all duration-300">
                اتصل بنا الآن
              </button>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300">
                <div className="bg-primary p-2 rounded-full">
                  <Star className="text-black" size={20} />
                </div>
                <span>جودة عالية</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300">
                <div className="bg-primary p-2 rounded-full">
                  <Shield className="text-black" size={20} />
                </div>
                <span>ضمان شامل</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300">
                <div className="bg-primary p-2 rounded-full">
                  <Truck className="text-black" size={20} />
                </div>
                <span>توصيل مجاني</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/images/Eoi9iKAisxW6.jpg" 
                alt="أثاث فاخر" 
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-primary text-black p-4 rounded-full shadow-lg">
              <Star size={24} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 rounded-full shadow-lg">
              <Shield size={24} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

