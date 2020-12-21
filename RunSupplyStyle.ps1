npm run supply:style

Copy-Item -Path "C:\VSTS\Digital Programme\Wesleyan-Frontend\dist\apps\style\*.css" -Destination "C:\inetpub\wwwroot\WesleyanPlatform.dev.local\assets\Wesleyan\common" -Recurse -force
Copy-Item -Path "C:\VSTS\Digital Programme\Wesleyan-Frontend\dist\apps\style\*.css" -Destination "C:\VSTS\Digital Programme\Sitecore Platform\src\Project\WesleyanWebsite\code\assets\Wesleyan\common" -Recurse -force
