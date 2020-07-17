import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';

import {
  ConfigService,
  KnowledgeCheckStep,
} from '@wesleyan-frontend/wpisa/data-access';
import { AppForms } from '../../core/app-forms.interface';
import { AppStateFacade } from '../../core/app-state-facade';
import { KnowledgeCheckFormAnswer } from '../../core/models/knowledge-check-form-answer.interface';

const YES = 'Yes';
const NO = 'No';

@Component({
  selector: 'wes-knowledge-check-q1-form',
  templateUrl: './knowledge-check-q1-form.component.html',
  styleUrls: ['./knowledge-check-q1-form.component.scss'],
})
export class KnowledgeCheckQ1FormComponent implements OnDestroy {
  @Output() formSubmitted = new EventEmitter<KnowledgeCheckFormAnswer>();

  form: FormGroup = this.builder.group({
    question1: [null, Validators.required],
  });

  content: KnowledgeCheckStep;
  questionMap: {
    [YES]: KnowledgeCheckFormAnswer;
    [NO]: KnowledgeCheckFormAnswer;
  };

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager<AppForms>,
    private configService: ConfigService,
    private appState: AppStateFacade
  ) {
    this.content = this.configService.content.knowledgeCheck.step1;

    this.questionMap = {
      [YES]: { value: YES, label: this.content.questions[0] },
      [NO]: { value: NO, label: this.content.questions[1] },
    };

    this.formsManager.upsert('knowledgeCheckQ1', this.form, {
      withInitialValue: true,
    });

    if (this.appState.state?.forms?.knowledgeCheckQ1) {
      this.formsManager.patchValue(
        'knowledgeCheckQ1',
        this.appState.state.forms.knowledgeCheckQ1
      );
    }
  }

  submit() {
    this.formSubmitted.emit(
      this.questionMap[this.form.controls.question1.value]
    );
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('knowledgeCheckQ1');
  }
}
