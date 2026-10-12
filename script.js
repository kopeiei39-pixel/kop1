'use strict';

/* ===================================================
   PRODUCTS DATA (10 ລາຍການ)
=================================================== */
const PRODUCTS = [
  { id: 1, name: 'ບັນຊີ FF MAX - Rank ໄດມອນ', game: 'Free Fire MAX', emoji: '🎯', price: 120000, badge: 'ຮ້ອນ', image: 'https://img.rdcw.co.th/images/41613b06dbd3b2180233108f6448f7619d0e5772d59c6cbc4acff9b4d65e22e5.png' },
  { id: 2, name: 'ບັນຊີ PUBG - Conqueror', game: 'PUBG Mobile', emoji: '🔫', price: 350000, badge: 'VIP', image: 'https://cdn.gameboost.com/cdn-cgi/image/width=900,height=481/https://cdn.gameboost.com/accounts/4874606/gallery/conversions/a6c02b25-cc78-41fb-82a5-9e4a883632ae-webp.webp?v=1779288516' },
  { id: 3, name: 'ບັນຊີ ML - Mythical Glory', game: 'Mobile Legends', emoji: '⚔️', price: 280000, badge: '', image: 'https://preview.redd.it/selling-my-mlbb-acc-v0-b4la4burwvvf1.png?width=640&crop=smart&auto=webp&s=9b17293cf529b958a41b293192bc29982b5f5a9c' },
  { id: 4, name: 'ບັນຊີ Genshin - AR55+', game: 'Genshin Impact', emoji: '🌟', price: 500000, badge: 'ໃໝ່', image: 'https://i.redd.it/selling-my-69x5-genshin-honkai-star-rail-account-same-hoyo-v0-h5lpn0q6g4hg1.png?width=1841&format=png&auto=webp&s=4872c34de7e020fa90b712e426f15d1f4e6b66c9' },
  { id: 5, name: 'ບັນຊີ FF - Heroic', game: 'Free Fire', emoji: '🏆', price: 80000, badge: '', image: 'https://preview.redd.it/is-my-id-valuable-v0-67tbblnl2qif1.jpg?width=640&crop=smart&auto=webp&s=1cad9b63516ef6a9796bd7bb9e835c56859f117a' },
  { id: 6, name: 'ບັນຊີ COD - Legendary', game: 'COD Mobile', emoji: '💣', price: 200000, badge: '', image: 'https://preview.redd.it/the-game-feels-weird-after-the-latest-update-v0-biv67otco06g1.jpg?width=640&crop=smart&auto=webp&s=6858a2167bef84fa37a948c99b7f33c81d4e9323' },
  { id: 7, name: 'ບັນຊີ Valorant - Radiant', game: 'Valorant', emoji: '🌀', price: 450000, badge: '', image: 'https://scontent.fvte2-2.fna.fbcdn.net/v/t39.30808-6/707370701_1028128126390305_5556952780308706167_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=j1KgrSO9CJAQ7kNvwFdwtj_&_nc_oc=AdpDzOXBG5Kmlb3TF_2jmBRhZ-jr3D5daT9IdhvkcCOAzyDT42BN0vnLRMOcdGWSU5I&_nc_zt=23&_nc_ht=scontent.fvte2-2.fna&_nc_gid=mheS21PiiO4mFeBILOdGeQ&_nc_ss=7b2a8&oh=00_Af4QT49KrFCtSwQqmF1OPnEo7anRae0HfKLO7NzvB0-84w&oe=6A1A31D7' },
  { id: 8, name: 'ບັນຊີ Genshin - AR60 Full', game: 'Genshin Impact', emoji: '⭐', price: 750000, badge: '', image: 'https://preview.redd.it/wts-genshin-asia-accounts-well-built-well-maintained-c6-v0-avho85m0wk2g1.jpg?width=640&crop=smart&auto=webp&s=213e1a362c50cfb3b9c834c234c36d3a21ebff73' },
  { id: 9, name: 'ບັນຊີ PUBG - Ace', game: 'PUBG Mobile', emoji: '🎖️', price: 180000, badge: '', image: 'https://scontent.fvte2-2.fna.fbcdn.net/v/t39.30808-6/697110301_993554169724113_2435212328336256013_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=dPkxxzV7NjAQ7kNvwEw_c9z&_nc_oc=Adpx2fjdJbTlZRECwH_naHPSYgkknXRJ9A0zxumiiKsfGgCEfKxQBfWqqQVF3i8zrHM&_nc_zt=23&_nc_ht=scontent.fvte2-2.fna&_nc_gid=CXA_wnQ7XznM-jDSX-HENw&_nc_ss=7b2a8&oh=00_Af6Ua5REthK3wYjGgC_IU5MPN-TmkIKnY1iRtSaecIdwlg&oe=6A1A2F41' },
  { id: 10, name: 'ບັນຊີ ML - Mythical Honor', game: 'Mobile Legends', emoji: '🗡️', price: 95000, badge: '', image: 'https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/616691782_2275165456310028_4033979943305176970_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=XNyAc-3pGaQQ7kNvwFOeEwm&_nc_oc=Adq7e6K1162DdEwYz71hpOVKczadXryYaAM8XlraDB-stprZVCuckhAiQLZbGYpEtnc&_nc_zt=23&_nc_ht=scontent.fvte2-1.fna&_nc_gid=seuzw1QdH1Bry-aR_L8iAw&_nc_ss=7b2a8&oh=00_Af7Bji_FJ0HNsfSO0KWwFQBChkRGvuhWb2PWz9bUDHNl6Q&oe=6A1A5740' },
];

