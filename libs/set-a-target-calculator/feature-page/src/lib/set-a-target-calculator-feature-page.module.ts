import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetCalculatorComponent } from './target-calculator/target-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUiDirectivesModule } from '@wesleyan-frontend/shared/ui-directives';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUiDirectivesModule,
  ],
  declarations: [TargetCalculatorComponent],
  exports: [TargetCalculatorComponent],
})
export class SetATargetCalculatorFeaturePageModule {}
