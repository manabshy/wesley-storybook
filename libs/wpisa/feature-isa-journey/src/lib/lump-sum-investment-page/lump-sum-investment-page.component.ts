import { Component, OnInit } from '@angular/core';
import {
  InvestmentOptions,
  ConfigService,
  LumpSumPayment,
} from '@wesleyan-frontend/wpisa/data-access';
import { InvestmentOptionsFacade } from '../core/investment-options.facade';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'wes-lump-sum-investment-page',
  templateUrl: './lump-sum-investment-page.component.html',
  styleUrls: ['./lump-sum-investment-page.component.scss'],
})
export class LumpSumInvestmentPageComponent implements OnInit {
  pageContent: LumpSumPayment;

  formValid$ = this.formsManager.validityChanges('investmentOptions');

  constructor(
    private configService: ConfigService,
    private investmentOptionsFacade: InvestmentOptionsFacade,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title
  ) {
    this.pageContent = this.configService.content.investmentOptions.singleLumpSum.lumpSumPayment;
    console.log(this.pageContent);

    this.titleService.setTitle(this.pageContent.heading);
  }

  ngOnInit() {}
}