/* ===================================================
   CONSTANTS
=================================================== */
const MAX_TOPUP = 100_000_000;

const COUPONS = {
  'LAO2024': { discount: 0.05, label: '5%', desc: 'ສ່ວນຫຼຸດ 5% ທຸກສິນຄ້າ' },
};

const GAME_CATEGORIES = [
  { key: 'all', label: '🔥 ທັງໝົດ' },
  { key: 'ff', label: '🎯 Free Fire' },
  { key: 'pubg', label: '🔫 PUBG' },
  { key: 'ml', label: '⚔️ Mobile Legends' },
  { key: 'genshin', label: '🌟 Genshin' },
  { key: 'cod', label: '💣 COD' },
  { key: 'valorant', label: '🌀 Valorant' },
];

const statusMap = {
  success: '<span class="badge badge-success">✅ ສຳເລັດ</span>',
  warning: '<span class="badge badge-warning">⏳ ດຳເນີນ</span>',
  danger: '<span class="badge badge-danger">❌ ຍົກເລີກ</span>',
  info: '<span class="badge badge-info">🔍 ກວດສອບ</span>',
  pending: '<span class="badge badge-warning">⏳ ລໍຖ້າ</span>',
};

const BOT_REPLIES = [
  'ຂໍຂອບໃຈ! ທີມງານຈະຊ່ວຍທ່ານໃນທັນທີ 🎧',
  'ຂໍຂອບໃຈສຳລັບຄຳຖາມ. ທ່ານຢາກໄດ້ຂໍ້ມູນເພີ່ມຕື່ມບໍ?',
  'ຍິນດີຊ່ວຍ! ເລືອກຊື້ໄດ້ທີ່ໜ້າ "ຮ້ານຄ້າ" 🛒',
  'ເຕີມເງິນຜ່ານ BCEL One, LDB ຫຼື LAO QR ໄດ້ 💳',
  'ທ່ານຕ້ອງການຂໍ້ມູນໃດຕື່ມ? ຍິນດີຊ່ວຍ 😊',
];

/* ===================================================
   STATE  (ເງິນ = 0 ທຸກຄັ້ງທີ່ Login)
=================================================== */
let balance = 0;
let currentUser = '';
let selectedAmount = 0;
let selectedMethod = 'BCEL One';
let msgCount = 0;
let activeCategory = 'all';
let cart = [];
let appliedCoupon = null;

// history arrays (real-time, reset ທຸກ session)
const buyHistory = [];
const sellHistory = [];
const topupHistory = [];
// messages list (chat notifications)
const systemMessages = [];

/* ===================================================
   INIT
=================================================== */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('login-pass').addEventListener('keydown', e => {
    if (e.key === 'Enter') doLogin();
  });
});

/* ===================================================
   RANDOM CODE GENERATOR
=================================================== */
function genAccountCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 16; i++) {
    if (i > 0 && i % 4 === 0) code += '-';
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function genPassword() {
  return Math.floor(10000000 + Math.random() * 89999999).toString();
}

function genOrderId() {
  return '#FF' + String(Date.now()).slice(-6);
}

function genSellId() {
  return '#SL' + String(Date.now()).slice(-6);
}

/* ===================================================
   LOGIN / LOGOUT
=================================================== */
function doLogin() {
  const u = document.getElementById('login-user').value.trim();
  const p = document.getElementById('login-pass').value.trim();

  if (!u) { showLoginError('⚠️ ກະລຸນາໃສ່ຊື່ຜູ້ໃຊ້'); return; }
  if (!/^\d+$/.test(p)) { showLoginError('⚠️ ລະຫັດຜ່ານຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ'); return; }
  if (p.length < 8) { showLoginError(`⚠️ ລະຫັດຕ້ອງມີ 8 ຕົວຂຶ້ນໄປ (${p.length}/8)`); return; }

  // Reset state on every login
  balance = 0;
  cart = [];
  appliedCoupon = null;
  currentUser = u;
  buyHistory.length = 0;
  sellHistory.length = 0;
  topupHistory.length = 0;
  systemMessages.length = 0;

  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  document.getElementById('sidebar-username').textContent = u;
  // Reset all pages, show home, highlight home nav
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const homePage = document.getElementById('page-home');
  if (homePage) homePage.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.remove('active');
    if ((n.getAttribute('onclick') || '') === "navigate('home')") n.classList.add('active');
  });

  updateBalance(0);
  updateCartBadge();
  renderProducts();
  renderHistories();
  renderHomeStats();
  renderCart();

  // Welcome message in chat
  pushSystemMsg(`ສະບາຍດີ ${u}! ຍິນດີຕ້ອນຮັບສູ່ FIRE FREE PRO MAX 🔥 ຍອດເງິນເລີ່ມຕົ້ນ: 0 ກີບ ກະລຸນາເຕີມເງິນກ່ອນ!`, '🔔');
}

