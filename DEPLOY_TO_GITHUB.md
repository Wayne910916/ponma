# 一鍵部署到 GitHub Pages

## 🚀 使用方法

### 方式 1：Web 介面上傳（最簡單，適合非技術人員）

1. **建立 GitHub 帳戶** → [github.com/signup](https://github.com/signup)

2. **建立新 Repository**
   - 點擊 `+` → `New repository`
   - Repository name: `pengmei-dumpling`（可任意命名）
   - 選擇 **Public**
   - ✓ Add a README file
   - 點擊 **Create repository**

3. **上傳檔案**
   - 點擊 **Add file** → **Upload files**
   - 選擇這些檔案：
     ```
     index.html
     shop.html
     product.html
     cart.html
     checkout.html
     style.css
     products.js
     cart.js
     main.js
     ```
   - 點擊 **Commit changes**

4. **啟用 GitHub Pages**
   - 進入 Repository → **Settings** → **Pages**
   - Source: Branch `main`, folder `/(root)`
   - 點擊 **Save**
   - 等待 1-2 分鐘

5. **獲取網址**
   ```
   https://[你的用戶名].github.io/pengmei-dumpling
   ```

---

### 方式 2：Git 命令行上傳（適合開發者）

```bash
# 1. 初始化 Git 倉庫
git init
git add .
git commit -m "初始提交：膨嬤水餃 & 小帥甜點店官網"

# 2. 新增遠端倉庫
git remote add origin https://github.com/你的用戶名/pengmei-dumpling.git
git branch -M main

# 3. 推送到 GitHub
git push -u origin main
```

然後在 GitHub 設置中啟用 Pages 即可！

---

## ✨ 完成後可得到

- ✅ **線上網址**：可直接在瀏覽器打開
- ✅ **免費 HTTPS**：GitHub 自動提供安全連接
- ✅ **無限流量**：GitHub Pages 完全免費
- ✅ **自動更新**：推送新檔案即自動更新
- ✅ **可分享**：複製網址分享給任何人

---

## 🎯 分享給別人

完成後，您可以直接分享網址：

```
👉 https://[你的用戶名].github.io/pengmei-dumpling
```

別人點擊就能直接看到您的完整網站！🎉

---

**不想自己部署？**

我可以幫您直接建立一個測試網址，聯絡我！
