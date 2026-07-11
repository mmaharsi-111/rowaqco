/**
 * services-loader.js
 * رواق التميز — محمّل الخدمات الديناميكي
 * يجلب الخدمات من services.json ويحدّث الصفحة تلقائياً
 */

(async function() {
  // اسم الصفحة الحالية (مثل: absher، balady...)
  const pageName = location.pathname.split('/').pop().replace('.html', '');
  
  // الصفحات التي لا تحتاج تحميل خدمات
  const skipPages = ['index', 'cart', 'register', 'about', 'contact', 
                     'packages', 'government-platforms', 'general-services', ''];
  if (skipPages.includes(pageName)) return;

  try {
    // جلب services.json من GitHub مع منع الكاش
    const url = `https://raw.githubusercontent.com/mmaharsi-111/rowaqco/main/services.json?t=${Date.now()}`;
    const res = await fetch(url);
    if (!res.ok) return;
    const allServices = await res.json();
    
    // خدمات هذه الصفحة
    const services = allServices[pageName];
    if (!services || services.length === 0) return;

    // البحث عن شبكة الخدمات في الصفحة
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    // إخفاء الكارت القديمة
    const oldCards = grid.querySelectorAll('.svc-card');
    
    // بناء الكارت الجديدة من services.json
    const newCards = services.map(svc => {
      // ابحث عن الكارت القديمة بنفس الـ ID
      let oldCard = null;
      oldCards.forEach(c => {
        if (parseInt(c.dataset.id) === svc.id) oldCard = c;
      });

      if (oldCard) {
        // حدّث البيانات الموجودة
        oldCard.dataset.price = svc.price;
        oldCard.dataset.id = svc.id;
        // حدّث السعر المعروض
        const priceEl = oldCard.querySelector('.svc-price, [class*="price"]');
        if (priceEl) priceEl.textContent = svc.price + ' ريال';
        return oldCard;
      }
      return null;
    }).filter(Boolean);

    // إخفاء الكارت التي لم تعد موجودة في أودو
    oldCards.forEach(card => {
      const cardId = parseInt(card.dataset.id);
      const stillExists = services.some(s => s.id === cardId);
      if (!stillExists && cardId) {
        card.style.display = 'none';
      }
    });

    // تحديث عداد الخدمات
    const counter = document.getElementById('results-count');
    if (counter) {
      const visible = grid.querySelectorAll('.svc-card:not([style*="none"])').length;
      counter.textContent = visible + ' خدمة';
    }

  } catch(err) {
    console.warn('services-loader: تعذّر تحميل الخدمات', err.message);
  }
})();
