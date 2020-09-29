import { Component, OnInit } from '@angular/core';
import {
  ConfigService,
  Config,
  TargetCalculatorDTO,
  TargetRegularCalculatorResponse,
  TargetOneOffCalculatorResponse,
} from '@wesleyan-frontend/set-a-target-calculator/data-access';
import { TargetRegularCalculatorFacade } from '../core/services/target-regular-calculator.facade';
import { TargetOneOffCalculatorFacade } from '../core/services/target-one-off-calculator.facade';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'wes-target-calculator',
  templateUrl: './target-calculator.component.html',
  styleUrls: ['./target-calculator.component.scss'],
})
export class TargetCalculatorComponent implements OnInit {
  config: Config;
  contributionAmount = 0;
  term = 0;
  prefix = '';
  regularCalculatorResults: TargetRegularCalculatorResponse;
  oneOffCalculatorResults: TargetOneOffCalculatorResponse;
  calculatorForm: FormGroup;
  targetAmountControl: AbstractControl;
  termControl: AbstractControl;
  riskCodeControl: AbstractControl;
  frequencyControl: AbstractControl;
  showError = false;
  showResults = false;

  constructor(
    private configService: ConfigService,
    private formBuilder: FormBuilder,
    private targetRegularCalculatorFacade: TargetRegularCalculatorFacade,
    private targetOneOffCalculatorFacade: TargetOneOffCalculatorFacade
  ) {
    this.config = this.configService.content;
    this.prefix = this.config.calculator.target.sliders[0].prefix;
    this.calculatorForm = this.formBuilder.group({
      targetAmount: [
        this.config.calculator.target.sliders[0].defaultValue,
        [
          Validators.required,
          Validators.min(this.config.calculator.target.sliders[0].sliderMin),
          Validators.max(this.config.calculator.target.sliders[0].sliderMax),
        ],
      ],
      term: [
        this.config.calculator.target.sliders[1].value,
        [
          Validators.min(this.config.calculator.target.sliders[1].sliderMin),
          Validators.max(this.config.calculator.target.sliders[1].sliderMax),
        ],
      ],

      riskCode: ['', [Validators.required]],
      frequency: ['', [Validators.required]],
    });

    this.targetAmountControl = this.calculatorForm.get('targetAmount');
    this.termControl = this.calculatorForm.get('term');
    this.riskCodeControl = this.calculatorForm.get('riskCode');
    this.frequencyControl = this.calculatorForm.get('frequency');
  }

  ngOnInit(): void {
    this.frequencyControl.valueChanges
      .pipe(
        tap((v) => {
          if (this.showResults) {
            this.resetResults();
          }
        })
      )
      .subscribe();
  }

  onSubmit() {
    this.showResults = true;
    this.showError = false;

    const riskCode = this.calculatorForm.get('riskCode').value;
    const targetAmount = this.calculatorForm.get('targetAmount').value;
    const term = this.calculatorForm.get('term').value;
    const frequency = this.calculatorForm.get('frequency').value;

    if (frequency === 'MONTHLY') {
      this.targetRegularCalculatorFacade
        .submitTargetRegularCalculator(
          0,
          0,
          targetAmount,
          frequency,
          riskCode,
          term
        )
        .subscribe(
          (res) => {
            this.regularCalculatorResults = res;
            this.contributionAmount = res.contributions.amount;
          },
          (error) => {
            this.showError = true;
          }
        );
    }

    if (frequency === 'ANNUALLY') {
      this.targetOneOffCalculatorFacade
        .submitTargetOneOffCalculator(
          0,
          0,
          targetAmount,
          frequency,
          riskCode,
          term
        )
        .subscribe(
          (res) => {
            this.oneOffCalculatorResults = res;
            this.contributionAmount = res.contribution;
          },
          (error) => {
            this.showError = true;
          }
        );
    }
  }

  yearFormatter(value: string, year) {
    return value.replace('#termYears#', year.toString());
  }

  handleBackgroundColour(value, min: number, max: number) {
    let backgroundSize: string;

    if (value <= min || value === '') {
      backgroundSize = '0 100%';
    } else if (value <= max) {
      backgroundSize = `${((value - min) * 100) / (max - min)}% 80%`;
    } else {
      backgroundSize = '100% 100%';
    }

    return backgroundSize;
  }

  resetResults() {
    this.showResults = false;
    this.contributionAmount = 0;
  }
}
