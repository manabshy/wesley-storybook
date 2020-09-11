import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestCalculatorComponent } from './invest-calculator/invest-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [InvestCalculatorComponent],
  exports: [InvestCalculatorComponent]
})
export class JustInvestCalculatorFeaturePageModule {}
