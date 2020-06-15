import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'wes-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements OnInit {
  @Input() steps: string[] = [];
  @Input() currentStepIndex = 3;
  @Input() currentStepProgressPercentage = 100;

  constructor() {}

  ngOnInit(): void {}

  get mobileHeader() {
    return `${this.steps[this.currentStepIndex]} (step ${
      this.currentStepIndex + 1
    } of
            ${this.steps.length})`;
  }

  isStepActive(stepIndex: number) {
    return this.currentStepIndex === stepIndex;
  }

  isStepComplete(stepIndex: number) {
    return (
      this.currentStepIndex > stepIndex ||
      this.currentStepIndex === this.steps.length - 1
    );
  }

  getIntermediateProgressPercentage(stepIndex: number): number {
    return this.isStepComplete(stepIndex)
      ? 100
      : this.currentStepProgressPercentage;
  }
}