function showLoginError(msg) {
  const el = document.getElementById('login-error');
  el.textContent = msg;
  el.style.display = 'block';
  const box = document.querySelector('.login-box');
  box.style.animation = 'none';
  box.offsetHeight;
  box.style.animation = 'shake 0.4s ease';
  setTimeout(() => { el.style.display = 'none'; box.style.animation = ''; }, 3500);
}

function doLogout() {
  if (confirm('ທ່ານຕ້ອງການອອກຈາກລະບົບ?')) {
    document.getElementById('app').style.display = 'none';
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('login-user').value = '';
    document.getElementById('login-pass').value = '';
    const fill = document.getElementById('pass-fill');
    const hint = document.getElementById('pass-hint');
    if (fill) { fill.style.width = '0'; }
    if (hint) hint.textContent = '';
  }
}

/* ===================================================
   NAVIGATE
=================================================== */
function navigate(page) {
  // Show correct page
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');

  // Highlight nav item by matching onclick attribute exactly
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.remove('active');
    const oc = n.getAttribute('onclick') || '';
    if (oc === "navigate('" + page + "')") n.classList.add('active');
  });

  if (page === 'cart') { setTimeout(renderCart, 0); }
  if (page === 'buy-history') renderHistories();
  if (page === 'messages') renderChatList();
}

/* ===================================================
   BALANCE
=================================================== */
function updateBalance(val) {
  balance = val;
  document.getElementById('balance-display').textContent = formatNum(val);
  document.getElementById('sidebar-bal').textContent = formatNum(val);
  renderHomeStats();
}

/* ===================================================
   HOME STATS (real-time)
=================================================== */
function renderHomeStats() {
  const cartTotal = cart.reduce((s, c) => s + c.qty, 0);
  setText('stat-buy-count', buyHistory.length);
  setText('stat-sell-count', sellHistory.length);
  setText('stat-bal', balance >= 1_000_000 ? (balance / 1_000_000).toFixed(1) + 'M'
    : balance >= 1000 ? (balance / 1000).toFixed(0) + 'K' : balance);
  setText('stat-cart-count', cartTotal);
}

/* ===================================================
   PRODUCTS & CATEGORIES
=================================================== */
function getProductsByCategory(cat) {
  if (cat === 'all') return PRODUCTS;
  const filterMap = {
    ff: p => p.game.toLowerCase().includes('free fire'),
    pubg: p => p.game.toLowerCase().includes('pubg'),
    ml: p => p.game.toLowerCase().includes('mobile legends'),
    genshin: p => p.game.toLowerCase().includes('genshin'),
    cod: p => p.game.toLowerCase().includes('cod'),
    valorant: p => p.game.toLowerCase().includes('valorant'),
  };
  return PRODUCTS.filter(filterMap[cat] || (() => true));
}

function renderProducts() {
  renderHomeCategoryTabs();
  renderHomeProducts();
  const shopGrid = document.getElementById('shop-grid');
  if (shopGrid) shopGrid.innerHTML = PRODUCTS.map(makeProductCard).join('');
}

function renderHomeCategoryTabs() {
  const wrap = document.getElementById('home-cat-tabs');
  if (!wrap) return;
  wrap.innerHTML = GAME_CATEGORIES.map(c => `
    <button class="game-cat-btn ${c.key === activeCategory ? 'active' : ''}"
            onclick="setHomeCategory('${c.key}')">${c.label}</button>`).join('');
}

function setHomeCategory(cat) {
  activeCategory = cat;
  renderHomeCategoryTabs();
  renderHomeProducts();
}

function renderHomeProducts() {
  const grid = document.getElementById('featured-grid');
  const countEl = document.getElementById('product-count');
  if (!grid) return;
  const list = getProductsByCategory(activeCategory);
  if (countEl) countEl.textContent = `ສິນຄ້າ: ${list.length} ລາຍການ`;
  grid.innerHTML = list.length === 0
    ? `<div style="grid-column:1/-1;text-align:center;padding:32px;color:var(--text2);">😕 ບໍ່ມີສິນຄ້າ</div>`
    : list.map(makeProductCard).join('');
}

