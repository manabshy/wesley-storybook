import { NgModule, Component, OnInit } from '@angular/core';
import {
  ConfigService,
  Config,
  BudgetCalculatorResponse,
} from '@wesleyan-frontend/just-invest-calculator/data-access';
import { BudgetCalculatorFacade } from '../core/services/invest-calculator.facade';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'wes-invest-calculator',
  templateUrl: './invest-calculator.component.html',
  styleUrls: ['./invest-calculator.component.scss'],
})
export class InvestCalculatorComponent implements OnInit {
  config: Config;
  inputPerMonth = 0;
  inputLumpsum = 0;
  inputTerm = 0;
  balanceAmount = 0;
  contributionAmount = 0;
  term = 0;
  prefix = '';
  totalContribution = 0;
  high = 0;
  medium = 0;
  low = 0;
  calculatorResults: BudgetCalculatorResponse;
  calculatorForm: FormGroup;
  contributionAmountControl;
  balanceAmountControl;
  termControl;

  calculatorChartOptions: any;
  graphData: { terms: number[]; series: number[][] };
  gold = '#FEBD11';
  charcoal = '#575757';
  options = {
    grid: { left: 20, right: 75 },
    xAxis: {
      axisLine: {
        lineStyle: {
          color: '#1e263080',
        },
      },
      name: this.configService.content.calculator.budget.results.graphs
        .xAxisLabel,
      type: 'category',
      nameLocation: 'center',
      nameGap: 35,
      boundaryGap: false,
      data: [],
    },
    yAxis: {
      min: 'dataMin',
      axisLine: {
        lineStyle: {
          color: '#1e263080',
        },
      },
      type: 'value',
      name: this.configService.content.calculator.budget.results.graphs
        .yAxisLabel,
      position: 'right',
      nameLocation: 'center',
      nameRotate: -90,
      nameGap: 60,
      axisLabel: {
        // Function to add Letters. i.e. 1000 > 1K
        formatter: (a, b) => {
          if (a < 1000000) {
            if (b === 0) {
              return `0`;
            }
            const value = `${a / 1000}k`;
            return value;
          } else {
            let c = `${a}`.length;
            const d = 10 ** b;
            const value = `${(((a * d) / 10 ** (c -= c % 3) + 0.5) | 0) / d}${
              ' kMGTPE'[c / 3]
            }`;
            return value;
          }
        },
      },
    },
    color: [this.gold, this.charcoal, this.gold],
    backgroundColor: '#FFFFFF',
    textStyle: {
      fontFamily: 'Open Sans',
    },
    tooltip: {
      trigger: 'item',
      position: 'top',
      padding: [10, 20, 10, 20],
      formatter: (value) => {
        const year = value.name;
        const number = value.value.toLocaleString();
        return `<div class="text-center"><span style="color: #555263; font-size: 12px;">YEAR ${year}</span><br /><strong style="font-size: 20px;">£${number}</strong></div>`;
      },
      extraCssText:
        'box-shadow: 0 0 8px 0 rgba(0,0,0,0.15); background-color: #FFFFFF; color: #000; border-radius: 2px;',
    },
    series: [],
  };
  constructor(
    private configService: ConfigService,
    private formBuilder: FormBuilder,
    private budgetCalculatorFacade: BudgetCalculatorFacade
  ) {
    this.config = this.configService.content;
    this.inputTerm = this.config.calculator.budget.sliders[2].value;
    this.prefix = this.config.calculator.budget.sliders[0].prefix;
    this.calculatorForm = this.formBuilder.group({
      contributionAmount: [
        this.config.calculator.budget.initialValues.contributionAmount,
        [
          Validators.required,
          Validators.min(this.config.calculator.budget.sliders[0].inputMin),
          Validators.max(this.config.calculator.budget.sliders[0].inputMax),
        ],
      ],
      balanceAmount: [
        this.config.calculator.budget.initialValues.balanceAmount,
        [
          Validators.min(this.config.calculator.budget.sliders[1].inputMin),
          Validators.max(this.config.calculator.budget.sliders[1].inputMax),
        ],
      ],
      term: [
        this.config.calculator.budget.initialValues.initialTermYears,
        [
          Validators.min(this.config.calculator.budget.sliders[2].inputMin),
          Validators.max(this.config.calculator.budget.sliders[2].inputMax),
        ],
      ],
      frequency: this.config.calculator.budget.initialValues.frequency,
      riskCode: [null, [Validators.required]],
    });

    this.contributionAmountControl = this.calculatorForm.get(
      'contributionAmount'
    );
    this.balanceAmountControl = this.calculatorForm.get('balanceAmount');
    this.termControl = this.calculatorForm.get('term');
  }

  getTotalContribution() {
    return this.contributionAmount * 12 * this.term + this.balanceAmount;
  }
  ngOnInit(): void {}

  onSubmit() {
    // Process data here
    //this.calculatorForm.reset();
    console.log(
      'Your calculator data has been submitted',
      this.calculatorForm.value
    );
    this.balanceAmount = this.calculatorForm.get('balanceAmount').value;
    this.contributionAmount = this.calculatorForm.get(
      'contributionAmount'
    ).value;
    this.term = this.calculatorForm.get('term').value;
    this.budgetCalculatorFacade
      .submitBudgetCalculator(
        this.calculatorForm.get('balanceAmount').value,
        this.calculatorForm.get('contributionAmount').value,
        this.calculatorForm.get('frequency').value,
        this.calculatorForm.get('riskCode').value,
        this.calculatorForm.get('term').value
      )
      .subscribe((res) => {
        this.calculatorResults = res;
        this.graphData = this.formatLineChartData(res.results);
        console.log(this.graphData);
        this.options.series = this.getSeries(this.graphData.series);
        this.options.xAxis.data = this.convertXaxisValues(this.graphData.terms);
        this.options = { ...this.options };
        console.log(this.options);
        this.totalContribution = this.getTotalContribution();
        this.low = Math.max.apply(Math, this.options.series[0].data);
        this.medium = Math.max.apply(Math, this.options.series[1].data);
        this.high = Math.max.apply(Math, this.options.series[2].data);
      });
  }

  selectGraphLine(graphLine: 'high' | 'medium' | 'low') {
    this.options = { ...this.options, color: this.getColors(graphLine) };
    console.log(this.options.color);
  }
  getSeries(series) {
    return series.map((dataSet) => {
      const newArray = [];
      dataSet.forEach((value) => newArray.push(Math.round(value)));

      return {
        type: 'line',
        data: newArray,
        lineStyle: {
          normal: {
            width: 4,
          },
        },
      };
    });
  }
  convertXaxisValues = (values) => {
    let year = 1;
    const newXAxisValues = [];

    values.map(() => newXAxisValues.push(year++));
    return newXAxisValues;
  };

  getColors(label) {
    if (label.toLowerCase() === 'high') {
      return [this.gold, this.gold, this.charcoal];
    } else if (label.toLowerCase() === 'medium') {
      return [this.gold, this.charcoal, this.gold];
    }
    return [this.charcoal, this.gold, this.gold];
  }
  formatLineChartData = (array) => {
    const values = array.map((newArray) =>
      newArray.terms.map((item) => item.value)
    );
    const terms = array[0].terms.map((item) => item.term);
    const seriesData = values.map((value) => value);

    return {
      terms,
      series: seriesData,
    };
  };
}
