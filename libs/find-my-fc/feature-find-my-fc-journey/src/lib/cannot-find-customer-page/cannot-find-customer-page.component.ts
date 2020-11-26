import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import {
  CannotMatchCustomerContent,
  ConfigService,
} from '@wesleyan-frontend/find-my-fc/data-access';
import { routesNames } from '@wesleyan-frontend/find-my-fc/util-const';

@Component({
  selector: 'wes-cannot-find-customer-page',
  templateUrl: './cannot-find-customer-page.component.html',
  styleUrls: ['./cannot-find-customer-page.component.scss'],
})
export class CannotFindCustomerPageComponent {
  content: CannotMatchCustomerContent;

  constructor(
    private configService: ConfigService,
    private router: Router,
    private titleService: Title
  ) {
    this.content = this.configService.content.cannotMatchCustomer;
    this.titleService.setTitle(this.content.metaTitle);
  }

  onFindFCButtonClicked() {
    this.router.navigate([routesNames.PROFESSION_SELECT]);
  }
}
