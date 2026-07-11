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
- section-divider لتقسيم الصفحات ذات القسمين (أفراد/أعمال، طلاب/معلمين...)
- كل الأسعار بالريال السعودي ﷼
- زر الواتساب العائم في كل الصفحات (bottom: 28px, left: 28px)
- footer موحد في جميع الصفحات
- **icon-circle** لعرض الأيقونات في البطاقات (لا تستخدم img خارجية في البطاقات)
- **icon-circle CSS إلزامي** في كل صفحة تستخدمه: `width:68px;height:68px;border-radius:50%;background:var(--green-pale);display:flex;align-items:center;justify-content:center;font-size:30px;`
- لا تستخدم صور خارجية (img src) داخل svc-card أبداً — تُسبب مشاكل حجم وتحميل
- الشريط الأخضر العلوي في الصفحة يمكن أن يستخدم emoji مباشر بدلاً من img

---

## 📄 جميع ملفات الموقع

### الصفحات الأساسية
| الملف | الوصف |
|---|---|
| index.html | الرئيسية |
| about.html | من نحن |
| contact.html | تواصل معنا |
| cart.html | سلة المشتريات (مع نظام تسجيل الدخول وإرسال لأودو) |
| register.html | تسجيل الدخول / إنشاء حساب جديد ✅ |
| packages.html | الباقات |
| individuals.html | خدمات الأفراد |
| general-services.html | الخدمات العامة وحجز المواعيد والرحلات |
| government-platforms.html | المنصات الحكومية (buildCard محدّث يدعم url لكل منصة) |

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
| ministry-housing.html | 🔜 |
| ministry-transport.html | 🔜 |

### برامج الدعم
| الملف | الخدمات |
|---|---|
| support-women.html | 2 |
| support-citizen.html | 2 |
| support-guarantee.html | 2 |
| support-hafiz.html | 1 |
| support-tamheer.html | 1 |
| support-sanad.html | 2 |

---

## 🌐 الاستضافة والنشر
- **GitHub:** `github.com/mmaharsi-111/rowaqco` (Public)
- **GitHub Pages:** مفعّل على branch main
- **الرابط التجريبي:** `https://mmaharsi-111.github.io/rowaqco/`
- **الدومين:** `www.rowaqco.com` (مربوط بـ GitHub Pages)
- **DNS هوستنجر:** CNAME `www` → `mmaharsi-111.github.io` + 4 سجلات A لـ GitHub Pages
- **HTTPS:** مفعّل ✅ (تم تفعيل Enforce HTTPS في GitHub Pages)
- **أودو:** `rowaqco.odoo.com` — للإدارة الداخلية فقط (النطاق: `https://rowaqco.odoo.com`)

---

## 🔗 تكامل أودو
- **Odoo URL:** `https://rowaqco.odoo.com`
- **Odoo DB:** `rowaqco`
- **API Key:** `48b1e3bc9f3f862fce0ab00a95bde9bfc2f489a9` (Persistent)
- **البريد:** `mohamad80alslamah@gmail.com`
- **partner_id الشركة:** 1 (شركة رواق التميز الحديثة المحدودة)
- **product.template ID الخدمة العامة:** 23 (الرقم في URL أودو)
- **product.product ID الخدمة العامة:** 22 ✅ (هذا هو الـ variant ID الصحيح المستخدم في API)
- ⚠️ تنبيه: أودو يفرق بين `product.template` (ID:23) و `product.product` (ID:22) — دائماً استخدم 22 في السكريبت

---

## 👤 نظام حسابات العملاء
- **register.html** — صفحة تسجيل الدخول وإنشاء الحساب ✅
- **البيانات المطلوبة:** الاسم + الجوال + البريد + كلمة المرور (إجبارية)
- **بيانات اختيارية:** اسم الشركة + الرقم الموحد + الرقم الضريبي (تظهر عند اختيار "أحتاج فاتورة ضريبية")
- **التخزين:** localStorage للسرعة + أودو كـ `res.partner` للأرشفة
- **البحث:** السكريبت يبحث عن العميل برقم الجوال أولاً — إذا وجده يستخدمه، إذا لا ينشئ عميلاً جديداً
- **الجلسة:** محفوظة في `localStorage` تحت مفتاح `rawaq_session`
- **الربط مع السلة:** cart.html يتحقق من الجلسة — إذا لا يوجد حساب يحوّل للتسجيل أولاً

---

