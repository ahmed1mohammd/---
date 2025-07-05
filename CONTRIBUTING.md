# دليل المساهمة - Contributing Guide

شكراً لاهتمامك بالمساهمة في مشروع موقع أثاث AC! هذا الدليل سيساعدك على البدء.

## 🚀 كيفية المساهمة

### 1. إعداد البيئة المحلية

```bash
# استنساخ المشروع
git clone https://github.com/your-username/furniture-ac-website.git
cd furniture-ac-website

# تثبيت التبعيات
npm install

# تشغيل المشروع
npm run dev
```

### 2. إنشاء فرع جديد

```bash
# التأكد من تحديث الفرع الرئيسي
git checkout main
git pull origin main

# إنشاء فرع جديد للميزة
git checkout -b feature/your-feature-name
# أو للتصحيح
git checkout -b fix/your-fix-name
```

### 3. تطوير الميزة

- اتبع معايير الكود الموجودة
- اكتب كود نظيف ومقروء
- أضف تعليقات عند الحاجة
- تأكد من عمل الكود على جميع المتصفحات

### 4. اختبار التغييرات

```bash
# فحص الكود
npm run lint

# بناء المشروع
npm run build

# معاينة البناء
npm run preview
```

### 5. رفع التغييرات

```bash
# إضافة التغييرات
git add .

# عمل commit
git commit -m "feat: إضافة ميزة جديدة"
# أو
git commit -m "fix: إصلاح مشكلة في الكود"

# رفع الفرع
git push origin feature/your-feature-name
```

### 6. فتح Pull Request

1. اذهب إلى صفحة المشروع على GitHub
2. اضغط على "New Pull Request"
3. اختر الفرع الذي أنشأته
4. املأ النموذج بالتفاصيل المطلوبة
5. اضغط "Create Pull Request"

## 📝 معايير الكود

### تسمية الملفات والمجلدات
- استخدم PascalCase للمكونات: `Header.jsx`, `ProductCard.jsx`
- استخدم camelCase للوظائف والمتغيرات: `getUserData`, `isLoading`
- استخدم kebab-case للمجلدات: `product-details`, `user-profile`

### تنسيق الكود
```jsx
// ✅ صحيح
const ProductCard = ({ product, onAddToCart }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleClick = () => {
    onAddToCart(product);
  };
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <button onClick={handleClick}>
        إضافة للسلة
      </button>
    </div>
  );
};

// ❌ خطأ
const productcard = ({product,onAddToCart}) => {
  const [isloading,setisloading] = useState(false);
  const handleclick = () => {onAddToCart(product);};
  return <div className="product-card"><img src={product.image} alt={product.name}/><h3>{product.name}</h3><button onClick={handleclick}>إضافة للسلة</button></div>;
};
```

### استخدام Tailwind CSS
```jsx
// ✅ صحيح - استخدام classes منظمة
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
  <h2 className="text-xl font-semibold text-gray-800">العنوان</h2>
  <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
    زر
  </button>
</div>

// ❌ خطأ - classes غير منظمة
<div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between hover:shadow-lg transition-shadow">
```

## 🐛 الإبلاغ عن الأخطاء

عند الإبلاغ عن خطأ، يرجى تضمين:

1. **وصف المشكلة**: ما الذي حدث؟
2. **خطوات التكرار**: كيف يمكن تكرار المشكلة؟
3. **النتيجة المتوقعة**: ما الذي كان يجب أن يحدث؟
4. **النتيجة الفعلية**: ما الذي حدث فعلاً؟
5. **معلومات النظام**: المتصفح، نظام التشغيل، إصدار Node.js
6. **لقطات شاشة**: إذا كانت مناسبة

## 💡 اقتراح ميزات جديدة

عند اقتراح ميزة جديدة، يرجى تضمين:

1. **وصف الميزة**: ما الذي تريد إضافته؟
2. **السبب**: لماذا هذه الميزة مفيدة؟
3. **التنفيذ المقترح**: كيف يمكن تنفيذها؟
4. **التأثير**: كيف ستؤثر على المستخدمين الحاليين؟

## 📋 أنواع Commits

استخدم البادئات التالية في رسائل commit:

- `feat:` - ميزة جديدة
- `fix:` - إصلاح خطأ
- `docs:` - تحديث الوثائق
- `style:` - تغييرات في التنسيق
- `refactor:` - إعادة هيكلة الكود
- `test:` - إضافة أو تحديث الاختبارات
- `chore:` - مهام الصيانة

## 🤝 مراجعة الكود

عند مراجعة Pull Request:

1. **كن محترماً**: اطرح أسئلة بدلاً من إصدار أحكام
2. **كن محدداً**: اشرح بالضبط ما تحتاج تغييره
3. **كن مفيداً**: اقترح حلول بدلاً من مجرد انتقاد
4. **كن سريعاً**: ارد في غضون يومين

## 📞 الحصول على المساعدة

إذا كنت بحاجة إلى مساعدة:

1. اقرأ الوثائق أولاً
2. ابحث في Issues المفتوحة
3. ابحث في Pull Requests المفتوحة
4. افتح issue جديد إذا لم تجد إجابة

## 🎉 الاعتراف

سيتم ذكر جميع المساهمين في ملف CONTRIBUTORS.md وفي README.md.

---

**شكراً لك على مساهمتك! 🌟** 