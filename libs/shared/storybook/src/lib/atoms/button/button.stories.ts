
import { text, select, boolean } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ButtonModule } from './button.module';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Atoms/Button',
  decorators: [
    moduleMetadata({
      imports: [
        ButtonModule
      ]
    })
  ],
  component: ButtonComponent
};

const variants = {
  'On Light': 'wes-button--on-light',
  'On Gold': 'wes-button--on-gold',
  'On Dark': 'wes-button--on-dark',
};
export const base = () => ({
  template: `
  <wes-button></wes-button>
  `,
});
export const core = () => ({

  template: `
    <div class="bg-solid-white" style="padding:2rem;">
      <div class="d-flex">
        <div class="pr-3">
          <button class="wes-button wes-button--on-light">Book an appointment</button>
          <br><br>
        </div>
        <div class="pr-3">
          <a class="wes-button wes-button--on-light" href="#">Book an appointment (link)</a>
          <br><br>
        </div>
      </div>
      <div class="d-flex">
        <div class="pr-3">
          <button class="wes-button wes-button--on-light" disabled aria-disabled="true">Book an appointment</button>
          <br><br>
        </div>
      </div>
      <div class="d-flex">
        <div class="pr-3">
          <button class="wes-button wes-button--on-light wes-button--outline">Book an appointment</button>
          <br><br>
        </div>
        <div class="pr-3">
          <a class="wes-button wes-button--on-light wes-button--outline" href="#">Book an appointment (link)</a>
          <br><br>
        </div>
      </div>
      <div class="d-flex">
        <div class="pr-3">
          <button class="wes-button wes-button--on-light wes-button--outline" disabled aria-disabled="true">Book an appointment</button>
          <br><br>
        </div>
      </div>
    </div>

    <div class="wes-bg-solid-gold-900" style="padding:2rem;">
      <div class="d-flex">
        <div class="pr-3">
          <button class="wes-button wes-button--on-gold">Book an appointment</button>
          <br><br>
        </div>
        <div class="pr-3">
          <a class="wes-button wes-button--on-gold" href="#">Book an appointment (link)</a>
          <br><br>
        </div>
      </div>
      <div class="d-flex">
        <div class="pr-3">
          <button class="wes-button wes-button--on-gold" disabled aria-disabled="true">Book an appointment</button>
          <br><br>
        </div>
      </div>
      <div class="d-flex">
        <div class="pr-3">
          <button class="wes-button wes-button--on-gold wes-button--outline">Book an appointment</button>
          <br><br>
        </div>
        <div class="pr-3">
          <a class="wes-button wes-button--on-gold wes-button--outline" href="#">Book an appointment (link)</a>
          <br><br>
        </div>
      </div>
      <div class="d-flex">
        <div class="pr-3">
          <button class="wes-button wes-button--on-gold wes-button--outline" disabled aria-disabled="true">Book an appointment</button>
          <br><br>
        </div>
      </div>
    </div>

    <div class="wes-bg-solid-grey-900" style="padding:2rem;">
      <div class="d-flex">
        <div class="pr-3">
          <button class="wes-button wes-button--on-dark">Book an appointment</button>
          <br><br>
        </div>
        <div class="pr-3">
          <a class="wes-button wes-button--on-dark" href="#">Book an appointment (link)</a>
          <br><br>
        </div>
      </div>
      <div class="d-flex">
        <div class="pr-3">
          <button class="wes-button wes-button--on-dark" disabled aria-disabled="true">Book an appointment</button>
          <br><br>
        </div>
      </div>
      <div class="d-flex">
        <div class="pr-3">
          <button class="wes-button wes-button--on-dark wes-button--outline">Book an appointment</button>
          <br><br>
        </div>
        <div class="pr-3">
          <a class="wes-button wes-button--on-dark wes-button--outline" href="#">Book an appointment (link)</a>
          <br><br>
        </div>
      </div>
      <div class="d-flex">
        <div class="pr-3">
          <button class="wes-button wes-button--on-dark wes-button--outline" disabled aria-disabled="true">Book an appointment</button>
          <br><br>
        </div>
      </div>
    </div>
  `,
  props: {
    faCoffee : faCoffee
  }
});





export const legacy = () => ({
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
          <button class="wes-button wes-button-primary" disabled aria-disabled="true">[disabled]</button>
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
