// 購物車邏輯（使用 LocalStorage）
const Cart = {
  storageKey: 'frozen_dessert_cart',
  
  // 初始化
  init() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  },

  // 取得購物車
  getCart() {
    const cart = localStorage.getItem(this.storageKey);
    return cart ? JSON.parse(cart) : [];
  },

  // 新增到購物車
  addToCart(productId, quantity = 1) {
    const cart = this.getCart();
    const product = getProductById(productId);
    
    if (!product) {
      console.error('商品未找到');
      return false;
    }

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: productId,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product.image
      });
    }
    
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
    return true;
  },

  // 移除購物車商品
  removeFromCart(productId) {
    let cart = this.getCart();
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  },

  // 更新數量
  updateQuantity(productId, quantity) {
    const cart = this.getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        localStorage.setItem(this.storageKey, JSON.stringify(cart));
      }
    }
  },

  // 清空購物車
  clearCart() {
    localStorage.setItem(this.storageKey, JSON.stringify([]));
  },

  // 計算小計
  getSubtotal() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  // 計算運費
  getShippingFee() {
    const subtotal = this.getSubtotal();
    const FREE_SHIPPING_THRESHOLD = 1200;
    
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      return 0;
    }
    return 80; // 冷凍物流費用
  },

  // 計算稅金（簡化模型，假設 5%）
  getTax() {
    const subtotal = this.getSubtotal();
    return Math.round(subtotal * 0.05);
  },

  // 計算總額
  getTotal() {
    return this.getSubtotal() + this.getShippingFee() + this.getTax();
  },

  // 取得購物車數量
  getCartCount() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }
};

// 初始化購物車
Cart.init();
