import { moduleMetadata } from '@storybook/angular';
import {
  SharedUiStepperModule,
} from '@wesleyan-frontend/shared/ui-stepper';
export default {
  title: 'Atoms/Background',
  decorators: [
    moduleMetadata({
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
