import { text, number, boolean, array } from '@storybook/addon-knobs';

import { moduleMetadata } from '@storybook/angular';

import { StepperComponent } from './stepper.component';

export default {
  title: 'StepperComponent',
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [StepperComponent],
      //   imports: [CommonModule],
    }),
  ],
};

export const withBackground = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: StepperComponent,
  template: `<div class="wes-bg-gradient-yellow">
  <div class="container">
    <wes-stepper [steps]="steps" [currentStepIndex]="currentStepIndex"></wes-stepper>
  </div>
  </div>`,
  props: {
    steps: array('steps', [
      'Knowledge check',
      'Your details',
      'Investment options',
      'Declaration',
      'Confirmation',
    ]),
    currentStepIndex: number('currentStepIndex', 3),
    currentStepProgressPercentage: number('currentStepProgressPercentage', 100),
  },
});

export const noBackground = () => ({
  moduleMetadata: {
    imports: [],
  },
  addon: {},
  component: StepperComponent,
  props: {
    steps: array('steps', [
      'Knowledge check',
      'Your details',
      'Investment options',
      'Declaration',
      'Confirmation',
    ]),
    currentStepIndex: number('currentStepIndex', 3),
    currentStepProgressPercentage: number('currentStepProgressPercentage', 100),
  },
});
