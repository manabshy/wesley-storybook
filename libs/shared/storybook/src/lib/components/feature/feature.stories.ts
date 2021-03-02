import { FeatureComponent } from './feature.component';
import { moduleMetadata } from '@storybook/angular';
import { FeatureModule } from './feature.module';
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
  plain: 'plain-feature',
  box: 'box-feature',
};

const size = 'Variants';
const sizeOptions = {
 standard: 'standard-feature',
 large: ''
};
export default {
  title: 'Components/Feature',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        FeatureModule
      ]
    })
  ],
  component: FeatureComponent
};

export const featureFullWidth= () => ({
  template: `
  <wes-feature [cardCount]="cardCount" [title]="title" [cardTitle]="cardTitle" [value]="value" [message]="message" [variant]="variant" [size]="size"></wes-feature>
  `,
  props: {
    value : select(label, options, defaultValue, groupId),
    variant: select(variant, variantOptions, 'box-feature', groupId2),
    size: select(size, sizeOptions, '' , groupId3 ),
    title: text('Title', 'A flexible, tax-friendly way to invest for the future...'),
    cardCount: number('Number of cards', 6, { min: 2 }),
    message: 'Start your investment with a £1,000 lump sum or £100 per month.',
    cardTitle: text('Card title', 'With Profits ISA'),
  },
  component: FeatureComponent
});

