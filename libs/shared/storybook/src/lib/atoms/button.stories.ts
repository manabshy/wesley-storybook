import { moduleMetadata } from '@storybook/angular';
import { SharedUiStepperModule } from '@wesleyan-frontend/shared/ui-stepper';
export default {
  title: 'Atoms|Button',
  decorators: [
    moduleMetadata({
      imports: [SharedUiStepperModule],
    }),
  ],
};

export const buttons = () => ({
  template: `
    <div class="bg-solid-white" style="padding:2rem;">
      <div class="d-flex">
        <div class="pr-3">
          <button class="wes-button wes-button-primary">&lt;button /&gt;</button>
        </div>
        <div class="pr-3">
          <a href="#" class="wes-button wes-button-primary">&lt;a /&gt;</a>
        </div>
        <div class="pr-3">
          <button class="wes-button wes-button-primary" disabled>[disabled]</button>
        </div>
      </div>
    </div>
    <div class="wes-bg-solid-gold-900" style="padding: 2rem">
      <div class="d-flex">
        <div class="pr-3">
          <button class="wes-button wes-button-cta">&lt;button /&gt;</button>
        </div>
        <div class="pr-3">
          <a href="#" class="wes-button wes-button-cta">&lt;a /&gt;</a>
        </div>
      </div>
    </div>
    <div class="wes-bg-solid-grey-900" style="padding: 2rem">
      <div class="d-flex">
        <div class="pr-3">
          <button class="wes-button wes-button-cta wes-button-cta--orange-hover">&lt;button /&gt;</button>
        </div>
        <div class="pr-3">
          <a href="#" class="wes-button wes-button-cta wes-button-cta--orange-hover">&lt;a /&gt;</a>
        </div>
      </div>
    </div>
    <div class="wes-bg-solid-white" style="padding: 2rem">
      <div class="d-flex">
        <div class="pr-3">
          <button class="wes-button wes-button-cta wes-button-cta--orange-with-grey-hover">&lt;button /&gt;</button>
        </div>
        <div class="pr-3">
          <a href="#" class="wes-button wes-button-cta wes-button-cta--orange-with-grey-hover">&lt;a /&gt;</a>
        </div>
      </div>
    </div>
  `,
});
