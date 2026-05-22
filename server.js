#!/usr/bin/env node

/**
 * 膨嬤水餃 & 小帥甜點店 - Node.js 本地伺服器
 * 執行: node server.js
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8000;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  
  // 如果是根路徑，導向 index.html
  if (filePath === './') {
    filePath = './index.html';
  }
  
  const ext = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  
  // 防止快取
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // 404 錯誤
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<!DOCTYPE html><html><head><meta charset="utf-8"><title>404</title></head><body><h1>404 - 找不到頁面</h1><p>請求的文件不存在。</p></body></html>');
    } else {
      // 成功
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║   🥟 膨嬤水餃 & 小帥甜點店 - Node.js 伺服器                    ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║   網址:  http://localhost:${PORT}                            ║
║   路徑:  ${__dirname}                ║
║                                                              ║
║   在瀏覽器打開上面的網址即可訪問網站                          ║
║   按 Ctrl+C 停止伺服器                                        ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
  `);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ 錯誤：連接埠 ${PORT} 已被佔用`);
    console.error('請關閉其他使用此連接埠的應用，或修改 PORT 變數');
  } else {
    console.error('伺服器錯誤:', err);
  }
  process.exit(1);
});

process.on('SIGINT', () => {
  console.log('\n\n✓ 伺服器已停止');
  process.exit(0);
});
