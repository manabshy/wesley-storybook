npm run supply:isa

Copy-Item -Path "C:\VSTS\Digital Programme\Wesleyan-Frontend\dist\apps\wpisa\*.js" -Destination "C:\inetpub\wwwroot\WesleyanPlatform.dev.local\assets\Wesleyan\isa" -Recurse -force
Copy-Item -Path "C:\VSTS\Digital Programme\Wesleyan-Frontend\dist\apps\wpisa\*.js" -Destination "C:\VSTS\Digital Programme\Sitecore Platform\src\Project\WesleyanWebsite\code\assets\Wesleyan\isa" -Recurse -force

Copy-Item -Path "C:\VSTS\Digital Programme\Wesleyan-Frontend\dist\apps\wpisa\*.css" -Destination "C:\inetpub\wwwroot\WesleyanPlatform.dev.local\assets\Wesleyan\isa" -Recurse -force
Copy-Item -Path "C:\VSTS\Digital Programme\Wesleyan-Frontend\dist\apps\wpisa\*.css" -Destination "C:\VSTS\Digital Programme\Sitecore Platform\src\Project\WesleyanWebsite\code\assets\Wesleyan\isa" -Recurse -force
