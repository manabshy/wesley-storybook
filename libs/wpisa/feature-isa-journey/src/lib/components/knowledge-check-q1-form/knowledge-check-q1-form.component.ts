import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';

import {
  ConfigService,
  KnowledgeCheckStep,
} from '@wesleyan-frontend/wpisa/data-access';
import { AppForms } from '../../core/app-forms.interface';
import { AppStateFacade } from '../../core/app-state-facade';

@Component({
  selector: 'wes-knowledge-check-q1-form',
  templateUrl: './knowledge-check-q1-form.component.html',
  styleUrls: ['./knowledge-check-q1-form.component.scss'],
})
export class KnowledgeCheckQ1FormComponent implements OnInit, OnDestroy {
  formQ1: FormGroup = this.builder.group({
    question1: [null, Validators.required],
  });
  content: KnowledgeCheckStep;

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager<AppForms>,
    private configService: ConfigService,
    private appState: AppStateFacade
  ) {
    this.content = this.configService.content.knowledgeCheck.step1;

    this.formsManager.upsert('knowledgeCheckQ1', this.formQ1, {
      withInitialValue: true,
    });

    if (this.appState.state.forms.knowledgeCheckQ1) {
      this.formsManager.patchValue(
        'knowledgeCheckQ1',
        this.appState.state.forms.knowledgeCheckQ1
      );
    }
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.formsManager.unsubscribe('knowledgeCheckQ1');
  }
}
