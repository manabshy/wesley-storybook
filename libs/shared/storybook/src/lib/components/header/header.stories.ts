import { HeaderComponent } from './header.component';
import { moduleMetadata } from '@storybook/angular';
import { HeaderModule } from './header.module';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs';

const label = 'Colors';
const options = {
  grey: '#F6F6F6',
  white: '',
};
const defaultValue = options.white;
const groupId = 'GROUP-ID1';
const groupId2 = 'GROUP-ID2';
const groupId3 = 'GROUP-ID3';

const variant = 'Variants';
const variantOptions = {
  plain: 'plain-header',
  box: 'box-header',
};

const size = 'Variants';
const sizeOptions = {
 standard: 'simple-header',
 large: ''
};
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
  <wes-header></wes-header>
  `,
  props: {

  },
  component: HeaderComponent
});


/***/
