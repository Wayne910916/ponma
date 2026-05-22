/* ============================================
   主要 JavaScript 邏輯
   ============================================ */

// 頁面載入完成後執行
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  initializeEventListeners();
});

// 更新購物車徽章
function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (badge) {
    const count = Cart.getCartCount();
    badge.textContent = count;
    badge.parentElement.style.display = count > 0 ? 'flex' : 'none';
  }
}

// 初始化事件監聽
function initializeEventListeners() {
  // 頁面特定的事件監聽（各頁面會覆蓋）
}

// 快速加入購物車（從商品列表）
function quickAddToCart(productId) {
  const quantityInput = document.querySelector(`#quantity-${productId}`);
  const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
  
  if (Cart.addToCart(productId, quantity)) {
    showNotification('已加入購物車！', 'success');
    updateCartBadge();
    
    // 清空輸入框
    if (quantityInput) {
      quantityInput.value = 1;
    }
  } else {
    showNotification('添加失敗，請重試', 'error');
  }
}

// 顯示通知
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `alert alert-${type}`;
  notification.innerHTML = `
    <div style="flex: 1;">
      <strong>${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</strong> ${message}
    </div>
  `;
  
  const container = document.querySelector('.container') || document.body;
  container.insertBefore(notification, container.firstChild);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// 格式化價格
function formatPrice(price) {
  return 'NT$' + price.toLocaleString('zh-TW');
}

// 路由處理（簡單的頁面導覽）
const routes = {
  '/': 'index.html',
  '/shop': 'shop.html',
  '/product': 'product.html',
  '/cart': 'cart.html',
  '/checkout': 'checkout.html'
};

// 導航到頁面
function navigateTo(page) {
  window.location.href = page;
}

// 獲取 URL 參數
function getUrlParam(name) {
  const url = new URL(window.location);
  return url.searchParams.get(name);
}

// 首頁特定邏輯
function initHomePage() {
  // 輪播功能
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  
  if (slides.length > 0) {
    function showSlide(n) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[n].classList.add('active');
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    // 每 5 秒自動輪播
    setInterval(nextSlide, 5000);
    showSlide(0);
  }
}

// 商品列表頁邏輯
function initShopPage() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      filterProducts(category);
      
      // 更新按鈕狀態
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// 篩選商品
function filterProducts(category) {
  const products = category === 'all' 
    ? getAllProducts() 
    : getProductsByCategory(category);
  
  renderProductGrid(products);
}

