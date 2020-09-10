import { NgModule ,Component, OnInit } from '@angular/core';
import { ConfigService, Config ,BudgetCalculatorResponse} from '@wesleyan-frontend/just-invest-calculator/data-access';
import { BudgetCalculatorFacade} from '../core/services/invest-calculator.facade';
import { FormBuilder, Validators } from '@angular/forms';
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
 calculatorResults : BudgetCalculatorResponse;
 calculatorForm;

  constructor(private configService:ConfigService, 
    private budgetCalculatorFacade : BudgetCalculatorFacade,
    private formBuilder: FormBuilder
    ){
    this.config = this.configService.content;
    this.inputTerm = this.config.calculator.budget.sliders[2].value;
    this.calculatorForm = this.formBuilder.group({ name });
    console.log ("id");
  }
  onInvestPerMonthChange(event:any){ this.inputPerMonth = event.target.value;}
  onLumpSumChange(event:any){ this.inputLumpsum = event.target.value;}
  onTermChange(event:any){ this.inputTerm = event.target.value;}
  ngOnInit(): void {
  }
  


  onSumbit(){
    //this.config;
    this.budgetCalculatorFacade.submitBudgetCalculator(2000,500,"MONTHLY","wesleyan_risk3",5).subscribe(res => {this.calculatorResults =res});
  }

}
