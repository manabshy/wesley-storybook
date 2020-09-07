import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from '@wesleyan-frontend/just-invest-calculator/data-access';

@Component({
  selector: 'wes-invest-calculator',
  templateUrl: './invest-calculator.component.html',
  styleUrls: ['./invest-calculator.component.scss']
})
export class InvestCalculatorComponent implements OnInit {
 config : Config
  constructor(private configService:ConfigService){
    this.config =this.configService.content;
  }

  ngOnInit(): void {
  }

}
