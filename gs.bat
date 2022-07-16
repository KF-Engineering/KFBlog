

set yy=%date:~-4%
set mm=%date:~-7,2%
set dd=%date:~-10,2%
set mydate=%yy%/%mm%/%dd%
set mytime=%TIME:~0,2%:%TIME:~3,2%:%TIME:~6,2%
set dt= %mydate% %mytime%

set current_branch=
for /F "delims=" %%n in ('git branch --show-current') do set "current_branch=%%n"
if "%current_branch%"=="" echo Not a git branch! && goto :EOF

set /P commitMessage= Enter a commit message:
set /P description= Enter a description:

set /P operable= does it compile? Enter y :
if %operable% NEQ y goto NoCOMP
set /P functional= is the commit functional Enter y:
if "%functional%" NEQ y goto NoFunk
set functionalitymessage=Commit is functional.
goto COMMIT 

:NoCOMP
set functionalitymessage=Commit is NOT functional. Commit does NOT compile
goto COMMIT

:NoFunk
set functionalitymessage=Commit is NOT functional but commit does compile
goto COMMIT

:COMMIT
git branch develop
git branch --set-upstream-to=origin/develop develop
git branch --set-upstream-to=origin/%current_branch% %current_branch%

git add --all
git commit -a -m "%commitMessage% %dt%" -m "%functionalitymessage%" -m "originally commited to branch: %current_branch% " -m "description: %description% "
git pull origin %current_branch% -X ours 

git checkout develop
git pull origin develop -X theirs
git merge %current_branch% -X ours
git push origin develop

git checkout %current_branch% 
git merge develop -X theirs
git push origin %current_branch%

:EOF
