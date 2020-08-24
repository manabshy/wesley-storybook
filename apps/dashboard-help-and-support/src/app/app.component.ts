import { Component } from '@angular/core';
import { ConfigService, Config } from '@wesleyan-frontend/dashboard-help-and-support/data-access';

@Component({
  selector: 'wesleyan-frontend-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  config: Config
 constructor(private configService:ConfigService){
   this.config =this.configService.content
 }
}
