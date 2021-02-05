import { FeatureComponent } from './feature.component';
import { moduleMetadata } from '@storybook/angular';
import { FeatureModule } from './feature.module';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs';

const label = 'Colors';
const options = {
  white: '#F6F6F6',
  grey: '#D9DADC',
  none: '',
};
const defaultValue = options.white;
const groupId = 'GROUP-ID1';



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
  <wes-feature [cardCount]="cardCount" [title]="title" [cardTitle]="cardTitle" [message]="message"></wes-feature>
  `,
  props: {
    text: text('text', 'feature'),
    title: text('Title', 'A flexible, tax-friendly way to invest for the future...'),
    cardCount: number('Number of cards', 6, { min: 2 }),
    message: text(
      'Message',
      '<p>Wesleyan Unit Trust Managers (WUTM) products allow you to invest in fully managed unit trust funds, run by an award-winning team.</p>'
    ),
    cardTitle: text('Card title', 'With Profits ISA'),
    cardMessage: text(
      'Card message',
      '<p>A stocks and shares ISA invested in Wesleyan’s With Profits Fund, the With Profits ISA lets you share in Wesleyan’s financial success.</p>'
    ),
    cardLinkText: text('Card link text', 'Apply now')
  },
  component: FeatureComponent
});


export const custom= () => ({
  template: `
  <wes-feature [count]="count" [type]="type" [value]="value"></wes-feature>
  `,
  props: {
    text: text('text', 'feature'),
    title: text('Title', 'Unit trust products from WUTM'),
    cardCount: number('Number of cards', 6, { min: 2 }),
    message: text(
      'Message',
      '<p>Wesleyan Unit Trust Managers (WUTM) products allow you to invest in fully managed unit trust funds, run by an award-winning team.</p>'
    ),
    cardTitle: text('Card title', 'With Profits ISA'),
    cardMessage: text(
      'Card message',
      '<p>A stocks and shares ISA invested in Wesleyan’s With Profits Fund, the With Profits ISA lets you share in Wesleyan’s financial success.</p>'
    ),
    cardLinkText: text('Card link text', 'Apply now'),
  },
  component: FeatureComponent
});

/***/
