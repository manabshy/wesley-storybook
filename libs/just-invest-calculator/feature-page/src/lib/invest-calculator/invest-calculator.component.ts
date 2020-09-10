import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from '@wesleyan-frontend/just-invest-calculator/data-access';

@Component({
  selector: 'wes-invest-calculator',
  templateUrl: './invest-calculator.component.html',
  styleUrls: ['./invest-calculator.component.scss']
})

export class InvestCalculatorComponent implements OnInit {
 config : Config
 inputPerMonth = 0;
 inputLumpsum = 0;
 inputTerm = 0;

  constructor(private configService:ConfigService){
    this.config = this.configService.content;
    this.inputTerm = this.config.calculator.budget.sliders[2].value;
  }
  onInvestPerMonthChange(event:any){ this.inputPerMonth = event.target.value;}
  onLumpSumChange(event:any){ this.inputLumpsum = event.target.value;}
  onTermChange(event:any){ this.inputTerm = event.target.value;}
  ngOnInit(): void {
  }

}
