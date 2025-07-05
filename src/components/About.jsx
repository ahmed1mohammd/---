import React from 'react';
import { Users, Award, Clock, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users size={40} />,
      number: '5000+',
      label: 'عميل راضٍ'
    },
    {
      icon: <Award size={40} />,
      number: '15+',
      label: 'سنة خبرة'
    },
    {
      icon: <Clock size={40} />,
      number: '24/7',
      label: 'خدمة العملاء'
    },
    {
      icon: <MapPin size={40} />,
      number: '50+',
      label: 'مدينة نخدمها'
    }
  ];

  const features = [
    {
      title: 'معاينة مجانية',
      description: 'نقدم خدمة المعاينة المجانية في الموقع قبل الشراء لتسهيل اتخاذ القرار.'
    },
    {
      title: 'جودة عالية',
      description: 'نختار منتجاتنا بعناية فائقة لضمان أعلى معايير الجودة والمتانة'
    },
    {
      title: 'أسعار تنافسية',
      description: 'نقدم أفضل الأسعار في السوق مع إمكانية التقسيط المريح'
    },
    {
      title: 'خدمة ما بعد الشراء',
      description: 'فريق متخصص لخدمة العملاء والصيانة على مدار الساعة'
    },
    {
      title: 'توصيل وتركيب',
      description: 'خدمة توصيل مجانية وتركيب احترافي بواسطة فنيين مدربين'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            <span className="text-primary">من نحن</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
            شركة رائدة في مجال الأثاث ومكيفات الهواء، نسعى لتقديم أفضل المنتجات والخدمات لعملائنا الكرام
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-10 lg:mb-20">
          {/* Content */}
          <div className="fade-in">
            <h3 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              رحلتنا نحو <span className="text-primary">التميز</span>
            </h3>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              منذ تأسيسنا قبل أكثر من 15 عاماً، ونحن نعمل بشغف لتوفير أجود أنواع الأثاث المنزلي والمكتبي، 
              بالإضافة إلى أحدث مكيفات الهواء من أفضل الماركات العالمية. نؤمن بأن كل منزل ومكتب يستحق 
              أن يكون مريحاً وأنيقاً.
            </p>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              فريقنا المتخصص يعمل على مدار الساعة لضمان رضا عملائنا، من خلال تقديم استشارات مجانية، 
              وخدمات توصيل وتركيب احترافية، وضمان شامل على جميع منتجاتنا.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-xl">
                  <h4 className="text-primary font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/images/TaHLLJOUnWt9.jpg" 
                alt="معرضنا" 
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-10"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-900 p-8 rounded-2xl hover-scale">
              <div className="text-primary mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

