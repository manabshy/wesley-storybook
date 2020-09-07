import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestCalculatorComponent } from './invest-calculator/invest-calculator.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InvestCalculatorComponent],
  exports: [InvestCalculatorComponent]
})
export class JustInvestCalculatorFeaturePageModule {}
