@echo off
echo Building Jupyter Book...
echo.

cd /d "%~dp0.."

if not exist ".venv\Scripts\activate.bat" (
    echo ERROR: Virtual environment not found.
    echo Run: python -m venv .venv
    echo Then: .venv\Scripts\activate
    echo Then: pip install -e .
    exit /b 1
)

call .venv\Scripts\activate.bat
jupyter-book build book/

if %ERRORLEVEL% EQU 0 (
    echo.
    echo Build successful!
    echo Output: book\_build\html\index.html
) else (
    echo.
    echo Build failed with error code %ERRORLEVEL%
)
