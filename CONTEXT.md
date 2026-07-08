# 📋 CONTEXT.md — رواق التميز للخدمات العامة

## 🏢 معلومات الموقع
منصة خدمات حكومية وتجارية — سلة طلبات للخدمات.
- **الألوان:** أخضر `#0a5c3a` | ذهبي `#c9a84c`
- **الخط:** Cairo (Google Fonts) | RTL
- **السجل التجاري:** 4650288413
- **واتساب:** 966559580940
- **البريد:** info@rowaqco.com
- **العنوان:** المدينة المنورة، السعودية
- **سنة حقوق النشر:** 2026 (وليس 2025)

---

## 🤖 تعليمات للشات
- **داخل نفس الشات** → دائماً اعمل على آخر نسخة عُدّلت في المحادثة (لا ترجع للأصل)
- **شات جديد** → اقرأ من ملفات المشروع أولاً
- كل تعديل يُطبَّق على النسخة التراكمية الأخيرة

---

## ⚙️ قواعد ثابتة
- القائمة الجانبية في `sidebar.js` فقط — تُحقن CSS+HTML تلقائياً في كل الصفحات
- كل صفحة تحتوي: `<div id="sidebar-container"></div>` + `<script src="sidebar.js"></script>`
- كل صفحة خدمات → شريط أخضر متدرج علوي مع أيقونة ووصف
- section-divider لتقسيم الصفحات ذات الأقسام المتعددة
- كل الأسعار بالريال السعودي ﷼
- زر الواتساب العائم في كل الصفحات (bottom: 28px, left: 28px)
- footer موحد في جميع الصفحات
- **icon-circle** لعرض الأيقونات في البطاقات (لا تستخدم img خارجية في البطاقات)
- **icon-circle CSS إلزامي** في كل صفحة تستخدمه: `width:68px;height:68px;border-radius:50%;background:var(--green-pale);display:flex;align-items:center;justify-content:center;font-size:30px;`
- لا تستخدم صور خارجية (img src) داخل svc-card أبداً
- الشريط الأخضر العلوي في الصفحة يمكن أن يستخدم emoji مباشرة
- **البريد الصحيح:** info@rowaqco.com (وليس rowaqco.sa)

---

## 📄 جميع ملفات الموقع

### الصفحات الأساسية
| الملف | الوصف |
|---|---|
| index.html | الرئيسية |
| about.html | من نحن |
| contact.html | تواصل معنا |
| cart.html | سلة المشتريات |
| packages.html | الباقات |
| individuals.html | خدمات الأفراد |
| general-services.html | الخدمات العامة وحجز المواعيد والرحلات |
| government-platforms.html | المنصات الحكومية (buildCard محدّث يدعم url لكل منصة) |
| engineering-consulting.html | خدمات الاستشارات الهندسية (3 أقسام، 9 خدمات) |

### خدمات الأعمال
| الملف | الوصف |
|---|---|
| business-establishment.html | خدمات التأسيس |
| business-employees.html | خدمات الموظفين والعمال |
| business-renewal.html | خدمات التجديد |
| business-transfer.html | خدمات التعديل والنقل |
| business-closure.html | خدمات الإغلاق والشطب |

### صفحات الخدمات العامة
| الملف | الوصف |
|---|---|
| education-services.html | خدمات الطلاب والمعلمين وأولياء الأمور (3 أقسام، 30 خدمة) |
| jobs-services.html | خدمات التقديم على الوظائف (8 خدمات) |

### صفحات المنصات الحكومية
| الملف | المنصة | خدمات |
|---|---|---|
| absher.html | منصة أبشر (أفراد + أعمال) | 27 |
| qiwa.html | منصة قوى | 19 |
| balady.html | منصة بلدي | 19 |
| mudad.html | منصة مدد | 7 |
| muqeem.html | منصة مقيم | 7 |
| sbc.html | المركز السعودي للأعمال | 17 |
| najiz.html | منصة ناجز | 27 |
| zatca.html | الزكاة والضريبة والجمارك | 4 |
| sakani.html | منصة سكني | 4 |
| electricity.html | الشركة السعودية للكهرباء | 8 |
| water.html | شركة المياه الوطنية | 3 |
| noor-faris.html | نور وفارس التعليمية | 11 |
| gosi.html | التأمينات الاجتماعية (أفراد + أعمال) | 17 |
| ejar.html | منصة إيجار | 8 |
| chamber.html | الغرفة التجارية | 4 |
| monshaat.html | منصة منشآت | 6 |
| spl.html | سبل (العنوان الوطني) | 5 |
| salama.html | منصة سلامة (الدفاع المدني) | 7 |
| saber.html | منصة سابر | 8 |
| discounts.html | نظام التخفيضات | 5 |
| fasah.html | منصة فسح | 4 |
| telecom.html | شركات الاتصالات | 5 |
| taqat.html | منصة طاقات | 8 |
| freelance.html | منصة العمل الحر | 6 |
| najm.html | منصة نجم | 3 |
| simah.html | سمة (المعلومات الائتمانية) | 3 |
| musaned.html | منصة مساند | 6 |
| sce.html | الهيئة السعودية للمهندسين | 4 |
| realestate.html | البورصة العقارية | 4 |
| shomoos.html | شموس | 4 |
| mumaris.html | ممارس بلس | 4 |
| taradhi.html | منصة تراضي | 4 |
| tam.html | منصة تم (خدمات المركبات) | 13 |
| ip.html | الملكية الفكرية (SAIP) | 8 |
| taqyees.html | منصة تقييس | 8 |
| qawayem.html | منصة قوائم (القوائم المالية) | 4 |
| seza.html | هيئة المدن الاقتصادية | 6 |

