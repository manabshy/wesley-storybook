import { text, number, boolean, array } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import {
  //   StepperComponent,
  SharedUiStepperModule,
} from '@wesleyan-frontend/shared/ui-stepper';
export default {
  title: 'Background Helpers',
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      //   declarations: [StepperComponent],
      imports: [SharedUiStepperModule],
    }),
  ],
};

export const solidGrey = () => ({
  template: `
  <div class="bg-solid-white" style="padding:3rem">.bg-solid-white</div>
  <div class="bg-solid-grey-50" style="padding:3rem">.bg-solid-grey-50</div>

  `,
});
export const gradientYellow = () => ({
  template: `<div class="bg-gradient-yellow" style="padding:3rem">.bg-gradient-yellow</div>`,
});
