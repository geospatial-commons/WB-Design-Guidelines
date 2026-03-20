@echo off
echo Cleaning build artifacts...
echo.

cd /d "%~dp0.."

if exist "book\_build" (
    rmdir /s /q "book\_build"
    echo Removed book\_build\
) else (
    echo No build artifacts found.
)

echo.
echo Clean complete.
