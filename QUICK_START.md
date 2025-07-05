# البدء السريع - Quick Start Guide

دليل سريع لبدء العمل مع مشروع موقع أثاث AC.

## ⚡ البدء في 5 دقائق

### 1. استنساخ المشروع
```bash
git clone https://github.com/your-username/furniture-ac-website.git
cd furniture-ac-website
```

### 2. تثبيت التبعيات
```bash
npm install
```

### 3. تشغيل المشروع
```bash
npm run dev
```

### 4. فتح المتصفح
```
http://localhost:5173
```

## 🚀 النشر السريع

### GitHub Pages (مجاني)
1. ارفع الكود إلى GitHub
2. اذهب إلى Settings > Pages
3. اختر Source: "GitHub Actions"
4. الموقع سينشر تلقائياً

### Vercel (مجاني)
1. اذهب إلى [vercel.com](https://vercel.com)
2. اربط حساب GitHub
3. اختر المستودع
4. اضغط Deploy

## 📁 هيكل المشروع السريع

```
furniture-ac-website/
├── src/
│   ├── components/     # مكونات React
│   ├── App.jsx        # المكون الرئيسي
│   └── main.jsx       # نقطة الدخول
├── public/            # الملفات العامة
├── package.json       # التبعيات
└── vite.config.js     # إعدادات Vite
```

## 🛠️ الأوامر المهمة

```bash
# تشغيل التطوير
npm run dev

# بناء للإنتاج
npm run build

# معاينة البناء
npm run preview

# فحص الكود
npm run lint
```

## 🎨 التخصيص السريع

### تغيير الألوان
```css
/* في tailwind.config.js */
colors: {
  primary: {
    500: '#your-color-here'
  }
}
```

### تغيير النصوص
```jsx
// في المكونات المناسبة
<h1>نص جديد هنا</h1>
```

### إضافة صور
```bash
# ضع الصور في
public/assets/images/
```

## 📱 التوافق

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ الهواتف المحمولة

## 🔧 استكشاف الأخطاء

### المشكلة: الموقع لا يعمل
```bash
# تحقق من التبعيات
npm install

# امسح cache
npm run build --force
```

### المشكلة: الصور لا تظهر
- تأكد من وجود الصور في `public/assets/images/`
- تحقق من مسارات الصور في الكود

### المشكلة: أخطاء في البناء
```bash
# فحص الكود
npm run lint

# إصلاح الأخطاء تلقائياً
npm run lint --fix
```

## 📞 المساعدة

- 📖 [الوثائق الكاملة](README.md)
- 🚀 [دليل النشر](DEPLOYMENT.md)
- 🤝 [دليل المساهمة](CONTRIBUTING.md)
- 🐛 [الإبلاغ عن أخطاء](https://github.com/your-username/furniture-ac-website/issues)

## ⚡ نصائح سريعة

1. **استخدم VS Code** مع إضافات React و Tailwind
2. **افتح DevTools** لمراقبة الأداء
3. **اختبر على الأجهزة المحمولة** باستخدام DevTools
4. **احفظ التغييرات** وستظهر تلقائياً في المتصفح

---

**استمتع بالتطوير! 🎉** 