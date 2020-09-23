import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetCalculatorComponent } from './target-calculator/target-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [TargetCalculatorComponent],
  exports: [TargetCalculatorComponent],
})
export class SetATargetCalculatorFeaturePageModule {}
