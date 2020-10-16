import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  CannotMatchCustomerContent,
  ConfigService,
} from '@wesleyan-frontend/find-my-fc/data-access';

@Component({
  selector: 'wes-cannot-find-customer-page',
  templateUrl: './cannot-find-customer-page.component.html',
  styleUrls: ['./cannot-find-customer-page.component.scss'],
})
export class CannotFindCustomerPageComponent implements OnInit {
  content: CannotMatchCustomerContent;

  constructor(private configService: ConfigService, private router: Router) {
    this.content = this.configService.content.cannotMatchCustomer;
  }

  ngOnInit(): void {}

  onFindFCButtonClicked() {
    this.router.navigate(['/']);
  }
}