function makeProductCard(p) {
  const inCart = cart.find(c => c.product.id === p.id);
  const imgContent = p.image
    ? `<img src="${p.image}" alt="${p.name}" class="product-img-photo">`
    : p.emoji;
  return `
    <div class="product-card" id="pcard-${p.id}">
      <div class="product-img">${imgContent}${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}</div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-game">${p.game}</div>
        <div class="product-price">
          <span class="price-val">${formatNum(p.price / 1000)}K</span>
        </div>
        <div class="card-actions">
          <button class="btn-cart ${inCart ? 'in-cart' : ''}" onclick="addToCart(${p.id})">
            ${inCart ? `✅ ໃນກະຕ່າ (${inCart.qty})` : '🛒 ໃສ່ກະຕ່າ'}
          </button>
          <button class="btn-buy-now" onclick="buyNow(${p.id})">⚡ ຊື້ດຽວນີ້</button>
        </div>
      </div>
    </div>`;
}

/* ===================================================
   CART SYSTEM
=================================================== */
function addToCart(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const existing = cart.find(c => c.product.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ product: p, qty: 1 });
  }
  updateCartBadge();
  renderProducts();    // ອັບເດດ card button
  renderCart();
  renderHomeStats();   // ອັບເດດ stat ໜ້າຫຼັກທັນທີ
  showToast(`🛒 ເພີ່ມ "${p.name}" ໃສ່ກະຕ່າ`);
}

function removeFromCart(productId) {
  cart = cart.filter(c => c.product.id !== productId);
  updateCartBadge();
  renderProducts();
  renderCart();
  renderHomeStats();
}

function changeCartQty(productId, delta) {
  const item = cart.find(c => c.product.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(productId); return; }
  updateCartBadge();
  renderCart();
  renderHomeStats();
}

function clearCart() {
  cart = [];
  appliedCoupon = null;
  updateCartBadge();
  renderProducts();
  renderCart();
  renderHomeStats();
}

function updateCartBadge() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  const badge = document.getElementById('cart-nav-badge');
  if (badge) { badge.textContent = total; badge.style.display = total > 0 ? 'inline' : 'none'; }
  // Also update home stat-cart-count instantly
  setText('stat-cart-count', total);
}

function getCartSubtotal() { return cart.reduce((s, c) => s + c.product.price * c.qty, 0); }
function getCartDiscount() { return appliedCoupon ? Math.floor(getCartSubtotal() * appliedCoupon.discount) : 0; }
function getCartTotal() { return getCartSubtotal() - getCartDiscount(); }

/* ===== COUPON ===== */
function applyCoupon() {
  const code = (document.getElementById('coupon-input').value || '').trim().toUpperCase();
  const msgEl = document.getElementById('coupon-msg');
  if (!code) { setCouponMsg(msgEl, '⚠️ ກະລຸນາໃສ່ລະຫັດ', 'warn'); return; }
  if (COUPONS[code]) {
    appliedCoupon = { code, ...COUPONS[code] };
    setCouponMsg(msgEl, `🎉 ໃຊ້ Coupon "${code}" ສ່ວນຫຼຸດ ${appliedCoupon.label}!`, 'success');
    showToast(`🎟 Coupon ${code} ລົດ ${appliedCoupon.label}`);
  } else {
    appliedCoupon = null;
    setCouponMsg(msgEl, `❌ ລະຫັດ "${code}" ບໍ່ຖືກຕ້ອງ`, 'error');
  }
  renderCart();
}

function removeCoupon() {
  appliedCoupon = null;
  const inp = document.getElementById('coupon-input');
  if (inp) inp.value = '';
  const msgEl = document.getElementById('coupon-msg');
  if (msgEl) { msgEl.textContent = ''; msgEl.className = 'coupon-msg'; }
  renderCart();
  showToast('🗑 ລຶບ Coupon ແລ້ວ');
}

function setCouponMsg(el, msg, type) {
  if (!el) return;
  el.textContent = msg;
  el.className = `coupon-msg ${type}`;
}