## 🔄 Google Apps Script (الوسيط)
- **الرابط:** `https://script.google.com/macros/s/AKfycbyzTHDGzy4Kqitq3U0q4z5fhxlsMwMDLUpZj5Ptd6G0nqp_3pFj67cEz66FhHUXROuc/exec`
- **الوظيفة:** وسيط بين الموقع وأودو لحل مشكلة CORS
- **الطريقة:** GET requests مع parameters (cart, name, phone, email)
- **الحالة:** يعمل بشكل كامل ✅

### الكود الكامل الحالي للسكريبت:
```javascript
const ODOO_URL = 'https://rowaqco.odoo.com';
const ODOO_DB = 'rowaqco';
const ODOO_USER = 'mohamad80alslamah@gmail.com';
const ODOO_PASS = 'F@yendra1975';
const PRODUCT_ID = 22;

function doGet(e) {
  try {
    const cartJson = e.parameter.cart;
    const name     = e.parameter.name  || '-';
    const phone    = e.parameter.phone || '-';
    const email    = e.parameter.email || '';

    if (!cartJson) return response({ success: false, error: 'no cart' });
    const cart = JSON.parse(decodeURIComponent(cartJson));

    // 1. المصادقة
    const authRes = UrlFetchApp.fetch(`${ODOO_URL}/web/session/authenticate`, {
      method: 'post', contentType: 'application/json',
      payload: JSON.stringify({
        jsonrpc: '2.0', method: 'call', id: 1,
        params: { db: ODOO_DB, login: ODOO_USER, password: ODOO_PASS }
      }), muteHttpExceptions: true
    });
    const authData = JSON.parse(authRes.getContentText());
    const uid = authData.result?.uid;
    if (!uid) return response({ success: false, error: 'auth failed' });

    const cookies = authRes.getAllHeaders()['Set-Cookie'];
    const cookieHeader = Array.isArray(cookies)
      ? cookies.map(c => c.split(';')[0]).join('; ')
      : (cookies || '').split(';')[0];

    // 2. البحث عن العميل برقم الجوال
    const searchRes = UrlFetchApp.fetch(`${ODOO_URL}/web/dataset/call_kw`, {
      method: 'post', contentType: 'application/json',
      headers: { 'Cookie': cookieHeader },
      payload: JSON.stringify({
        jsonrpc: '2.0', method: 'call', id: 2,
        params: {
          model: 'res.partner', method: 'search_read',
          args: [[['phone', '=', phone]]],
          kwargs: { fields: ['id', 'name', 'phone'], limit: 1 }
        }
      }), muteHttpExceptions: true
    });
    const found = JSON.parse(searchRes.getContentText()).result;

    let partnerId;
    if (found && found.length > 0) {
      // العميل موجود مسبقاً
      partnerId = found[0].id;
    } else {
      // 3. إنشاء عميل جديد
      const createRes = UrlFetchApp.fetch(`${ODOO_URL}/web/dataset/call_kw`, {
        method: 'post', contentType: 'application/json',
        headers: { 'Cookie': cookieHeader },
        payload: JSON.stringify({
          jsonrpc: '2.0', method: 'call', id: 3,
          params: {
            model: 'res.partner', method: 'create',
            args: [{ name, phone, email, customer_rank: 1 }],
            kwargs: {}
          }
        }), muteHttpExceptions: true
      });
      partnerId = JSON.parse(createRes.getContentText()).result;
      if (!partnerId) return response({ success: false, error: 'partner creation failed' });
    }

    // 4. إنشاء الطلب مع partner_id الصحيح
    const lines = cart.map(item => [0, 0, {
      product_id: PRODUCT_ID,
      name: item.name,
      product_uom_qty: item.qty || 1,
      price_unit: parseFloat(item.price) || 0
    }]);

    const orderRes = UrlFetchApp.fetch(`${ODOO_URL}/web/dataset/call_kw`, {
      method: 'post', contentType: 'application/json',
      headers: { 'Cookie': cookieHeader },
      payload: JSON.stringify({
        jsonrpc: '2.0', method: 'call', id: 4,
        params: {
          model: 'sale.order', method: 'create',
          args: [{ partner_id: partnerId, order_line: lines,
            note: `طلب من الموقع\nالاسم: ${name}\nالجوال: ${phone}\nالبريد: ${email}\nالتاريخ: ${new Date().toLocaleString()}`
          }], kwargs: {}
        }
      }), muteHttpExceptions: true
    });

    const orderId = JSON.parse(orderRes.getContentText()).result;
    if (!orderId) return response({ success: false, error: 'order failed' });

    return response({ success: true, orderId, partnerId });

  } catch(err) {
    return response({ success: false, error: err.message });
  }
}

function response(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) { return doGet(e); }
```

---

## 🐛 المشاكل التي تم حلها

