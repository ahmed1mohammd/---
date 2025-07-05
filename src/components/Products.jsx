import React, { useState } from 'react';
import { ArrowLeft, Eye, Heart } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'جميع المنتجات' },
    { id: 'home-furniture', name: 'أثاث منزلي' },
    { id: 'office-furniture', name: 'أثاث مكتبي' },
    { id: 'air-conditioners', name: 'مكيفات هواء' }
  ];

  const products = [
    {
      id: 1,
      name: 'طقم صالون فاخر',
      category: 'home-furniture',
      price: '15,000',
      image: "/assets/images/Eoi9iKAisxW6.jpg",
      description: 'طقم صالون عصري بتصميم أنيق ومواد عالية الجودة'
    },
    {
      id: 2,
      name: 'مكتب رئيس أنيق',
      category: 'office-furniture',
      price: '8,500',
      image: "/assets/images/5orAehTZDESL.webp",
      description: 'مكتب رئيس بتصميم حديث مع خزائن جانبية'
    },
    {
      id: 3,
      name: 'مكيف سبليت LG',
      category: 'air-conditioners',
      price: '2,800',
      image: "/assets/images/mkzA9UcxUyM0.jpg",
      description: 'مكيف هواء عالي الكفاءة مع تقنية الإنفيرتر'
    },
    {
      id: 4,
      name: 'غرفة نوم كاملة',
      category: 'home-furniture',
      price: '12,000',
      image: "/assets/images/7vZDGNzx3tiS.jpg",
      description: 'غرفة نوم كاملة بتصميم عصري وألوان هادئة'
    },
    {
      id: 5,
      name: 'كرسي مكتب مريح',
      category: 'office-furniture',
      price: '1,200',
      image: "/assets/images/SI4el2FwFutE.webp",
      description: 'كرسي مكتب بتصميم أرغونومي للراحة القصوى'
    },
    {
      id: 6,
      name: 'مكيف شباك موفر',
      category: 'air-conditioners',
      price: '1,500',
      image: "/assets/images/EpVYHBMNDlhz.jpg",
      description: 'مكيف شباك بكفاءة عالية في استهلاك الطاقة'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            <span className="text-primary">منتجاتنا</span> المميزة
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            اكتشف مجموعتنا الواسعة من الأثاث المنزلي والمكتبي ومكيفات الهواء عالية الجودة
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8 lg:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold transition-all duration-300 text-sm lg:text-base ${
                activeCategory === category.id
                  ? 'bg-primary text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="bg-primary text-black p-3 rounded-full hover:bg-yellow-400 transition-colors">
                    <Eye size={20} />
                  </button>
                  <button className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors">
                    <Heart size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <a 
                    href="https://wa.me/201023973147"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    تواصل عبر واتساب
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

