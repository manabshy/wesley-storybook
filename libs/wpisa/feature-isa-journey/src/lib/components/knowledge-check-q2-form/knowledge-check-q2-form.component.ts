import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';
import {
  ConfigService,
  KnowledgeCheckStep,
} from '@wesleyan-frontend/wpisa/data-access';

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
    private formsManager: NgFormsManager,
    private configService: ConfigService
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
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('knowledgeCheckQ2');
  }
}