### الوزارات
| الملف | الخدمات |
|---|---|
| ministry-investment.html | 6 |
| ministry-education.html | 2 |
| ministry-foreign.html | 8 |
| ministry-labor.html | 4 |
| ministry-justice.html | 6 |
| ministry-environment.html | 2 |
| ministry-hr.html | 5 |
| ministry-housing.html | 4 |
| ministry-transport.html | 4 |
| ministry-industry.html | 9 (وزارة الصناعة والثروة المعدنية) |

### برامج الدعم الغير مسترد
| الملف | الخدمات |
|---|---|
| support-women.html | 2 |
| support-citizen.html | 2 |
| support-guarantee.html | 2 |
| support-hafiz.html | 1 |
| support-tamheer.html | 1 |
| support-sanad.html | 2 |

---

## 🗑️ محذوف من الموقع
- **منصة سفير** — حُذفت من government-platforms.html وindex.html
- **وزارة العمل** — حُذفت من قسم المنصات (تنتمي مع الوزارات في ministry-labor.html)

---

## 🔗 تعديلات على ملفات موجودة
- **index.html** — ربط جميع المنصات ببطاقاتها + بطاقة الاستشارات الهندسية + وزارة الصناعة
- **government-platforms.html** — إضافة url لكل منصة (35 منصة مربوطة)
- **sidebar.js** — إضافة وزارة الصناعة + خدمات الاستشارات الهندسية
- **ministry-investment.html** — أُضيفت 3 خدمات جديدة
- **gosi.html** — أُضيفت: تقديم بلاغ عجز مهني ﷼80

---

## 🎨 اتفاقيات التصميم
- الصفحات ذات الأقسام → section-divider بخلفية خضراء
- جميع بطاقات الخدمات → نفس بنية svc-card (before/after للمثلث الأخضر)
- **icon-circle** للأيقونات داخل البطاقات — دائرة خضراء فاتحة بـ emoji حجم 30px
- الأسعار بالأخضر الداكن، "يبدأ من" بخط صغير رمادي (svc-from)
- البحث والترتيب في toolbar أعلى كل صفحة خدمات
- الشريط العلوي (topbar) في كل الصفحات
- svc-cat: خلفية خضراء داكنة | .alt بنفسجي | .alt2 بني
- صفحة الاستشارات الهندسية تستخدم 3 ألوان للـ svc-cat (أخضر، بنفسجي، بني)

---

## 📝 ملاحظات تقنية
- government-platforms.html يستخدم buildCard() ديناميكياً — الربط عبر خاصية url في مصفوفة المنصات
- cart.js يُحقن badge العربة في كل الصفحات تلقائياً
- البريد الموحد: info@rowaqco.com (تم تصحيحه في جميع الـ 69 صفحة)
- الموقع مرشح للربط بـ Odoo لاحقاً (نظام متعدد اللغات مدمج)

---

## 🔮 خطط مستقبلية
- ربط الموقع بنظام Odoo (إدارة الطلبات + تعدد اللغات AR/EN تلقائياً)
- اللغة الإنجليزية ستُدار من Odoo مباشرة دون تعديل ملفات HTML

---

## ✅ آخر تحديث
2026-07-08 — إضافة 5 منصات جديدة (تم، الملكية الفكرية، تقييس، قوائم، هيئة المدن الاقتصادية) + وزارة الصناعة والثروة المعدنية + صفحة الاستشارات الهندسية (3 أقسام) + تصحيح البريد الإلكتروني في جميع الصفحات + ربط جميع الملفات في index وsidebar
