import React from 'react';
import { Clock, Tag, Gift, Percent } from 'lucide-react';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: 'عرض الصيف الكبير',
      discount: '50%',
      description: 'خصم يصل إلى 50% على جميع أطقم الصالونات الفاخرة',
      image: '/src/assets/images/SZRElxtglKp3.jpg',
      validUntil: '31 أغسطس 2025',
      type: 'limited'
    },
    {
      id: 2,
      title: 'باقة المكتب الذكي',
      discount: '30%',
      description: 'مكتب + كرسي + خزانة بسعر مخفض وتقسيط مريح',
      image: '/src/assets/images/vgXdiMgXd5US.jpg',
      validUntil: '15 سبتمبر 2025',
      type: 'bundle'
    },
    {
      id: 3,
      title: 'مكيفات بأسعار الجملة',
      discount: '25%',
      description: 'خصم خاص على مكيفات الهواء مع ضمان 5 سنوات',
      image: '/src/assets/images/V2rFWBKrvsmr.jpg',
      validUntil: '30 سبتمبر 2025',
      type: 'seasonal'
    }
  ];

  const promotions = [
    {
      icon: <Gift size={24} />,
      title: 'توصيل مجاني',
      description: 'توصيل وتركيب مجاني لجميع الطلبات'
    },
    {
      icon: <Percent size={24} />,
      title: 'تقسيط بدون فوائد',
      description: 'إمكانية التقسيط حتى 24 شهر بدون فوائد'
    },
    {
      icon: <Tag size={24} />,
      title: 'ضمان شامل',
      description: 'ضمان يصل إلى 5 سنوات على جميع المنتجات'
    }
  ];

  return (
    <section id="offers" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-primary">العروض</span> الحصرية
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            استفد من عروضنا المميزة والخصومات الحصرية على أفضل المنتجات
          </p>
        </div>

        {/* Main Offers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale group relative"
            >
              {/* Discount Badge */}
              <div className="absolute top-4 right-4 bg-primary text-black px-4 py-2 rounded-full font-bold text-lg z-10">
                خصم {offer.discount}
              </div>

              <div className="relative overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{offer.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{offer.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-primary">
                    <Clock size={16} />
                    <span className="text-sm">ينتهي في {offer.validUntil}</span>
                  </div>
                </div>

                <button className="w-full bg-primary text-black py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                  احصل على العرض
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Promotions */}
        <div className="bg-black rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            <span className="text-primary">مزايا</span> إضافية
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {promo.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{promo.title}</h4>
                <p className="text-gray-300">{promo.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary to-yellow-400 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-black mb-4">
            لا تفوت الفرصة!
          </h3>
          <p className="text-black text-lg mb-6">
            اتصل بنا الآن للحصول على استشارة مجانية وعرض سعر خاص
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors">
              اتصل الآن: 966 50 123 4567+
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-primary transition-colors">
              احجز موعد زيارة
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;

