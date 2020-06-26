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

export const solid = () => ({
  template: `
  <div class="bg-solid-white" style="padding:2rem; width:25%">.bg-solid-white</div>
  <div class="bg-solid-grey-50" style="padding:2rem; width:25%">.bg-solid-grey-50</div>
  <div class="bg-solid-grey-900" style="padding:2rem;width:25%; color:white">.bg-solid-grey-900</div>
  <div class="bg-solid-gold-900" style="padding:2rem;width:25%; color:white">.bg-solid-gold-900</div>

  `,
});
export const gradient = () => ({
  template: `<div class="bg-gradient-yellow" style="padding:3rem">.bg-gradient-yellow</div>`,
});
