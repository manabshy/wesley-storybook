import { select, text } from '@storybook/addon-knobs';

export default {
  title: 'Core|Emphasis (Full Width)',
  parameters: { 
    knobs: {
      escapeHTML: false,
    },
  },
};

const variants = {
  'On White': '',
  'On Grey': 'wes-emphasis--grey',
  'On White :: Right Aligned': 'wes-emphasis--right',
  'On Grey :: Right Aligned': 'wes-emphasis--right wes-emphasis--grey',
};
  
export const emphasis = () => ({
  template: `
    <div class="wes-emphasis {{ variant }}">
      <div class="wes-emphasis__wrapper">
        <div class="wes-emphasis__body">
          <div class="wes-emphasis__body-content">
            <div class="wes-emphasis__frame">
              <div class="wes-emphasis__message" [innerHTML]="message">
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
    message: text('Message', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec scelerisque magna, et consequat magna. Nulla a lacus molestie, tristique sapien eu, auctor ipsum. Praesent purus libero, aliquet ut odio eu, consequat fermentum libero.</p>'),
  },
});