/* ===== RENDER CART PAGE ===== */
function renderCart() {
  const container = document.getElementById('cart-items-list');
  const emptyEl = document.getElementById('cart-empty-msg');
  const summaryEl = document.getElementById('cart-summary');

  // Always update home widget
  updateHomeCartWidget();

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '';
    if (emptyEl) { emptyEl.style.cssText += ';display:flex!important;'; }
    if (summaryEl) { summaryEl.style.display = 'none'; }
    return;
  }

  // Has items — hide empty, show summary
  if (emptyEl) { emptyEl.style.display = 'none'; }
  if (summaryEl) { summaryEl.style.display = 'block'; }

  const sub = getCartSubtotal();
  const discount = getCartDiscount();
  const total = getCartTotal();
  const totalQty = cart.reduce((s, c) => s + c.qty, 0);

  container.innerHTML = cart.map(c => `
    <div class="cart-row">
      <div class="cart-row-emoji">${c.product.emoji}</div>
      <div class="cart-row-info">
        <div class="cart-row-name">${c.product.name}</div>
        <div class="cart-row-game">${c.product.game}</div>
        <div class="cart-row-unit">${formatNum(c.product.price)} ກ / ລາຍການ</div>
      </div>
      <div class="cart-row-controls">
        <button class="qty-btn-s" onclick="changeCartQty(${c.product.id},-1)">−</button>
        <span class="qty-num">${c.qty}</span>
        <button class="qty-btn-s" onclick="changeCartQty(${c.product.id},1)">+</button>
      </div>
      <div class="cart-row-price">${formatNum(c.product.price * c.qty)} ກ</div>
      <button class="cart-row-del" onclick="removeFromCart(${c.product.id})">🗑</button>
    </div>`).join('');

  setText('cart-subtotal', formatNum(sub) + ' ກີບ');
  setText('cart-total-qty', totalQty + ' ລາຍການ');
  setText('cart-grand-total', formatNum(total) + ' ກີບ');

  const discRow = document.getElementById('cart-discount-row');
  if (discRow) {
    discRow.style.display = discount > 0 ? 'flex' : 'none';
    setText('cart-discount-val', '- ' + formatNum(discount) + ' ກີບ');
  }

  const couponBadge = document.getElementById('active-coupon-badge');
  if (couponBadge) {
    couponBadge.style.display = appliedCoupon ? 'flex' : 'none';
    if (appliedCoupon) {
      const cp = couponBadge.querySelector('.cp-code');
      if (cp) cp.textContent = appliedCoupon.code + ' (-' + appliedCoupon.label + ')';
    }
  }
}
/* ===== CHECKOUT ===== */
function checkoutCart() {
  if (cart.length === 0) { showToast('⚠️ ກະຕ່າຫວ່າງ!'); return; }
  const total = getCartTotal();
  if (balance < total) { showToast('❌ ຍອດເງິນບໍ່ພຽງພໍ! ກະລຸນາເຕີມເງິນ'); return; }

  const today = new Date();
  const dateStr = formatDate(today);
  const timeStr = today.toTimeString().slice(0, 5);
  const orderId = genOrderId();

  // Deduct balance
  updateBalance(balance - total);

  // Add each item to buy history + generate account code
  const purchasedItems = cart.map(c => {
    const accountCode = genAccountCode();
    const password = genPassword();
    buyHistory.unshift({
      id: orderId, name: c.product.name,
      game: c.product.game.replace(/🎮|🖥️/g, '').trim(),
      price: formatNum(c.product.price * c.qty),
      qty: c.qty, date: dateStr + ' ' + timeStr,
      status: 'success', accountCode, password,
    });
    return { ...c, accountCode, password };
  });

  // Send to chat: one message per item with random account code
  purchasedItems.forEach(c => {
    const msg =
      `🎉 ຊຳລະສຳເລັດ! [${orderId}]\n` +
      `🎮 ${c.product.name}\n` +
      `🔑 ລະຫັດບັນຊີ: ${c.accountCode}\n` +
      `🔒 ລະຫັດ: ${c.password}\n` +
      `📅 ${dateStr} ${timeStr}`;
    pushSystemMsg(msg, '🎮');
  });

  // Save receipt
  localStorage.setItem('shop_receipt', JSON.stringify({
    orderNo: orderId, buyer: currentUser,
    date: today.toLocaleString('lo-LA'),
    items: cart.map(c => ({ name: c.product.name, emoji: c.product.emoji, price: c.product.price, qty: c.qty })),
    subtotal: getCartSubtotal(), discount: getCartDiscount(),
    coupon: appliedCoupon ? appliedCoupon.code : null,
    couponLabel: appliedCoupon ? appliedCoupon.label : null,
    total,
  }));

  clearCart();
  renderHistories();
  renderHomeStats();
  showToast(`🎉 ຊຳລະ ${formatNum(total)} ກີບ ສຳເລັດ! ເຊັກລະຫັດໃນ Chat`);

  setTimeout(() => {
    const win = window.open('receipt.html', '_blank', 'width=440,height=680,toolbar=0,location=0');
    if (!win) showToast('⚠️ ເປີດ Popup Blocker');
  }, 400);
}

function buyNow(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  if (!cart.find(c => c.product.id === productId)) {
    cart.push({ product: p, qty: 1 });
    updateCartBadge();
    renderProducts();
    renderHomeStats();
  }
  navigate('cart');
}

/* ===================================================
   TOPUP  (max 100,000,000 ຕໍ່ຄັ້ງ)
=================================================== */
function selectAmount(btn, val) {
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedAmount = val;
  document.getElementById('topup-amount').value = val;
  updateQR(val);
}

