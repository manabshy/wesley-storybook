import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

import { SharedUiDirectivesModule } from '@wesleyan-frontend/shared/ui-directives';

import { InvestCalculatorComponent } from './invest-calculator/invest-calculator.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUiDirectivesModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  declarations: [InvestCalculatorComponent, TabsComponent, TabComponent],
  exports: [InvestCalculatorComponent],
})
export class JustInvestCalculatorFeaturePageModule {}
