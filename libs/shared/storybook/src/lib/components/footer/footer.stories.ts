import { FooterComponent } from './footer.component';
import { moduleMetadata } from '@storybook/angular';
import { FooterModule } from './footer.module';
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
  plain: 'plain-footer',
  box: 'box-footer',
};

const size = 'Variants';
const sizeOptions = {
 standard: 'standard-footer',
 large: ''
};
export default {
  title: 'Components/Footer',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        FooterModule
      ]
    })
  ],
  component: FooterComponent
};

export const footerFullWidth= () => ({
  template: `
  <wes-footer></wes-footer>
  `,
  props: {

  },
  component: FooterComponent
});


/***/
