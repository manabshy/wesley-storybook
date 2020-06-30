import { text, number, boolean, array } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import {
  //   StepperComponent,
  SharedUiStepperModule,
} from '@wesleyan-frontend/shared/ui-stepper';
export default {
  title: 'Backgrounds',
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
  <div class="wes-bg-solid-white" style="padding:2rem; width:25%">.wes-bg-solid-white</div>
  <div class="wes-bg-solid-grey-50" style="padding:2rem; width:25%">.wes-bg-solid-grey-50</div>
  <div class="wes-bg-solid-grey-900" style="padding:2rem;width:25%; color:white">.wes-bg-solid-grey-900</div>
  <div class="wes-bg-solid-gold-900" style="padding:2rem;width:25%; color:white">.wes-bg-solid-gold-900</div>

  `,
});
export const gradient = () => ({
  template: `<div class="wes-bg-gradient-yellow" style="padding:3rem">.wes-bg-gradient-yellow</div>`,
});
