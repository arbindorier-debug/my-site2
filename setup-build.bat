@echo off
setlocal

REM Переключаемся на ветку gh-pages
git checkout gh-pages

REM Сливаем изменения из main с разрешением на разные истории
git merge main --allow-unrelated-histories -m "Merge changes from main"

REM Собираем проект
echo Building project...
npm install
npm run build

IF %ERRORLEVEL% NEQ 0 (
    echo Build failed. Exiting...
    exit /b %ERRORLEVEL%
)

REM Копируем содержимое dist в корень ветки
echo Copying build files...
xcopy /Y /E /Q dist\* .\

REM Добавляем файлы в git
git add .

REM Коммитим изменения
git commit -m "Update site on GitHub Pages"

REM Пушим на GitHub
git push origin gh-pages

echo Done! Site should be updated on GitHub Pages.
pause
