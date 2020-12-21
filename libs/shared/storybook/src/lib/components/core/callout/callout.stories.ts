import { select, text } from '@storybook/addon-knobs';

export default {
  title: 'Core|Callout (Full Width)',
  parameters: { 
    knobs: {
      escapeHTML: false,
    },
  },
};

const variants = {
  'On White': '',
  'On Grey': 'wes-callout--grey',
  'On White :: Right Aligned': 'wes-callout--right',
  'On Grey :: Right Aligned': 'wes-callout--right wes-callout--grey',
};
  
export const callout = () => ({
  template: `
    <div class="wes-callout {{ variant }}">
      <div class="wes-callout__wrapper">
        <div class="wes-callout__body">
          <div class="wes-callout__body-content">
            <div class="wes-callout__frame">
              <h2 class="wes-callout__title">{{ title }}</h2>
              <div class="wes-callout__message" [innerHTML]="message">
                <!-- Rich text content -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  props: {
    variant: select('Variant', variants, ''),
    title: text('Title', 'How to save for your deposit'),
    message: text('Message', '<p>Just as it\'s important to be realistic about what kind of house and mortgage you can afford, it\'s crucial to set a realistic timeframe for saving up the deposit. Estimates suggest it can take an average of 3.5 years for a couple to save their deposit, and that rises to 13.5 years if you\'re buying alone.</p>'),
  },
});
