import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from '@wesleyan-frontend/dashboard-help-and-support/data-access';
@Component({
  selector: 'wes-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  config: Config
  constructor(private configService:ConfigService){
    this.config =this.configService.content
  }

  ngOnInit(): void {
  }

}
