import { Component, OnInit, ViewChild } from '@angular/core';

import { ConfigService, Config } from '@wesleyan-frontend/wpisa/data-access';
import { CustomStepperComponent } from '../components/custom-stepper/custom-stepper.component';

@Component({
  selector: 'wes-knowledge-check-page',
  templateUrl: './knowledge-check-page.component.html',
  styleUrls: ['./knowledge-check-page.component.scss'],
})
export class KnowledgeCheckPageComponent implements OnInit {
  @ViewChild('stepper') stepper: CustomStepperComponent;

  pageData: Config;
  constructor(private configService: ConfigService) {
    this.pageData = this.configService.content;
    console.log(this.pageData);
  }

  ngOnInit(): void {}

  submitQuestion1() {
    //If Success go to Question2
    //If Fail go to error page
    this.stepper.next();
  }
  submitQuestion2() {
    //If Success go to YourDetails
    //If Fail go to error page
  }
}
