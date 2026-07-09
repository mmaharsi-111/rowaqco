/* ============================================================
   cart.js — نظام السلة المشتركة لجميع صفحات رواق التميز
   يدعم localStorage وفي حال عدم توفره يستخدم متغير عالمي
   ============================================================ */

const CART_KEY = 'rawaq_cart';

/* ── مخزن احتياطي عالمي إذا تعذّر localStorage ── */
window._rawaqCartFallback = window._rawaqCartFallback || [];

function storageAvailable() {
  try { localStorage.setItem('_t','1'); localStorage.removeItem('_t'); return true; }
  catch(e) { return false; }
}

/* ── قراءة السلة ── */
function getCart() {
  if (storageAvailable()) {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
  }
  return window._rawaqCartFallback;
}

/* ── حفظ السلة ── */
function saveCart(cart) {
  if (storageAvailable()) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } else {
    window._rawaqCartFallback = cart;
  }
  updateCartBadge();
}

/* ── إضافة خدمة للسلة ── */
function addToCart(btn, name, price, category) {
  const cart = getCart();
  price = parseFloat(price) || 0;
  category = category || 'خدمة';
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ id: Date.now(), name, price, category, qty: 1 });
  }
  saveCart(cart);
  showToast('✅ تمت الإضافة إلى السلة!');
  animateBtn(btn);
}

/* ── cartAdd: تُستدعى من زر البطاقة وتقرأ السعر والفئة تلقائياً ── */
function cartAdd(btn, name) {
  const price = getPriceFromCard(btn);
  const category = getCategoryFromCard(btn);
  addToCart(btn, name, price, category);
}

/* ── إضافة سريعة بسعر وفئة صريحين ── */
function quickAddToCart(name, price, category) {
  const cart = getCart();
  const existing = cart.find(i => i.name === name);
  if (existing) { existing.qty = (existing.qty||1)+1; }
  else { cart.push({ id: Date.now(), name, price: parseFloat(price)||0, category: category||'خدمة', qty: 1 }); }
  saveCart(cart);
  showToast('✅ تمت إضافة: ' + name);
}

/* ── حذف عنصر من السلة ── */
function removeFromCart(id) {
  saveCart(getCart().filter(i => i.id != id));
}

/* ── تغيير الكمية ── */
function updateQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id == id);
  if (!item) return;
  item.qty = Math.max(1, (item.qty||1) + delta);
  saveCart(cart);
}

/* ── إفراغ السلة ── */
function clearCart() {
  if (storageAvailable()) localStorage.removeItem(CART_KEY);
  window._rawaqCartFallback = [];
  updateCartBadge();
}

/* ── عداد السلة في الهيدر ── */
function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((s, i) => s + (i.qty||1), 0);
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

/* ── Toast إشعار ── */
function showToast(msg) {
  let t = document.getElementById('cart-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'cart-toast';
    t.style.cssText = [
      'position:fixed','bottom:90px','left:50%',
      'transform:translateX(-50%) translateY(20px)',
      'background:#0a5c3a','color:#fff',
      'padding:14px 28px','border-radius:12px',
      'font-size:14px','font-weight:700',
      'opacity:0','transition:all .35s',
      'z-index:99999','white-space:nowrap',
      'box-shadow:0 8px 32px rgba(0,0,0,.25)',
      "font-family:'Cairo',sans-serif",
      'display:flex','align-items:center','gap:10px',
      'pointer-events:auto'
    ].join(';');
    document.body.appendChild(t);
  }
  t.innerHTML = msg +
    ' &nbsp;<a href="cart.html" style="color:#f0dfa0;font-weight:900;text-decoration:underline;white-space:nowrap;">عرض السلة ←</a>';
  t.style.opacity = '1';
  t.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateX(-50%) translateY(20px)';
  }, 4000);
}

/* ── تأثير الزر عند الإضافة ── */
function animateBtn(btn) {
  if (!btn) return;
  const orig = btn.innerHTML;
  const origBg = btn.style.background || '';
  btn.innerHTML = '✅ أُضيفت!';
  btn.style.background = '#25d366';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = orig;
    btn.style.background = origBg;
    btn.disabled = false;
  }, 1800);
}

/* ── استخراج السعر من البطاقة ── */
function getPriceFromCard(btn) {
  const card = btn.closest('.svc-card');
  if (!card) return 0;
  const priceEl = card.querySelector('[data-price]');
  if (priceEl) return parseFloat(priceEl.dataset.price) || 0;
  const priceVal = card.querySelector('.price-val');
  if (priceVal) return parseFloat(priceVal.dataset.price || priceVal.textContent) || 0;
  return 0;
}

/* ── استخراج الفئة من البطاقة ── */
function getCategoryFromCard(btn) {
  const card = btn.closest('.svc-card');
  if (!card) return 'خدمة';
  const cat = card.querySelector('.svc-cat');
  return cat ? cat.textContent.trim() : 'خدمة';
}

/* ── استفسار عن السعر عبر واتساب ── */
function askService(name) {
  const msg = encodeURIComponent('مرحباً، أريد الاستفسار عن سعر خدمة:\n📌 ' + name);
  window.open('https://wa.me/966559580940?text=' + msg, '_blank');
}

/* ── إرسال الطلب لأودو 19 عبر JSON-RPC + API Key ── */
async function sendToOdoo(cart, customerInfo) {
  const ODOO_URL  = 'https://rowaqco.odoo.com';
  const ODOO_DB   = 'rowaqco';
  const API_KEY   = '48b1e3bc9f3f862fce0ab00a95bde9bfc2f489a9';

  async function rpc(model, method, args, kwargs) {
    const res = await fetch(`${ODOO_URL}/web/dataset/call_kw`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        jsonrpc: '2.0', method: 'call', id: Date.now(),
        params: { model, method, args, kwargs: kwargs || {} }
      })
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error.data?.message || data.error.message);
    return data.result;
  }

  try {
    let partner_id = 3;

    if (customerInfo?.phone) {
      const found = await rpc('res.partner', 'search_read',
        [[['mobile', '=', customerInfo.phone]]],
        { fields: ['id'], limit: 1 }
      );
      if (found?.length) {
        partner_id = found[0].id;
      } else {
        partner_id = await rpc('res.partner', 'create', [{
          name:   customerInfo.name  || 'عميل جديد',
          mobile: customerInfo.phone || '',
          lang:   'ar_001',
          customer_rank: 1
        }], {});
      }
    }

    const lines = cart.map(item => [0, 0, {
      name:             item.name,
      product_uom_qty:  item.qty || 1,
      price_unit:       parseFloat(item.price) || 0,
    }]);

    const orderId = await rpc('sale.order', 'create', [{
      partner_id,
      order_line: lines,
      note: `طلب من الموقع الإلكتروني\nالتاريخ: ${new Date().toLocaleString('ar-SA')}`
    }], {});

    console.log('✅ تم إرسال الطلب لأودو — رقم الطلب:', orderId);
    return { success: true, orderId };

  } catch (err) {
    console.error('❌ خطأ في إرسال الطلب لأودو:', err.message);
    return { success: false, error: err.message };
  }
}

/* ── تشغيل العداد عند تحميل الصفحة ── */
document.addEventListener('DOMContentLoaded', updateCartBadge);