// 渲染商品網格
function renderProductGrid(products) {
  const grid = document.querySelector('.products-grid');
  if (!grid) return;
  
  grid.innerHTML = products.map(product => `
    <div class="card">
      <img src="${product.image}" alt="${product.name}" class="card-image">
      <div class="card-body">
        <div>
          ${product.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
        </div>
        <h3 class="card-title">${product.name}</h3>
        <p class="card-text">${product.description.substring(0, 80)}...</p>
        <div class="card-price">${formatPrice(product.price)}</div>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <input type="number" id="quantity-${product.id}" min="1" max="10" value="1" 
                 class="form-control" style="width: 70px; padding: 0.5rem;">
          <button class="btn btn-primary" onclick="quickAddToCart('${product.id}')">
            加入購物車
          </button>
          <a href="product.html?id=${product.id}" class="btn btn-outline btn-small">
            詳情
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// 商品詳情頁邏輯
function initProductPage() {
  const productId = getUrlParam('id');
  if (!productId) {
    navigateTo('shop.html');
    return;
  }
  
  const product = getProductById(productId);
  if (!product) {
    navigateTo('shop.html');
    return;
  }
  
  renderProductDetail(product);
}

// 渲染商品詳情
function renderProductDetail(product) {
  const container = document.querySelector('.product-detail');
  if (!container) return;
  
  container.innerHTML = `
    <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 3rem;">
      <div>
        <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 8px;">
      </div>
      <div>
        <div style="margin-bottom: 1rem;">
          ${product.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
        </div>
        <h1>${product.name}</h1>
        <div class="card-price" style="font-size: 2rem; margin: 1rem 0;">${formatPrice(product.price)}</div>
        <p style="font-size: 1.1rem; color: #666; margin-bottom: 1.5rem;">${product.description}</p>
        
        <div style="background-color: #f5f5f5; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
          <p><strong>規格：</strong> ${product.pieces} 顆 / ${product.weight}g</p>
          <p><strong>成分：</strong> ${product.ingredients}</p>
          <p><strong>過敏原：</strong> ${product.allergens}</p>
        </div>
        
        <div style="background-color: #fff3e0; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
          <h4>料理指南</h4>
          <p>${product.cookingGuide}</p>
        </div>
        
        <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
          <div class="form-group" style="flex: 0 0 100px;">
            <label class="form-label">數量</label>
            <input type="number" id="product-quantity" min="1" max="20" value="1" class="form-control">
          </div>
        </div>
        
        <div style="display: flex; gap: 1rem;">
          <button class="btn btn-primary btn-block" onclick="addProductToCart('${product.id}')">
            加入購物車
          </button>
          <button class="btn btn-secondary btn-block" onclick="navigateTo('cart.html')">
            前往購物車
          </button>
        </div>
      </div>
    </div>
    
    <div style="margin-top: 3rem;">
      <h2>用戶評價</h2>
      <div class="grid-2" style="margin-top: 1.5rem;">
        ${product.reviews.map(review => `
          <div class="card">
            <div class="card-body">
              <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
                ${[...Array(review.rating)].map(() => '⭐').join('')}
              </div>
              <p><strong>${review.name}</strong></p>
              <p>"${review.text}"</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 從詳情頁加入購物車
function addProductToCart(productId) {
  const quantityInput = document.querySelector('#product-quantity');
  const quantity = parseInt(quantityInput.value);
  
  if (quantity < 1) {
    showNotification('請輸入有效數量', 'warning');
    return;
  }
  
  if (Cart.addToCart(productId, quantity)) {
    showNotification('已加入購物車！', 'success');
    updateCartBadge();
    quantityInput.value = 1;
  }
}

// 購物車頁邏輯
function initCartPage() {
  renderCart();
  updateCartSummary();
}

// 渲染購物車
function renderCart() {
  const cart = Cart.getCart();
  const container = document.querySelector('.cart-items');
  
  if (!container) return;
  
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="alert alert-info" style="text-align: center; padding: 2rem;">
        購物車是空的。 <a href="shop.html">繼續購物</a>
      </div>
    `;
    return;
  }
  
  container.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>商品</th>
          <th>單價</th>
          <th>數量</th>
          <th>小計</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        ${cart.map(item => `
          <tr>
            <td>
              <div style="display: flex; gap: 1rem; align-items: center;">
                <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
                <a href="product.html?id=${item.id}">${item.name}</a>
              </div>
            </td>
            <td>${formatPrice(item.price)}</td>
            <td>
              <input type="number" min="1" max="20" value="${item.quantity}" 
                     onchange="updateCartItem('${item.id}', this.value)" 
                     class="form-control" style="width: 70px;">
            </td>
            <td>${formatPrice(item.price * item.quantity)}</td>
            <td>
              <button class="btn btn-outline btn-small" onclick="removeCartItem('${item.id}')">
                移除
              </button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

// 更新購物車項目
function updateCartItem(productId, quantity) {
  Cart.updateQuantity(productId, parseInt(quantity));
  renderCart();
  updateCartSummary();
  updateCartBadge();
}

// 移除購物車項目
function removeCartItem(productId) {
  Cart.removeFromCart(productId);
  renderCart();
  updateCartSummary();
  updateCartBadge();
  showNotification('已移除商品', 'info');
}

// 更新購物車摘要
function updateCartSummary() {
  const subtotal = Cart.getSubtotal();
  const shipping = Cart.getShippingFee();
  const tax = Cart.getTax();
  const total = Cart.getTotal();
  
  const summary = document.querySelector('.cart-summary');
  if (!summary) return;
  
  const freeShippingThreshold = 1200;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  
  summary.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h3 class="mb-3">訂單摘要</h3>
        
        ${remainingForFreeShipping > 0 ? `
          <div class="alert alert-info">
            再買 ${formatPrice(remainingForFreeShipping)} 即可享冷凍免運！
          </div>
          <div style="background-color: #e0e0e0; height: 8px; border-radius: 4px; margin-bottom: 1rem;">
            <div style="background-color: var(--color-primary); height: 100%; border-radius: 4px; width: ${(subtotal / freeShippingThreshold * 100)}%;"></div>
          </div>
        ` : `
          <div class="alert alert-success">
            ✓ 已滿額免運
          </div>
        `}
        
        <div style="border-top: 1px solid #e0e0e0; padding-top: 1rem; margin-bottom: 1rem;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span>商品小計</span>
            <span>${formatPrice(subtotal)}</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span>運費</span>
            <span>${shipping === 0 ? '免運' : formatPrice(shipping)}</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
            <span>稅金 (5%)</span>
            <span>${formatPrice(tax)}</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-top: 2px solid #e0e0e0; padding-top: 1rem;">
            <strong>應付總額</strong>
            <strong style="font-size: 1.3rem; color: var(--color-primary);">${formatPrice(total)}</strong>
          </div>
        </div>
        
        <button class="btn btn-primary btn-block" onclick="navigateTo('checkout.html')">
          前往結帳
        </button>
        <button class="btn btn-outline btn-block mt-2" onclick="navigateTo('shop.html')">
          繼續購物
        </button>
      </div>
    </div>
  `;
}

// 結帳頁邏輯
function initCheckoutPage() {
  renderCheckoutSummary();
  
  document.querySelector('form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    processCheckout();
  });
}

// 渲染結帳摘要
function renderCheckoutSummary() {
  const cart = Cart.getCart();
  const container = document.querySelector('.checkout-items');
  
  if (!container) return;
  
  container.innerHTML = `
    <h3>訂單明細</h3>
    <div style="margin-top: 1rem;">
      ${cart.map(item => `
        <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid #e0e0e0;">
          <span>${item.name} × ${item.quantity}</span>
          <span>${formatPrice(item.price * item.quantity)}</span>
        </div>
      `).join('')}
      <div style="display: flex; justify-content: space-between; padding: 1rem 0; font-weight: bold; border-top: 2px solid #e0e0e0; margin-top: 1rem;">
        <span>合計</span>
        <span style="color: var(--color-primary); font-size: 1.2rem;">${formatPrice(Cart.getTotal())}</span>
      </div>
    </div>
  `;
}

// 處理結帳
function processCheckout() {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const address = document.querySelector('#address').value;
  const shipping = document.querySelector('input[name="shipping"]:checked')?.value;
  const payment = document.querySelector('input[name="payment"]:checked')?.value;
  
  // 簡單驗證
  if (!name || !email || !phone || !address || !shipping || !payment) {
    showNotification('請填寫完整訊息', 'error');
    return;
  }
  
  if (Cart.getCart().length === 0) {
    showNotification('購物車是空的', 'error');
    return;
  }
  
  // 模擬訂單
  const orderNumber = 'ORD' + Date.now();
  const order = {
    orderNumber,
    name,
    email,
    phone,
    address,
    shipping,
    payment,
    items: Cart.getCart(),
    total: Cart.getTotal(),
    date: new Date().toLocaleString('zh-TW')
  };
  
  // 儲存訂單
  localStorage.setItem('lastOrder', JSON.stringify(order));
  
  // 清空購物車
  Cart.clearCart();
  updateCartBadge();
  
  // 顯示成功頁面
  showOrderSuccess(order);
}

// 顯示訂單成功
function showOrderSuccess(order) {
  const container = document.querySelector('.checkout-form');
  if (!container) return;
  
  container.innerHTML = `
    <div class="alert alert-success" style="text-align: center; padding: 2rem;">
      <h2>✓ 訂單已成立</h2>
      <p style="margin: 1rem 0;">感謝您的購買！</p>
      <p><strong>訂單編號：</strong> ${order.orderNumber}</p>
      <p style="margin-bottom: 1.5rem;">我們將盡快為您處理並配送。</p>
      <button class="btn btn-primary" onclick="navigateTo('index.html')">
        返回首頁
      </button>
    </div>
  `;
}
