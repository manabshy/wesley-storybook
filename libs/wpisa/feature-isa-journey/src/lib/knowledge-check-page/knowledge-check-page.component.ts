import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  ConfigService,
  Config,
  KnowledgeCheckService,
} from '@wesleyan-frontend/wpisa/data-access';
import { CustomStepperComponent } from '../components/custom-stepper/custom-stepper.component';
import { Router } from '@angular/router';
import { KnowledgeCheckFacade } from '../core/knowledge-check.facade';
import { isaRoutesNames } from '../isa-journey.routes.names';

@Component({
  selector: 'wes-knowledge-check-page',
  templateUrl: './knowledge-check-page.component.html',
  styleUrls: ['./knowledge-check-page.component.scss'],
})
export class KnowledgeCheckPageComponent implements OnInit {
  @ViewChild('stepper') stepper: CustomStepperComponent;

  pageData: Config;

  knowledgeCheckQ1Form: FormGroup;
  knowledgeCheckQ2Form: FormGroup;
  knowledgeCheckAttemptId: string;

  constructor(
    private configService: ConfigService,
    private knowledgeCheckFacade: KnowledgeCheckFacade,
    private builder: FormBuilder,
    private router: Router
  ) {
    this.pageData = this.configService.content;
    console.log(this.pageData);
  }

  ngOnInit(): void {
    this.knowledgeCheckQ1Form = this.builder.group({
      question1: [null, Validators.required],
    });
    this.knowledgeCheckQ2Form = this.builder.group({
      question2: [null, Validators.required],
    });
  }

  submitQuestion1() {
    this.knowledgeCheckFacade.submitQuestion(0, 'yes').subscribe(() => {
      //Show Question2
      this.stepper.next();
    });
  }
  submitQuestion2() {
    this.knowledgeCheckFacade.submitQuestion(1, 'yes').subscribe(() => {
      this.router.navigate([`/${isaRoutesNames.YOUR_DETAILS}`]);
    });
  }
}
