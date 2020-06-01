import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';

import {
  ConfigService,
  KnowledgeCheckStep,
} from '@wesleyan-frontend/wpisa/data-access';

@Component({
  selector: 'wes-knowledge-check-q1-form',
  templateUrl: './knowledge-check-q1-form.component.html',
  styleUrls: ['./knowledge-check-q1-form.component.scss'],
})
export class KnowledgeCheckQ1FormComponent implements OnInit, OnDestroy {
  formQ1: FormGroup;
  content: KnowledgeCheckStep;

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager,
    private configService: ConfigService
  ) {
    this.content = this.configService.content.knowledgeCheck.step1;
  }

  ngOnInit(): void {
    this.formQ1 = this.builder.group({
      question1: [null, Validators.required],
    });

    this.formsManager.upsert('knowledgeCheckQ1', this.formQ1, {
      withInitialValue: true,
    });
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('knowledgeCheckQ1');
  }
}
