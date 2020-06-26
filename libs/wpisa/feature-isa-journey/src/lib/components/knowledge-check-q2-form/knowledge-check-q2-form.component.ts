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
  selector: 'wes-knowledge-check-q2-form',
  templateUrl: './knowledge-check-q2-form.component.html',
  styleUrls: ['./knowledge-check-q2-form.component.scss'],
})
export class KnowledgeCheckQ2FormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  content: KnowledgeCheckStep;

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager<AppForms>,
    private configService: ConfigService,
    private appState: AppStateFacade
  ) {
    this.content = this.configService.content.knowledgeCheck.step2;
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      question2: [null, Validators.required],
    });

    this.formsManager.upsert('knowledgeCheckQ2', this.form, {
      withInitialValue: true,
    });

    if (this.appState.state.forms.knowledgeCheckQ1) {
      this.formsManager.patchValue(
        'knowledgeCheckQ2',
        this.appState.state.forms.knowledgeCheckQ2
      );
    }
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('knowledgeCheckQ2');
  }
}
