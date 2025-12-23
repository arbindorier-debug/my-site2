@echo off
echo Установка зависимостей...

:: Установка Radix UI
npm install @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group ^
@radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator ^
@radix-ui/react-slider @radix-ui/react-switch @radix-ui/react-tabs ^
@radix-ui/react-toggle-group @radix-ui/react-toggle @radix-ui/react-tooltip ^
@radix-ui/react-menubar @radix-ui/react-navigation-menu

:: Установка остальных зависимостей
npm install react-hook-form input-otp react-resizable-panels sonner next-themes clsx

echo Зависимости установлены.
echo.

echo Запуск сборки проекта...
npm run build

if %ERRORLEVEL% NEQ 0 (
    echo Ошибка сборки проекта!
    pause
) else (
    echo Сборка завершена успешно!
    pause
)
