/**
 * services-loader.js — رواق التميز
 * يجلب الخدمات من services.json ويحدّث الصفحة تلقائياً
 */
(async function() {
  const pageName = location.pathname.split('/').pop().replace('.html', '') || 'index';
  
  const skipPages = ['index','cart','register','about','contact',
                     'packages','government-platforms','general-services'];
  if (skipPages.includes(pageName)) return;

  try {
    const url = `https://raw.githubusercontent.com/mmaharsi-111/rowaqco/main/services.json?t=${Date.now()}`;
    const res = await fetch(url);
    if (!res.ok) return;
    const allServices = await res.json();
    
    const services = allServices[pageName];
    if (!services || services.length === 0) return;

    // بناء lookup: id -> service
    const lookup = {};
    services.forEach(s => { lookup[s.id] = s; });

    // تحديث كل كارت في الصفحة
    const cards = document.querySelectorAll('.svc-card[data-id]');
    let updated = 0;
    let hidden = 0;

    cards.forEach(card => {
      const cardId = parseInt(card.dataset.id);
      if (!cardId) return;

      const svc = lookup[cardId];

      if (!svc) {
        // المنتج محذوف أو غير نشط في أودو — أخفِ الكارت
        card.style.display = 'none';
        hidden++;
        return;
      }

      // حدّث السعر في data-price
      card.dataset.price = svc.price;

      // حدّث كل العناصر التي تحتوي السعر
      card.querySelectorAll('*').forEach(el => {
        const text = el.childNodes;
        text.forEach(node => {
          if (node.nodeType === 3) { // text node
            // ابحث عن نمط "XX ريال" أو "يبدأ من XX"
            if (/\d+\s*ريال/.test(node.textContent) || /يبدأ من\s*\d+/.test(node.textContent)) {
              node.textContent = node.textContent
                .replace(/\d+(\.\d+)?\s*ريال/, svc.price + ' ريال')
                .replace(/يبدأ من\s*\d+(\.\d+)?/, 'يبدأ من ' + svc.price);
            }
          }
        });
      });

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