### 2026-07-09 — المشكلة 1: `sale.order` لا يُنشأ رغم `{"success":true}`
- **السبب:** السكريبت لم يكن يُرسل الـ session cookie مع طلب إنشاء الأوردر
- **الحل:** استخراج `Set-Cookie` من رد المصادقة وإرساله مع كل طلب لاحق

### 2026-07-09 — المشكلة 2: خطأ `product.product(23,) does not exist`
- **السبب:** استخدام `PRODUCT_ID = 23` وهو `product.template` وليس `product.product`
- **الحل:** تغيير إلى `PRODUCT_ID = 22` (الـ variant ID الصحيح)

### 2026-07-09 — المشكلة 3: رابط السكريبت يعطي "الملف غير موجود"
- **الحل:** نشر إصدار جديد من السكريبت بعد كل تعديل

### 2026-07-10 — المشكلة 4: `clearCart is not defined` في cart.html
- **السبب:** cart.html يعرّف دوال السلة الخاصة به ولا يعتمد على cart.js
- **الحل:** إضافة دالة `clearCart()` مباشرة في cart.html

### 2026-07-10 — المشكلة 5: الطلبات تُسجَّل باسم الشركة بدلاً من العميل
- **السبب:** السكريبت كان يستخدم `partner_id: 1` ثابتاً
- **الحل:** إضافة خطوة البحث عن العميل برقم الجوال في `res.partner` وإنشائه إذا لم يوجد

### 2026-07-10 — المشكلة 6: الأسئلة الشائعة والتقويم لا يعملان في index.html
- **السبب:** `}` وحيدة في السطر 1329 تسبب SyntaxError يوقف كل JavaScript
- **الحل:** حذف الـ `}` الزائدة

---

## 🛒 ملفات السلة
- **cart.js:** يحتوي دوال السلة المشتركة لجميع صفحات الموقع
- **cart.html:** السلة الكاملة مع التحقق من تسجيل الدخول + إرسال لأودو عبر GAS + Fallback لواتساب
- **register.html:** تسجيل الدخول وإنشاء الحساب — مرتبطة بالسلة ✅

---

## 📝 الخطوات التالية (الجلسة القادمة)
1. **إضافة منتجات متعددة في أودو** — منتج لكل خدمة أو فئة بدلاً من "خدمة عامة" واحدة
2. **ربط كل خدمة بـ product_id خاص** في أودو لتتبع المبيعات بدقة
3. **صفحة "طلباتي"** — يرى فيها العميل سجل طلباته السابقة

---

## ✅ آخر تحديث
2026-07-10 — إنجازات الجلسة:
- تفعيل HTTPS على www.rowaqco.com ✅
- إصلاح الأسئلة الشائعة والتقويم في index.html ✅
- بناء صفحة register.html (تسجيل دخول + إنشاء حساب + فاتورة ضريبية) ✅
- ربط السلة بصفحة التسجيل — لا يمكن إتمام الطلب بدون حساب ✅
- إنشاء عملاء تلقائياً في أودو (res.partner) وربطهم بالطلبات ✅
- تم التحقق من وصول طلبات حقيقية باسم العملاء (S02305, S02433) ✅

---

## 🏢 نظام الفاتورة الضريبية في أودو

### المنطق:
- **بدون فاتورة ضريبية** → ينشئ سجل **شخص** واحد فقط (`is_company: false`)
- **مع فاتورة ضريبية** → ينشئ سجلين مرتبطين:
  1. **سجل الشركة** (`is_company: true`) — اسم الشركة + الرقم الضريبي (vat) + الرقم الموحد (ref)
  2. **سجل الشخص** (`is_company: false`) — اسم العميل + جواله + بريده + `parent_id` مرتبط بالشركة

### البيانات المُرسلة من cart.html لـ GAS:
```
name, phone, email, invoice (true/false), company, vat, cr, cart
```

### المشكلة التي تم حلها (2026-07-10):
- **قبل:** جميع الطلبات تُسجَّل تحت `partner_id: 1` (شركة رواق التميز)
- **بعد:** كل عميل يُنشأ له سجل خاص في أودو — شخص أو شركة+شخص حسب اختياره
- **تم التحقق:** طلب بيانات "شركة سعدية" + "سارة محمود" وصل بشكل صحيح ✅

### آخر تحديث للسكريبت: 2026-07-10
- البحث عن العميل برقم الجوال أولاً (تجنب التكرار)
- إنشاء شركة + شخص مرتبط عند طلب الفاتورة الضريبية
- إنشاء شخص عادي بدون فاتورة
- دالة `callOdoo()` مساعدة لتنظيم الكود
