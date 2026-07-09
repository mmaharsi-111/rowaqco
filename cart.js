/* ============================================================
   cart.js — نظام السلة المشتركة لجميع صفحات رواق التميز
   ============================================================ */
 
const CART_KEY = 'rawaq_cart';
 
window._rawaqCartFallback = window._rawaqCartFallback || [];
 
function storageAvailable() {
  try { localStorage.setItem('_t','1'); localStorage.removeItem('_t'); return true; }
  catch(e) { return false; }
}
 
function getCart() {
  if (storageAvailable()) {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
  }
  return window._rawaqCartFallback;
}
 
function saveCart(cart) {
  if (storageAvailable()) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } else {
    window._rawaqCartFallback = cart;
  }
  updateCartBadge();
}
 
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
 
function cartAdd(btn, name) {
  const price = getPriceFromCard(btn);
  const category = getCategoryFromCard(btn);
  addToCart(btn, name, price, category);
}
 
function quickAddToCart(name, price, category) {
  const cart = getCart();
  const existing = cart.find(i => i.name === name);
  if (existing) { existing.qty = (existing.qty||1)+1; }
  else { cart.push({ id: Date.now(), name, price: parseFloat(price)||0, category: category||'خدمة', qty: 1 }); }
  saveCart(cart);
  showToast('✅ تمت إضافة: ' + name);
}
 
function removeFromCart(id) {
  saveCart(getCart().filter(i => i.id != id));
}
 
function updateQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id == id);
  if (!item) return;
  item.qty = Math.max(1, (item.qty||1) + delta);
  saveCart(cart);
}
 
function clearCart() {
  if (storageAvailable()) localStorage.removeItem(CART_KEY);
  window._rawaqCartFallback = [];
  updateCartBadge();
}
 
function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((s, i) => s + (i.qty||1), 0);
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}
 
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
 
function getPriceFromCard(btn) {
  const card = btn.closest('.svc-card');
  if (!card) return 0;
  const priceEl = card.querySelector('[data-price]');
  if (priceEl) return parseFloat(priceEl.dataset.price) || 0;
  const priceVal = card.querySelector('.price-val');
  if (priceVal) return parseFloat(priceVal.dataset.price || priceVal.textContent) || 0;
  return 0;
}
 
function getCategoryFromCard(btn) {
  const card = btn.closest('.svc-card');
  if (!card) return 'خدمة';
  const cat = card.querySelector('.svc-cat');
  return cat ? cat.textContent.trim() : 'خدمة';
}
 
function askService(name) {
  const msg = encodeURIComponent('مرحباً، أريد الاستفسار عن سعر خدمة:\n📌 ' + name);
  window.open('https://wa.me/966559580940?text=' + msg, '_blank');
}
 
/* ── إرسال الطلب لأودو عبر Google Apps Script (GET) ── */
async function sendToOdoo(cart, customerInfo) {
  const PROXY_URL = 'https://script.google.com/macros/s/AKfycbyLaPtiRzLHKOTjOJmhbQZh9Jq0gAPzXGwGPGGYAYkp8z-Zx5WXhNOATF9bYH1am9iM/exec';
 
  try {
    const params = new URLSearchParams({
      cart: encodeURIComponent(JSON.stringify(cart)),
      name: customerInfo?.name || '',
      phone: customerInfo?.phone || ''
    });
 
    const res = await fetch(`${PROXY_URL}?${params.toString()}`);
    const data = await res.json();
 
    if (data?.success) {
      console.log('✅ تم إرسال الطلب لأودو — رقم الطلب:', data.orderId);
      return { success: true, orderId: data.orderId };
    }
    throw new Error(data?.error || 'فشل الإرسال');
  } catch (err) {
    console.error('❌ خطأ في إرسال الطلب:', err.message);
    return { success: false, error: err.message };
  }
}
 
document.addEventListener('DOMContentLoaded', updateCartBadge);
