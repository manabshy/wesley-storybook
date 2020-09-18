import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetCalculatorComponent } from './target-calculator/target-calculator.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TargetCalculatorComponent],
  exports: [TargetCalculatorComponent],
})
export class SetATargetCalculatorFeaturePageModule {}