function updateQR(val) {
  const v = parseInt(val) || 0;
  const limEl = document.getElementById('topup-limit-msg');
  if (v > MAX_TOPUP) {
    if (limEl) { limEl.textContent = `⚠️ ສູງສຸດ ${formatNum(MAX_TOPUP)} ກ/ຄັ້ງ`; limEl.style.color = '#e74c3c'; }
  } else {
    if (limEl) limEl.textContent = '';
  }
  setText('qr-amount-display', v > 0 ? formatNum(v) + ' ກີບ' : 'ເລືອກຈຳນວນກ່ອນ');
  setText('bank-amount', v > 0 ? formatNum(v) + ' ກີບ' : '---');
  if (v > 0) selectedAmount = v;
}

function selectMethod(btn, method) {
  document.querySelectorAll('.method-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedMethod = method;
}

function doTopup() {
  const amt = selectedAmount || parseInt(document.getElementById('topup-amount').value);
  if (!amt || amt < 1000) { showToast('⚠️ ໃສ່ຈຳນວນທີ່ຕ້ອງການ'); return; }
  if (amt > MAX_TOPUP) { showToast(`❌ ສູງສຸດ ${formatNum(MAX_TOPUP)} ກ/ຄັ້ງ`); return; }

  const today = new Date();
  const dateStr = formatDate(today);
  const timeStr = today.toTimeString().slice(0, 5);

  updateBalance(balance + amt);

  topupHistory.unshift({
    id: '#TP' + String(Date.now()).slice(-6),
    amount: formatNum(amt) + ' ກີບ',
    method: selectedMethod,
    date: dateStr + ' ' + timeStr,
    status: 'success',
  });

  pushSystemMsg(`💰 ເຕີມເງິນ ${formatNum(amt)} ກີບ ຜ່ານ ${selectedMethod} ສຳເລັດ! [${dateStr} ${timeStr}]`, '💳');

  renderHistories();
  renderHomeStats();
  showToast(`✅ ເຕີມ ${formatNum(amt)} ກີບ ສຳເລັດ!`);

  // Reset
  document.getElementById('topup-amount').value = '';
  setText('qr-amount-display', 'ເລືອກຈຳນວນກ່ອນ');
  setText('bank-amount', '---');
  selectedAmount = 0;
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('selected'));
  const lm = document.getElementById('topup-limit-msg');
  if (lm) lm.textContent = '';
}

