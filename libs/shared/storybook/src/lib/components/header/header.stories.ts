import { HeaderComponent } from './header.component';
import { moduleMetadata } from '@storybook/angular';
import { HeaderModule } from './header.module';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs';

const label = 'Colors';
const options = {
  grey: 'grey-header',
  white: 'white-header',
};
const defaultValue = options.white;
const groupId = 'GROUP-ID1';

export default {
  title: 'Components/Header',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        HeaderModule
      ]
    })
  ],
  component: HeaderComponent
};

export const footerFullWidth= () => ({
  template: `
  <wes-header [value]="value"></wes-header>
  `,
  props: {
    value : select(label, options, defaultValue, groupId),
  },
  component: HeaderComponent
});


/***/
