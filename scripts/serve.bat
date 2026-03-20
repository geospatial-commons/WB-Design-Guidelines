@echo off
echo Starting local server...
echo.

cd /d "%~dp0.."

if not exist "book\_build\html\index.html" (
    echo ERROR: Build not found. Run scripts\build.bat first.
    exit /b 1
)

echo Server starting at http://localhost:8080
echo Press Ctrl+C to stop.
echo.

call .venv\Scripts\activate.bat
python -m http.server 8080 --directory book/_build/html