/* ===================================================
   SELL FORM (real-time → history)
=================================================== */
function submitSell() {
  const game = document.getElementById('sell-game').value;
  const rank = document.getElementById('sell-rank').value.trim();
  const price = parseInt(document.getElementById('sell-price').value);
  const desc = document.getElementById('sell-desc').value.trim();
  const phone = document.getElementById('sell-phone').value.trim();

  if (!game) { showSellMsg('⚠️ ກະລຸນາເລືອກເກມ', 'error'); return; }
  if (!rank) { showSellMsg('⚠️ ກະລຸນາໃສ່ Rank', 'error'); return; }
  if (!price || price < 1000) { showSellMsg('⚠️ ກະລຸນາໃສ່ລາຄາ', 'error'); return; }
  if (!phone) { showSellMsg('⚠️ ກະລຸນາໃສ່ເບີຕິດຕໍ່', 'error'); return; }

  const today = new Date();
  const dateStr = formatDate(today);
  const timeStr = today.toTimeString().slice(0, 5);
  const newId = genSellId();

  sellHistory.unshift({
    id: newId, name: rank + (desc ? ` (${desc.slice(0, 20)})` : ''),
    game, price: formatNum(price), phone,
    date: dateStr + ' ' + timeStr, status: 'pending',
  });

  renderHistories();
  renderHomeStats();

  showSellMsg(
    `✅ ສົ່ງຄຳຂໍ <b>${newId}</b> ສຳເລັດ!<br>
     <small style="color:var(--text2);">${game} | ${rank} | ${formatNum(price)} ກ — ທາງຮ້ານຈະຕິດຕໍ່ກັບໄປ</small>`,
    'success'
  );
  showToast(`📤 ຄຳຂໍຂາຍ ${newId} ສຳເລັດ!`);

  ['sell-game', 'sell-rank', 'sell-price', 'sell-desc', 'sell-phone'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

function showSellMsg(html, type) {
  const el = document.getElementById('sell-msg');
  if (!el) return;
  el.innerHTML = html;
  el.className = `sell-msg ${type}`;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 5000);
}

/* ===================================================
   RENDER HISTORIES (real-time)
=================================================== */
function renderHistories() {
  // --- BUY ---
  const bh = document.getElementById('buy-history-body');
  if (bh) {
    bh.innerHTML = buyHistory.length === 0
      ? `<tr><td colspan="7" style="text-align:center;padding:24px;color:var(--text2);">ຍັງບໍ່ມີປະຫວັດ</td></tr>`
      : buyHistory.map(r => `<tr>
          <td style="color:var(--fire2);font-weight:600;white-space:nowrap;">${r.id}</td>
          <td>${r.name}</td>
          <td style="color:var(--text2);font-size:12px;">${r.game}</td>
          <td style="color:var(--gold);font-weight:700;white-space:nowrap;">${r.price} ກ</td>
          <td style="color:var(--text2);font-size:12px;white-space:nowrap;">${r.date}</td>
          <td>${statusMap[r.status]}</td>
        </tr>`).join('');
  }

  // --- SELL ---
  const sh = document.getElementById('sell-history-body');
  if (sh) {
    sh.innerHTML = sellHistory.length === 0
      ? `<tr><td colspan="6" style="text-align:center;padding:24px;color:var(--text2);">ຍັງບໍ່ມີປະຫວັດ</td></tr>`
      : sellHistory.map(r => `<tr>
          <td style="color:var(--fire2);font-weight:600;white-space:nowrap;">${r.id}</td>
          <td>${r.name}</td>
          <td style="color:var(--text2);font-size:12px;">${r.game}</td>
          <td style="color:var(--gold);font-weight:700;white-space:nowrap;">${r.price} ກ</td>
          <td style="color:var(--text2);font-size:12px;white-space:nowrap;">${r.date}</td>
          <td>${statusMap[r.status]}</td>
        </tr>`).join('');
  }

  // --- TOPUP ---
  const th = document.getElementById('topup-history-body');
  if (th) {
    th.innerHTML = topupHistory.length === 0
      ? `<tr><td colspan="5" style="text-align:center;padding:24px;color:var(--text2);">ຍັງບໍ່ມີປະຫວັດ</td></tr>`
      : topupHistory.map(r => `<tr>
          <td style="color:var(--fire2);font-weight:600;">${r.id}</td>
          <td style="color:var(--gold);font-weight:700;">${r.amount}</td>
          <td>${r.method}</td>
          <td style="color:var(--text2);font-size:12px;white-space:nowrap;">${r.date}</td>
          <td>${statusMap[r.status]}</td>
        </tr>`).join('');
  }

  // Update stat counts
  renderHomeStats();
}

/* ===================================================
   TAB SWITCH
=================================================== */
function switchTab(btn, tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const buy = document.getElementById('tab-buy');
  const sell = document.getElementById('tab-sell-h');
  if (buy) buy.style.display = tabId === 'tab-buy' ? 'block' : 'none';
  if (sell) sell.style.display = tabId === 'tab-sell-h' ? 'block' : 'none';
}

/* ===================================================
   CHAT / MESSAGES
=================================================== */
function pushSystemMsg(text, icon) {
  const now = new Date();
  const time = now.toTimeString().slice(0, 5);
  systemMessages.unshift({ text, icon, time, id: Date.now() });
  renderChatList();
  // Update msg nav badge
  const badge = document.getElementById('msg-nav-badge');
  if (badge) badge.textContent = systemMessages.length;
}

function renderChatList() {
  const list = document.getElementById('chat-list-items');
  if (!list) return;
  if (systemMessages.length === 0) {
    list.innerHTML = `<div style="padding:20px;text-align:center;color:var(--text2);font-size:13px;">ຍັງບໍ່ມີຂໍ້ຄວາມ</div>`;
    return;
  }
  list.innerHTML = systemMessages.map((m, i) => `
    <div class="chat-item ${i === 0 ? 'active-chat' : ''}" onclick="showChatMsg(${i})">
      <div class="chat-avatar" style="background:linear-gradient(135deg,#1a3a6b,#0070f3);width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">${m.icon}</div>
      <div class="chat-meta">
        <div class="chat-name">${m.icon === '🎮' ? 'ລະຫັດບັນຊີ 🎮' : m.icon === '💳' ? 'ການເຕີມເງິນ' : 'ການແຈ້ງເຕືອນ'}</div>
        <div class="chat-preview">${m.text.split('\n')[0].slice(0, 30)}...</div>
      </div>
      <div class="chat-time">${m.time}</div>
    </div>`).join('');
}

function showChatMsg(index) {
  const m = systemMessages[index];
  if (!m) return;
  const msgs = document.getElementById('chat-messages');
  if (!msgs) return;
  msgs.innerHTML = `
    <div class="msg received">
      <div class="chat-avatar chat-sys" style="width:32px;height:32px;font-size:16px;flex-shrink:0;">${m.icon}</div>
      <div>
        <div class="msg-bubble" style="white-space:pre-line;">${m.text}</div>
        <div class="msg-time">${m.time}</div>
      </div>
    </div>`;
  msgs.scrollTop = msgs.scrollHeight;

  // Highlight selected
  document.querySelectorAll('#chat-list-items .chat-item').forEach((el, i) => {
    el.classList.toggle('active-chat', i === index);
  });
}

function sendMsg() {
  const inp = document.getElementById('msg-input');
  const txt = inp.value.trim();
  if (!txt) return;
  const msgs = document.getElementById('chat-messages');
  const time = new Date().toTimeString().slice(0, 5);

  const sent = document.createElement('div');
  sent.className = 'msg sent';
  sent.innerHTML = `<div class="user-avatar" style="width:32px;height:32px;font-size:14px;flex-shrink:0;">👤</div>
    <div><div class="msg-bubble">${txt}</div><div class="msg-time">${time}</div></div>`;
  msgs.appendChild(sent);
  inp.value = '';
  msgs.scrollTop = msgs.scrollHeight;

  setTimeout(() => {
    const reply = BOT_REPLIES[msgCount % BOT_REPLIES.length];
    msgCount++;
    const recv = document.createElement('div');
    recv.className = 'msg received';
    recv.innerHTML = `<div class="chat-avatar chat-cs" style="width:32px;height:32px;font-size:14px;flex-shrink:0;">🎧</div>
      <div><div class="msg-bubble">${reply}</div><div class="msg-time">${time}</div></div>`;
    msgs.appendChild(recv);
    msgs.scrollTop = msgs.scrollHeight;
  }, 1200);
}

/* ===================================================
   FAQ
=================================================== */
function toggleFaq(el) { el.parentElement.classList.toggle('open'); }

/* ===================================================
   PASSWORD
=================================================== */
function checkPassStrength(val) {
  const fill = document.getElementById('pass-fill');
  const hint = document.getElementById('pass-hint');
  if (!fill) return;
  const isNum = /^\d*$/.test(val);
  const len = val.length;
  if (len === 0) { fill.style.width = '0%'; hint.textContent = ''; return; }
  if (!isNum) {
    fill.style.width = '20%'; fill.style.background = '#e74c3c';
    hint.textContent = '❌ ຕ້ອງເປັນຕົວເລກ'; hint.style.color = '#e74c3c'; return;
  }
  if (len < 4) { fill.style.width = '20%'; fill.style.background = '#e74c3c'; hint.textContent = `❌ ສັ້ນ (${len}/8)`; hint.style.color = '#e74c3c'; }
  else if (len < 8) { fill.style.width = `${(len / 8) * 70}%`; fill.style.background = '#f39c12'; hint.textContent = `⚠️ ຕ້ອງການ ${8 - len} ຕົວ`; hint.style.color = '#f39c12'; }
  else if (len < 12) { fill.style.width = '85%'; fill.style.background = '#27ae60'; hint.textContent = `✅ ໃຊ້ໄດ້ (${len} ຕົວ)`; hint.style.color = '#27ae60'; }
  else { fill.style.width = '100%'; fill.style.background = 'linear-gradient(90deg,#27ae60,#00e676)'; hint.textContent = `🔒 ແຂງແຮງ (${len} ຕົວ)`; hint.style.color = '#00e676'; }
}

function togglePass() {
  const inp = document.getElementById('login-pass');
  inp.type = inp.type === 'password' ? 'text' : 'password';
}

/* ===================================================
   TOAST / UTILS
=================================================== */
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function formatNum(n) { return Number(n).toLocaleString('lo-LA'); }

function formatDate(d) {
  return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
}

/* ===================================================
   OPEN SUPPORT CHAT
=================================================== */
function openSupportChat() {
  const msgs = document.getElementById('chat-messages');
  if (!msgs) return;
  msgs.innerHTML = `
    <div class="msg received">
      <div class="chat-avatar chat-cs" style="width:32px;height:32px;font-size:14px;flex-shrink:0;">🎧</div>
      <div><div class="msg-bubble">ສະບາຍດີ! ຍິນດີຕ້ອນຮັບ 🔥 ຊ່ວຍຫຍັງໄດ້ບໍ?</div><div class="msg-time">--:--</div></div>
    </div>`;
  document.querySelectorAll('#chat-list-items .chat-item').forEach(el => el.classList.remove('active-chat'));
}

/* ===================================================
   HOME CART WIDGET (called inside renderCart)
=================================================== */
function updateHomeCartWidget() {
  const widget = document.getElementById('home-cart-widget');
  const preview = document.getElementById('home-cart-preview');
  if (!widget || !preview) return;

  if (cart.length === 0) {
    widget.style.display = 'none';
    return;
  }

  widget.style.display = 'block';
  const disc = getCartDiscount();
  const total = getCartTotal();

  preview.innerHTML = cart.map(c => `
    <div class="home-cart-row">
      <span class="hcr-emoji">${c.product.emoji}</span>
      <span class="hcr-name">${c.product.name}</span>
      <span class="hcr-qty">×${c.qty}</span>
      <span class="hcr-price">${formatNum(c.product.price * c.qty)} ກ</span>
    </div>`).join('') +
    `<div style="display:flex;justify-content:space-between;margin-top:12px;padding-top:10px;border-top:1px dashed rgba(255,255,255,0.1);">
      ${disc > 0 ? `<span style="font-size:12px;color:var(--success);">🎟 -${formatNum(disc)} ກ</span>` : '<span></span>'}
      <span style="font-family:'Orbitron',sans-serif;font-size:15px;font-weight:700;color:var(--fire2);">${formatNum(total)} ກ</span>
    </div>`;
}