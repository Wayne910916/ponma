#!/usr/bin/env python3
"""
膨嬤水餃 & 小帥甜點店 - 本地開發伺服器
在瀏覽器訪問: http://localhost:8000
按 Ctrl+C 停止伺服器
"""

import os
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path

class MyHTTPRequestHandler(SimpleHTTPRequestHandler):
    """自定義 HTTP 請求處理器"""
    
    def end_headers(self):
        """設定 HTTP 標頭"""
        # 防止快取，便於開發
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def do_GET(self):
        """處理 GET 請求"""
        # 如果存取根路徑，自動導向 index.html
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

def run_server(port=8000):
    """啟動伺服器"""
    server_address = ('', port)
    httpd = HTTPServer(server_address, MyHTTPRequestHandler)
    
    print(f"""
╔══════════════════════════════════════════════════════════════╗
║   🥟 膨嬤水餃 & 小帥甜點店 - 本地開發伺服器                    ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║   網址:  http://localhost:{port}                              ║
║   路徑:  {os.getcwd()}                  ║
║                                                              ║
║   在瀏覽器打開上面的網址即可訪問網站                          ║
║   按 Ctrl+C 停止伺服器                                        ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
    """)
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n✓ 伺服器已停止")
        sys.exit(0)

if __name__ == '__main__':
    # 檢查是否在正確的目錄
    if not Path('index.html').exists():
        print("❌ 錯誤：找不到 index.html")
        print("請確保在 wedsite design 資料夾中執行此腳本")
        sys.exit(1)
    
    run_server(8000)
