import {text, optionsKnob, select} from '@storybook/addon-knobs';

export default {
  title: 'Core/Simple Link List',
};

const variants = {
  'On White :: Two Columns': '',
  'On Grey :: Two Columns': 'wes-simple-link-list--grey',
  'On White :: Three Columns': 'wes-simple-link-list--3col',
  'On Grey :: Three Columns': 'wes-simple-link-list--3col wes-simple-link-list--grey',
};

export const simpleLinkList = () => ({
  template: `
    <div class="wes-simple-link-list {{variant}}" role="links">
      <div class="wes-simple-link-list__wrapper">
        <div class="wes-simple-link-list__body">
          <div class="wes-simple-link-list__content">
            <h1 class="wes-simple-link-list__title">{{ linkListTitle }}</h1>
            <div *ngIf="withParagraph == 'yes'" class="wes-simple-link-list__message" [innerHTML]="linkListMessage">
              <!-- Rich text content -->
            </div>

          </div>
        </div>
      </div>
    </div>
  `,
  props: {
    variant: select('Variant', variants, ''),
    withParagraph: optionsKnob('With paragraph', {
      'Yes': 'yes',
      'No': 'no'
    }, 'yes', {
      display: 'inline-radio',
    }),
    linkListTitle: text('Link list title', 'Investment guides and documents'),
    linkListMessage: text('Link list message', '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima obcaecati officia perferendis sequi? Dolores, temporibus..</p>'),
  },
});
