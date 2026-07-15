/* ============================================================
   sidebar.js — القائمة الجانبية الموحدة لجميع صفحات رواق التميز
   ============================================================ */

(function () {

  // ===== CSS القائمة =====
  const SIDEBAR_CSS = `
    .sidebar-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:998;opacity:0;pointer-events:none;transition:opacity .3s;}
    .sidebar-overlay.open{opacity:1;pointer-events:all;}
    .sidebar{position:fixed;top:0;right:-360px;width:320px;max-width:90vw;height:100vh;background:#fff;z-index:999;overflow-y:auto;transition:right .3s cubic-bezier(.4,0,.2,1);box-shadow:-4px 0 32px rgba(0,0,0,.15);display:flex;flex-direction:column;}
    .sidebar.open{right:0;}
    .sidebar-head{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid #e5e7eb;background:#0a5c3a;color:#fff;position:sticky;top:0;z-index:1;}
    .sidebar-head span{font-size:15px;font-weight:700;}
    .sidebar-close{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.15);border:none;color:#fff;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s;}
    .sidebar-close:hover{background:rgba(255,255,255,.3);}
    .sidebar-body{flex:1;padding:8px 0;}
    .sb-item{display:flex;align-items:center;padding:14px 20px;font-size:14px;font-weight:600;color:#111827;border-bottom:1px solid #e5e7eb;cursor:pointer;text-decoration:none;}
    .sb-item:hover{background:#e8f5ee;color:#0a5c3a;}
    .sb-icon{font-size:18px;width:28px;text-align:center;flex-shrink:0;margin-left:10px;}
    .sb-label{flex:1;}
    .sb-arrow{color:#6b7280;font-size:12px;transition:transform .2s;margin-right:auto;}
    .sb-item.has-sub.open .sb-arrow{transform:rotate(90deg);}
    .sb-sub{display:none;background:#f3f4f6;}
    .sb-sub a{display:block;padding:10px 20px 10px 16px;font-size:13px;color:#374151;border-bottom:1px solid #e5e7eb;transition:all .2s;text-decoration:none;}
    .sb-sub a:hover{color:#0a5c3a;background:#e8f5ee;}
    .sidebar-footer{padding:16px 20px;border-top:2px solid #e5e7eb;display:flex;flex-direction:column;gap:10px;}
    .sidebar-footer a{display:flex;align-items:center;gap:10px;padding:11px 16px;border-radius:10px;font-size:14px;font-weight:700;text-decoration:none;transition:all .2s;}
    .sb-wa{background:#25d366;color:#fff;}
    .sb-wa:hover{background:#1ebe5d;}
    .sb-call{background:#e8f5ee;color:#0a5c3a;}
    .sb-call:hover{background:#0a5c3a;color:#fff;}
  `;

  // ===== HTML القائمة =====
  const SIDEBAR_HTML = `
<div class="sidebar-overlay" id="overlay" onclick="closeSidebar()"></div>
<div class="sidebar" id="sidebar">
  <div class="sidebar-head">
    <span>القائمة الرئيسية</span>
    <button class="sidebar-close" onclick="closeSidebar()">✕</button>
  </div>
  <div class="sidebar-body">

    <a href="general-services.html" class="sb-item">
      <span class="sb-icon">📅</span><span class="sb-label">الخدمات العامة وحجز المواعيد والرحلات</span>
    </a>

    <a href="individuals.html" class="sb-item">
      <span class="sb-icon">👤</span><span class="sb-label">خدمات الأفراد</span>
    </a>

    <div class="sb-item has-sub" onclick="toggleSub(this)">
      <span><span class="sb-icon">🏢</span> خدمات الأعمال</span>
      <span class="sb-arrow">❯</span>
    </div>
    <div class="sb-sub">
      <a href="business-establishment.html">خدمات معاملات التأسيس</a>
      <a href="business-transfer.html">خدمات معاملات التعديل أو النقل</a>
      <a href="business-renewal.html">خدمات تجديد دورية ومتكررة</a>
      <a href="business-closure.html">خدمات معاملات انهاء مشروع</a>
      <a href="business-employees.html">خدمات الموظفين والعمال</a>
    </div>

    <a href="government-platforms.html" class="sb-item">
      <span class="sb-icon">🖥️</span><span class="sb-label">خدمات المنصات الحكومية</span>
    </a>

    <div class="sb-item has-sub" onclick="toggleSub(this)">
      <span><span class="sb-icon">🏛️</span> خدمات الوزارات الحكومية</span>
      <span class="sb-arrow">❯</span>
    </div>
    <div class="sb-sub">
      <a href="ministry-investment.html">وزارة الاستثمار</a>
      <a href="ministry-education.html">وزارة التعليم</a>
      <a href="ministry-foreign.html">وزارة الخارجية</a>
      <a href="ministry-labor.html">وزارة العمل</a>
      <a href="ministry-justice.html">وزارة العدل</a>
      <a href="ministry-environment.html">وزارة البيئة والزراعة</a>
      <a href="ministry-hr.html">وزارة الموارد البشرية</a>
      <a href="ministry-housing.html">وزارة الاسكان</a>
      <a href="ministry-transport.html">وزارة النقل</a>
      <a href="ministry-industry.html">وزارة الصناعة والثروة المعدنية</a>
    </div>

    <a href="engineering-consulting.html" class="sb-item">
      <span class="sb-icon">🏗️</span><span class="sb-label">خدمات الاستشارات الهندسية</span>
    </a>

    <div class="sb-item has-sub" onclick="toggleSub(this)">
      <span><span class="sb-icon">💰</span> خدمات منصات الدعم الغير مسترد</span>
      <span class="sb-arrow">❯</span>
    </div>
    <div class="sb-sub">
      <a href="support-women.html">دعم المرأة السعودية العاملة</a>
      <a href="support-citizen.html">حساب المواطن</a>
      <a href="support-guarantee.html">الضمان المطور</a>
      <a href="support-hafiz.html">حافز</a>
      <a href="support-tamheer.html">تمهير</a>
      <a href="support-sanad.html">ساند</a>
    </div>

    <a href="jobs-services.html" class="sb-item">
      <span class="sb-icon">💼</span><span class="sb-label">خدمات التقديم على الوظائف</span>
    </a>

    <a href="education-services.html" class="sb-item">
      <span class="sb-icon">📚</span><span class="sb-label">خدمات للطلاب والمعلمين وأولياء الأمور</span>
    </a>

    <a href="packages.html" class="sb-item">
      <span class="sb-icon">📦</span><span class="sb-label">باقات اشتراك الأعمال</span>
    </a>

    <a href="cart.html" class="sb-item">
      <span class="sb-icon">🛒</span><span class="sb-label">سلة المشتريات</span>
    </a>

    <a href="my-orders.html" class="sb-item">
      <span class="sb-icon">📋</span><span class="sb-label">طلباتي</span>
    </a>

    <a href="about.html" class="sb-item" onclick="closeSidebar()">
      <span class="sb-icon">🏢</span><span class="sb-label">من نحن</span>
    </a>

    <a href="contact.html" class="sb-item" onclick="closeSidebar()">
      <span class="sb-icon">✉️</span><span class="sb-label">تواصل معنا</span>
    </a>

  </div>

  <div class="sidebar-footer">
    <a href="https://wa.me/966559580940" class="sb-wa">💬 تواصل عبر واتساب</a>
    <a href="tel:+966559580940" class="sb-call">📞 اتصل بنا مباشرة</a>
  </div>
</div>`;

  // ===== حقن CSS و HTML =====
  document.addEventListener('DOMContentLoaded', function () {
    // أضف CSS
    const style = document.createElement('style');
    style.textContent = SIDEBAR_CSS;
    document.head.appendChild(style);

    // أضف HTML
    const container = document.getElementById('sidebar-container');
    if (container) container.innerHTML = SIDEBAR_HTML;
  });

  // ===== وظائف التحكم =====
  window.openSidebar = function () {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('open');
  };

  window.closeSidebar = function () {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
  };

  window.toggleSub = function (el) {
    const isOpen = el.classList.contains('open');
    // أغلق كل المفتوحة
    document.querySelectorAll('.sb-item.has-sub.open').forEach(i => {
      i.classList.remove('open');
      const s = i.nextElementSibling;
      if (s && s.classList.contains('sb-sub')) s.style.display = 'none';
    });
    // افتح المضغوطة إن كانت مغلقة
    if (!isOpen) {
      el.classList.add('open');
      const sub = el.nextElementSibling;
      if (sub && sub.classList.contains('sb-sub')) sub.style.display = 'block';
    }
  };

})();
