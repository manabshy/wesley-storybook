import { text, number, boolean, array } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import {
  //   StepperComponent,
  SharedUiStepperModule,
} from '@wesleyan-frontend/shared/ui-stepper';
export default {
  title: 'Buttons',
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      //   declarations: [StepperComponent],
      imports: [SharedUiStepperModule],
    }),
  ],
};

export const buttons = () => ({
  template: `
  <div class="bg-solid-white" style="padding:2rem;">
  <p><button class="wes-button wes-button__primary">Continue</button></p>
  <p><button class="wes-button wes-button__primary wes-button--disabled" disabled>Continue</button></p>
  <p><button class="wes-button wes-button__link" >Enter address manually</button></p>
  <p> Wesleyan Unit Trust Managers Ltd and Wesleyan Financial Services are wholly owned by Wesleyan Assurance Society which is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority. <a href="#" class="wes-link">Click for more information</a> about the Wesleyan group of companies.© 2020 Wesleyan Assurance Society. All rights reserved, for UK use only.
  </p>

  <div class="wes-bg-solid-gold-900 mt-2" style="padding: 2rem">
  <p><a href="#" class="wes-link wes-link--over-background">Click for more information</a> about the Wesleyan group of companies.© 2020 Wesleyan Assurance Society. All rights reserved, for UK use only.
  </p></div>
  </div>
  `,
});
