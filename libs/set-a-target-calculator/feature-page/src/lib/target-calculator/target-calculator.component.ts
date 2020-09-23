import { Component, OnInit } from '@angular/core';
import {
  ConfigService,
  Config,
  TargetRegularCalculatorDTO,
  TargetRegularCalculatorResponse,
} from '@wesleyan-frontend/set-a-target-calculator/data-access';
import { TargetRegularCalculatorFacade } from '../core/services/target-regular-calculator.facade';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'wes-target-calculator',
  templateUrl: './target-calculator.component.html',
  styleUrls: ['./target-calculator.component.scss'],
})
export class TargetCalculatorComponent implements OnInit {
  config: Config;
  inputTarget = 0;
  inputTerm = 0;
  prefix = '';
  balanceAmount = 0;
  contributionAmount = 0;
  targetAmount = 0;
  frequency = '';
  riskCode = '0';
  term = 5;
  calculatorResults: TargetRegularCalculatorResponse;
  calculatorForm: FormGroup;

  constructor(
    private configService: ConfigService,
    private formBuilder: FormBuilder,
    private targetRegularCalculatorFacade: TargetRegularCalculatorFacade
  ) {
    this.config = this.configService.content;
    this.inputTerm = this.config.calculator.target.sliders[1].value;
    this.prefix = this.config.calculator.target.sliders[0].prefix;
    this.calculatorForm = this.formBuilder.group({
      balanceAmount: 0,
      contributionAmount: 0,
      targetAmount: [this.config.calculator.target.sliders[0].defaultValue],
      frequency: '',
      riskCode: '0',
      term: this.config.calculator.target.sliders[1].value,
    });
  }

  onTargetChange(event: any) {
    this.inputTarget = event.target.value;
  }
  onTermChange(event: any) {
    this.inputTerm = event.target.value;
  }

  ngOnInit(): void {}

  onSubmit() {
    // Process data here
    // this.calculatorForm.reset();
    console.log(
      'Your calculator data has been submitted',
      this.calculatorForm.value
    );

    this.riskCode = this.calculatorForm.get('riskCode').value;
    this.targetAmount = this.calculatorForm.get('targetAmount').value;
    this.term = this.calculatorForm.get('term').value;
    this.frequency = this.calculatorForm.get('frequency').value;

    this.targetRegularCalculatorFacade
      .submitTargetRegularCalculator(
        this.balanceAmount,
        this.contributionAmount,
        this.targetAmount,
        this.frequency,
        this.riskCode,
        this.term
      )
      .subscribe((res) => {
        this.calculatorResults = res;
        console.log('Your calculator data response', res);
      });
  }
}
