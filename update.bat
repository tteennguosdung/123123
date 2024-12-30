@echo off
set "file=\app\config\data.ts"

start /wait notepad "%~dp0%file%"

cd "%~dp0"
git add -A
git commit -m "Auto commit after editing data.ts"
git push origin main --force
