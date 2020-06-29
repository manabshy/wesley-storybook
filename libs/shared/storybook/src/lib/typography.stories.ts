import { text, number, boolean, array } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import {
  //   StepperComponent,
  SharedUiStepperModule,
} from '@wesleyan-frontend/shared/ui-stepper';
export default {
  title: 'Typography',
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      //   declarations: [StepperComponent],
      imports: [SharedUiStepperModule],
    }),
  ],
};

export const headings = () => ({
  template: `
  <div class="bg-solid-white" style="padding:2rem;">
  <h1>H1 About our Financial Consultants</h1>
  <h2>H2 About our Financial Consultants</h2>
  <h3>H3 About our Financial Consultants</h3>
  <h4>H4 About our Financial Consultants</h4>
  <h5>H5 About our Financial Consultants</h5>
  <h6>H6 About our Financial Consultants</h6>
  <p></p>
  </div>

  `,
});
export const gradient = () => ({
  template: `<div class="bg-gradient-yellow" style="padding:3rem">.bg-gradient-yellow</div>`,
});
