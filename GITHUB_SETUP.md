# إرشادات إعداد GitHub - GitHub Setup Guide

دليل شامل لإعداد مشروع موقع أثاث AC على GitHub.

## 🚀 الخطوات الأساسية

### 1. إنشاء مستودع جديد على GitHub

1. اذهب إلى [github.com](https://github.com)
2. اضغط على زر "+" في الأعلى
3. اختر "New repository"
4. املأ المعلومات:
   - **Repository name**: `furniture-ac-website`
   - **Description**: موقع أثاث AC - موقع ويب حديث ومتجاوب لعرض وشراء الأثاث
   - **Visibility**: Public (أو Private حسب رغبتك)
   - **Initialize with**: لا تضع علامة على أي خيار
5. اضغط "Create repository"

### 2. رفع الكود إلى GitHub

```bash
# في مجلد المشروع
git init
git add .
git commit -m "feat: إضافة موقع أثاث AC الأساسي

- إضافة جميع المكونات والواجهات
- إعداد Tailwind CSS و Radix UI
- إضافة ملفات التوثيق والإعدادات
- إعداد GitHub Actions للنشر التلقائي"

git branch -M main
git remote add origin https://github.com/your-username/furniture-ac-website.git
git push -u origin main
```

### 3. تفعيل GitHub Pages

1. اذهب إلى إعدادات المستودع (Settings)
2. انتقل إلى "Pages" في القائمة الجانبية
3. في "Source"، اختر "GitHub Actions"
4. احفظ الإعدادات

### 4. تفعيل GitHub Actions

1. اذهب إلى تبويب "Actions" في المستودع
2. ستجد workflow "Deploy to GitHub Pages"
3. اضغط "Run workflow" لتشغيله يدوياً (اختياري)

## 📋 الملفات المهمة

### ملفات التوثيق
- `README.md` - الوثائق الرئيسية
- `CONTRIBUTING.md` - دليل المساهمة
- `CHANGELOG.md` - سجل التغييرات
- `LICENSE` - ترخيص MIT
- `SECURITY.md` - سياسة الأمان
- `CODE_OF_CONDUCT.md` - قواعد السلوك

### ملفات الإعدادات
- `.github/workflows/deploy.yml` - إعدادات النشر التلقائي
- `vercel.json` - إعدادات Vercel
- `netlify.toml` - إعدادات Netlify
- `tailwind.config.js` - إعدادات Tailwind CSS

### ملفات التطوير
- `package.json` - تبعيات المشروع
- `vite.config.js` - إعدادات Vite
- `.gitignore` - الملفات المستثناة

## 🔧 إعدادات إضافية

### إضافة Topics للمستودع

في صفحة المستودع، اضغط على "About" وأضف topics:
- `react`
- `vite`
- `tailwindcss`
- `furniture`
- `arabic`
- `responsive`
- `modern-ui`

### إضافة وصف مفصل

```markdown
موقع أثاث AC - موقع ويب حديث ومتجاوب لعرض وشراء الأثاث، مبني باستخدام React و Vite مع تصميم جميل وحديث.

## المميزات
- تصميم متجاوب يعمل على جميع الأجهزة
- واجهة مستخدم حديثة وجذابة
- مكونات UI متقدمة باستخدام Radix UI
- تحريك سلس باستخدام Framer Motion
- زر واتساب عائم للتواصل المباشر

## التقنيات
- React 19
- Vite
- Tailwind CSS
- Radix UI
- Framer Motion
```

### إضافة Website link

في إعدادات المستودع، أضف رابط الموقع:
```
https://your-username.github.io/furniture-ac-website
```

## 🎯 إعدادات Issues

### إنشاء Templates للـ Issues

أنشئ مجلد `.github/ISSUE_TEMPLATE/` وأضف الملفات التالية:

#### bug_report.md
```markdown
---
name: تقرير خطأ
about: إنشاء تقرير لمساعدتنا في التحسين
title: '[BUG] '
labels: 'bug'
assignees: ''
---

**وصف الخطأ**
وصف واضح ومختصر للخطأ.

**خطوات التكرار**
1. اذهب إلى '...'
2. اضغط على '....'
3. انزل إلى '....'
4. شاهد الخطأ

**السلوك المتوقع**
وصف واضح ومختصر لما كنت تتوقعه أن يحدث.

**لقطات شاشة**
إذا كان ذلك مناسباً، أضف لقطات شاشة لشرح مشكلتك.

**معلومات إضافية**
- المتصفح: [مثل Chrome, Safari]
- نظام التشغيل: [مثل iOS]
- الإصدار: [مثل 22]
```

#### feature_request.md
```markdown
---
name: طلب ميزة
about: اقتراح فكرة لهذا المشروع
title: '[FEATURE] '
labels: 'enhancement'
assignees: ''
---

**هل طلب الميزة هذا مرتبط بمشكلة؟ يرجى وصفها.**
وصف واضح ومختصر للمشكلة. مثال: أنا دائماً محبط عندما [...]

**صف الحل الذي تريده**
وصف واضح ومختصر لما تريد أن يحدث.

**وصف البدائل التي فكرت فيها**
وصف واضح ومختصر لأي حلول أو ميزات بديلة فكرت فيها.

**معلومات إضافية**
أضف أي سياق أو لقطات شاشة أخرى حول طلب الميزة هنا.
```

## 🔒 إعدادات الأمان

### تفعيل Security Advisories

1. اذهب إلى إعدادات المستودع
2. انتقل إلى "Security"
3. فعّل "Security advisories"
4. فعّل "Dependency graph"
5. فعّل "Dependabot alerts"

### إضافة Security Policy

الملف `SECURITY.md` موجود بالفعل، تأكد من تحديث:
- عنوان البريد الإلكتروني للأمان
- إجراءات الإبلاغ عن الثغرات

## 📊 إعدادات Insights

### تفعيل Analytics

1. اذهب إلى إعدادات المستودع
2. انتقل إلى "General"
3. فعّل "Repository insights"
4. فعّل "Dependency graph"

## 🚀 النشر التلقائي

### GitHub Actions

الملف `.github/workflows/deploy.yml` موجود ويقوم بـ:
- بناء المشروع عند كل push
- نشر الموقع على GitHub Pages
- إرسال إشعارات عند النشر

### إعدادات Branch Protection

1. اذهب إلى إعدادات المستودع
2. انتقل إلى "Branches"
3. أضف rule للفرع `main`:
   - ✅ Require pull request reviews
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date

## 📞 الدعم والمساعدة

### إنشاء ملف Support

أنشئ ملف `SUPPORT.md`:
```markdown
# الدعم - Support

## كيفية الحصول على المساعدة

### 📧 البريد الإلكتروني
- للأمان: security@your-domain.com
- للدعم العام: support@your-domain.com

### 💬 GitHub Discussions
استخدم [GitHub Discussions](https://github.com/your-username/furniture-ac-website/discussions) للأسئلة العامة.

### 🐛 الإبلاغ عن الأخطاء
استخدم [GitHub Issues](https://github.com/your-username/furniture-ac-website/issues) للإبلاغ عن الأخطاء.

### 💡 اقتراح ميزات
استخدم [GitHub Issues](https://github.com/your-username/furniture-ac-website/issues) لاقتراح ميزات جديدة.

## أوقات الاستجابة

- **الأخطاء الحرجة**: 24 ساعة
- **الأخطاء العادية**: 3-5 أيام
- **الاستفسارات العامة**: أسبوع واحد
- **اقتراحات الميزات**: أسبوعين

## المساهمة

إذا كنت تريد المساهمة، راجع [دليل المساهمة](CONTRIBUTING.md).
```

## ✅ قائمة التحقق النهائية

- [ ] تم إنشاء المستودع على GitHub
- [ ] تم رفع الكود بنجاح
- [ ] تم تفعيل GitHub Pages
- [ ] تم تفعيل GitHub Actions
- [ ] تم إضافة Topics للمستودع
- [ ] تم إضافة وصف مفصل
- [ ] تم إضافة رابط الموقع
- [ ] تم إنشاء templates للـ Issues
- [ ] تم تفعيل إعدادات الأمان
- [ ] تم إعداد Branch Protection
- [ ] تم اختبار النشر التلقائي

## 🎉 النتيجة النهائية

بعد اتباع هذه الخطوات، ستحصل على:
- ✅ مستودع GitHub منظم ومحترف
- ✅ موقع منشور تلقائياً على GitHub Pages
- ✅ نظام مساهمة منظم
- ✅ إعدادات أمان قوية
- ✅ توثيق شامل

---

**مبروك! مشروعك جاهز للعالم! 🌟** 