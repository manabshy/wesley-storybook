import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestCalculatorComponent } from './invest-calculator/invest-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  declarations: [InvestCalculatorComponent, TabsComponent, TabComponent],
  exports: [InvestCalculatorComponent],
})
export class JustInvestCalculatorFeaturePageModule {}
