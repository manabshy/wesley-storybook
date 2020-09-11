import { NgModule ,Component, OnInit } from '@angular/core';
import { ConfigService, Config ,BudgetCalculatorResponse} from '@wesleyan-frontend/just-invest-calculator/data-access';
import { BudgetCalculatorFacade} from '../core/services/invest-calculator.facade';
import { FormBuilder, FormGroup } from '@angular/forms';
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
 calculatorForm: FormGroup
  constructor(private configService: ConfigService, 
    private formBuilder: FormBuilder,
    private budgetCalculatorFacade : BudgetCalculatorFacade){
    this.config = this.configService.content;
    this.inputTerm = this.config.calculator.budget.sliders[2].value;
    this.calculatorForm = this.formBuilder.group({
      balanceAmount: this.config.calculator.budget.initialValues.balanceAmount,
      contributionAmount: this.config.calculator.budget.initialValues.contributionAmount,
      frequency:  this.config.calculator.budget.initialValues.frequency,
      riskCode: '0',
      term: this.config.calculator.budget.initialValues.initialTermYears
    });
  }
  onInvestPerMonthChange(event:any){ this.inputPerMonth = event.target.value;}
  onLumpSumChange(event:any){ this.inputLumpsum = event.target.value;}
  onTermChange(event:any){ this.inputTerm = event.target.value;}
  ngOnInit(): void {
  }
  
  onSubmit() {
    // Process data here
    //this.calculatorForm.reset();
    console.log('Your calculator data has been submitted', this.calculatorForm.value);
    this.budgetCalculatorFacade.submitBudgetCalculator(
      this.calculatorForm.get("balanceAmount").value,
      this.calculatorForm.get("contributionAmount").value,
      this.calculatorForm.get("frequency").value,
      this.calculatorForm.get("riskCode").value,
      this.calculatorForm.get("term").value
      ).subscribe(res => {
        this.calculatorResults =res
      });
  }
}
