@echo off
chcp 65001 >nul
cls

echo.
echo ╔══════════════════════════════════════════════════════════════╗
echo ║   🥟 膨嬤水餃 ^& 小帥甜點店 - 本地伺服器啟動                   ║
echo ╚══════════════════════════════════════════════════════════════╝
echo.

cd /d "%~dp0"

REM 檢查 Python 是否已安裝
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 找不到 Python，請先安裝 Python 3
    echo 下載網址: https://www.python.org/
    pause
    exit /b 1
)

echo ✓ Python 已檢測到
echo.
echo 正在啟動伺服器...
echo.
echo 網址: http://localhost:8000
echo.
echo 在瀏覽器中打開上面的網址即可訪問您的網站
echo 按 Ctrl+C 停止伺服器
echo.

python server.py
