import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wes-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @Input() steps: string[] = [];
  @Input() currentStepIndex = 0;
  @Input() currentStepProgressPercentage = 0;

  constructor() {}

  ngOnInit(): void {}

  isStepActive(currentStepIndex: number, stepIndex: number) {
    return currentStepIndex === stepIndex;
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
