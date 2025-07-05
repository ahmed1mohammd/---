# إرشادات النشر - Deployment Guide

هذا الدليل يوضح كيفية نشر موقع أثاث AC على منصات مختلفة.

## 🚀 النشر على GitHub Pages

### الطريقة الأولى: النشر التلقائي (مُوصى به)

1. **إعداد GitHub Actions**
   - المشروع يحتوي على ملف `.github/workflows/deploy.yml`
   - عند رفع الكود إلى الفرع `main`، سيتم النشر تلقائياً

2. **تفعيل GitHub Pages**
   - اذهب إلى إعدادات المستودع (Settings)
   - انتقل إلى Pages
   - اختر Source: "GitHub Actions"

3. **الوصول للموقع**
   - سيكون الموقع متاح على: `https://your-username.github.io/furniture-ac-website`

### الطريقة الثانية: النشر اليدوي

```bash
# بناء المشروع
npm run build

# إضافة مجلد dist
git add dist -f

# عمل commit
git commit -m "Deploy to GitHub Pages"

# رفع إلى فرع gh-pages
git subtree push --prefix dist origin gh-pages
```

## 🌐 النشر على Vercel

### الطريقة الأولى: ربط GitHub (مُوصى به)

1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل دخول باستخدام GitHub
3. اضغط "New Project"
4. اختر المستودع `furniture-ac-website`
5. Vercel سيكتشف الإعدادات تلقائياً
6. اضغط "Deploy"

### الطريقة الثانية: رفع يدوي

```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# النشر
vercel

# أو للنشر في الإنتاج
vercel --prod
```

## 🎯 النشر على Netlify

### الطريقة الأولى: ربط GitHub

1. اذهب إلى [netlify.com](https://netlify.com)
2. اضغط "New site from Git"
3. اختر GitHub واختر المستودع
4. إعدادات البناء:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. اضغط "Deploy site"

### الطريقة الثانية: رفع يدوي

```bash
# بناء المشروع
npm run build

# رفع مجلد dist إلى Netlify
# يمكنك سحب وإفلات المجلد على netlify.com
```

## 🔧 إعدادات النطاق المخصص

### إضافة نطاق مخصص

1. **في GitHub Pages:**
   - أضف ملف `CNAME` في مجلد `public/`
   - اكتب اسم النطاق: `your-domain.com`

2. **في Vercel:**
   - اذهب إلى إعدادات المشروع
   - انتقل إلى Domains
   - أضف النطاق المخصص

3. **في Netlify:**
   - اذهب إلى إعدادات الموقع
   - انتقل إلى Domain management
   - أضف النطاق المخصص

### إعدادات DNS

```bash
# مثال لإعدادات DNS
Type: CNAME
Name: www
Value: your-username.github.io
# أو
Value: your-project.vercel.app
# أو
Value: your-project.netlify.app
```

## 📱 تحسينات الأداء

### تحسين الصور

```bash
# استخدام WebP format
# تحسين أحجام الصور
# استخدام lazy loading
```

### تحسين CSS/JS

```bash
# الكود مُحسّن تلقائياً بواسطة Vite
# CSS و JS مضغوطان
# الصور مُحسّنة
```

## 🔒 إعدادات الأمان

### HTTPS
- جميع المنصات تدعم HTTPS تلقائياً
- تأكد من تفعيل HTTPS في إعدادات النطاق

### Headers الأمان
- الملفات تحتوي على headers أمان مناسبة
- يمكن تخصيصها حسب الحاجة

## 📊 المراقبة والتحليلات

### Google Analytics
```html
<!-- أضف في index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Google Search Console
1. أضف الموقع إلى Search Console
2. تحقق من الملكية
3. أرسل sitemap

## 🚨 استكشاف الأخطاء

### مشاكل شائعة

1. **الموقع لا يظهر:**
   - تحقق من إعدادات GitHub Pages
   - تأكد من وجود ملف `index.html` في مجلد `dist`

2. **الصور لا تظهر:**
   - تحقق من مسارات الصور
   - تأكد من وجود الصور في مجلد `public/assets/images/`

3. **مشاكل في البناء:**
   ```bash
   # تنظيف cache
   npm run build --force
   
   # حذف node_modules وإعادة التثبيت
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📞 الدعم

إذا واجهت مشاكل في النشر:

1. تحقق من ملفات الإعدادات
2. راجع logs البناء
3. تأكد من صحة الكود: `npm run lint`
4. اختبر البناء محلياً: `npm run build`

---

**نشر سعيد! 🎉** 