/**
 * services-loader.js — رواق التميز
 * يجلب الخدمات من services.json ويحدّث الصفحة تلقائياً
 */
(async function() {
  const pageName = location.pathname.split('/').pop().replace('.html', '') || 'index';
  
  const skipPages = ['index','cart','register','about','contact',
                     'packages','government-platforms'];
  if (skipPages.includes(pageName)) return;

  try {
    const url = `https://raw.githubusercontent.com/mmaharsi-111/rowaqco/main/services.json?t=${Date.now()}`;
    const res = await fetch(url);
    if (!res.ok) return;
    const allServices = await res.json();
    
    const services = allServices[pageName];
    if (!services || services.length === 0) return;

    // lookup: id -> service
    const lookup = {};
    services.forEach(s => { lookup[s.id] = s; });

    const cards = document.querySelectorAll('.svc-card[data-id]');
    let updated = 0, hidden = 0;

    cards.forEach(card => {
      const cardId = parseInt(card.dataset.id);
      if (!cardId) return;

      const svc = lookup[cardId];

      if (!svc) {
        // منتج محذوف أو غير نشط — أخفِ الكارت
        card.style.display = 'none';
        hidden++;
        return;
      }

      // حدّث data-price (شامل ضريبة 15%)
      const priceWithTax = Math.ceil(svc.price * 1.15);
      card.dataset.price = priceWithTax;

      // حدّث السعر في .price-val
      const priceVal = card.querySelector('.price-val');
      if (priceVal) {
        priceVal.textContent = priceWithTax;
      }

      // حدّث الاسم في data-name وفي .svc-name
      if (svc.name) {
        card.dataset.name = svc.name;
        const nameEl = card.querySelector('.svc-name');
        if (nameEl) nameEl.textContent = svc.name;
      }

      updated++;
    });

    // تحديث عداد الخدمات
    const counter = document.getElementById('results-count');
    if (counter) {
      const visible = document.querySelectorAll('.svc-card:not([style*="display: none"]):not([style*="display:none"])').length;
      counter.textContent = visible + ' خدمة';
    }

    console.log(`✅ services-loader [${pageName}]: ${updated} updated, ${hidden} hidden`);

  } catch(err) {
    console.warn('services-loader error:', err.message);
  }
})();
