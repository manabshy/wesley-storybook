npm run supply:find-my-fc

Copy-Item -Path "C:\VSTS\Digital Programme\Wesleyan-Frontend\dist\apps\find-my-fc\*.js" -Destination "C:\inetpub\wwwroot\WesleyanPlatform.dev.local\assets\Wesleyan\find-my-fc" -Recurse -force
Copy-Item -Path "C:\VSTS\Digital Programme\Wesleyan-Frontend\dist\apps\find-my-fc\*.js" -Destination "C:\VSTS\Digital Programme\Sitecore Platform\src\Project\WesleyanWebsite\code\assets\Wesleyan\find-my-fc" -Recurse -force

Copy-Item -Path "C:\VSTS\Digital Programme\Wesleyan-Frontend\dist\apps\find-my-fc\*.css" -Destination "C:\inetpub\wwwroot\WesleyanPlatform.dev.local\assets\Wesleyan\common" -Recurse -force
Copy-Item -Path "C:\VSTS\Digital Programme\Wesleyan-Frontend\dist\apps\find-my-fc\*.css" -Destination "C:\VSTS\Digital Programme\Sitecore Platform\src\Project\WesleyanWebsite\code\assets\Wesleyan\common" -Recurse -force
