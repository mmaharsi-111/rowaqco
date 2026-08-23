/**
 * services-loader.js — رواق التميز
 * يجلب الخدمات من services.json ويحدّث الصفحة تلقائياً
 */

// ✅ حقن CSS رمز الريال تلقائياً في كل صفحة
(function() {
  const style = document.createElement('style');
  style.textContent = `
    .sar-icon {
      display: inline-block;
      width: 14px;
      height: 14px;
      vertical-align: middle;
      margin-left: 3px;
    }
    .sar-icon img {
      width: 14px;
      height: 14px;
      filter: invert(18%) sepia(60%) saturate(800%) hue-rotate(120deg) brightness(70%);
      display: block;
    }
  `;
  document.head.appendChild(style);
})();
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
    
    // بناء lookup شامل من كل الصفحات بالـ ID
    const lookup = {};
    Object.values(allServices).forEach(pageServices => {
      pageServices.forEach(s => { lookup[s.id] = s; });
    });

    const cards = document.querySelectorAll('.svc-card[data-id]');
    let updated = 0, hidden = 0;

    cards.forEach(card => {
      const cardId = parseInt(card.dataset.id);
      if (!cardId) return;

      const svc = lookup[cardId];

      if (!svc) {
        card.style.display = 'none';
        hidden++;
        return;
      }

      // حدّث السعر فقط (بدون تغيير الاسم لتجنب الوميض)
      const priceWithTax = Math.ceil(svc.price * 1.15);
      card.dataset.price = priceWithTax;

      const priceVal = card.querySelector('.price-val');
      if (priceVal) {
        priceVal.dataset.price = priceWithTax;
      }

      // تحديث منطقة السعر كاملة — رمز SVG يسار الرقم
      const priceEl = card.querySelector('.svc-price');
      if (priceEl) {
        priceEl.innerHTML = `<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTI0LjE0IDEyNTYuMzkiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICMyMzFmMjA7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTY5OS42MiwxMTEzLjAyaDBjLTIwLjA2LDQ0LjQ4LTMzLjMyLDkyLjc1LTM4LjQsMTQzLjM3bDQyNC41MS05MC4yNGMyMC4wNi00NC40NywzMy4zMS05Mi43NSwzOC40LTE0My4zN2wtNDI0LjUxLDkwLjI0WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwODUuNzMsODk1LjhjMjAuMDYtNDQuNDcsMzMuMzItOTIuNzUsMzguNC0xNDMuMzdsLTMzMC42OCw3MC4zM3YtMTM1LjJsMjkyLjI3LTYyLjExYzIwLjA2LTQ0LjQ3LDMzLjMyLTkyLjc1LDM4LjQtMTQzLjM3bC0zMzAuNjgsNzAuMjdWNjYuMTNjLTUwLjY3LDI4LjQ1LTk1LjY3LDY2LjMyLTEzMi4yNSwxMTAuOTl2NDAzLjM1bC0xMzIuMjUsMjguMTFWMGMtNTAuNjcsMjguNDQtOTUuNjcsNjYuMzItMTMyLjI1LDExMC45OXY1MjUuNjlsLTI5NS45MSw2Mi44OGMtMjAuMDYsNDQuNDctMzMuMzMsOTIuNzUtMzguNDIsMTQzLjM3bDMzNC4zMy03MS4wNXYxNzAuMjZsLTM1OC4zLDc2LjE0Yy0yMC4wNiw0NC40Ny0zMy4zMiw5Mi43NS0zOC40LDE0My4zN2wzNzUuMDQtNzkuN2MzMC41My02LjM1LDU2Ljc3LTI0LjQsNzMuODMtNDkuMjRsNjguNzgtMTAxLjk3di0uMDJjNy4xNC0xMC41NSwxMS4zLTIzLjI3LDExLjMtMzYuOTd2LTE0OS45OGwxMzIuMjUtMjguMTF2MjcwLjRsNDI0LjUzLTkwLjI4WiIvPgo8L3N2Zz4=" alt="ريال سعودي" style="width:14px;height:14px;vertical-align:middle;margin-left:3px;filter:invert(18%) sepia(60%) saturate(800%) hue-rotate(120deg) brightness(70%)"><span class="price-val" data-price="${priceWithTax}">${priceWithTax}</span>`;
      }

      // حدّث الاسم في data-name وفي .svc-name
      if (svc.name) {
        card.dataset.name = svc.name;
        const nameEl = card.querySelector('.svc-name');
        if (nameEl) nameEl.textContent = svc.name;
      }

      // حدّث الزر حسب السعر
      const footer = card.querySelector('.svc-footer');
      if (footer) {
        if (svc.price === 0) {
          // سعر صفر → استفسر
          footer.innerHTML = `<button class="btn-cart ask" onclick="askService('${svc.name}')">💬 استفسر عن السعر</button>`;
        } else {
          // سعر موجود → أضف للسلة
          footer.innerHTML = `<button class="btn-cart" onclick="cartAdd(this,'${svc.name}')">🛒 أضف للسلة</button>`;
        }
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
