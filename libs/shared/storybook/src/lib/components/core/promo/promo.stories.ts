import { optionsKnob, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Core/Promo (Full Width)',
  parameters: { 
    knobs: {
      escapeHTML: false,
    },
  },
};

const variants = {
  'Whisper': '',
  'Shout': 'wes-promo--shout',
  'Shout :: On Grey': 'wes-promo--shout wes-promo--grey',
  'Shout :: With Grey Top': 'wes-promo--shout wes-promo--grey-top',
  'Shout :: With Grey Bottom': 'wes-promo--shout wes-promo--grey-bottom',
};
  
export const promo = () => ({
  template: `
    <div class="wes-promo {{variant}}">
      <div class="wes-promo__wrapper">
        <div *ngIf="withImage == 'yes'" class="wes-promo__header">
          <div class="wes-promo__bg" style="background-image:url(http://placekitten.com/500/300)"></div>
        </div>
        <div class="wes-promo__body">
          <div class="wes-promo__trapezoid"></div>
          <div class="wes-promo__content">
            <h2 class="wes-promo__title">{{ title }}</h2>
            <div class="wes-promo__message" [innerHTML]="message">
              <!-- Rich text content -->
            </div>
            <div class="wes-promo__actions">
              <a class="wes-promo__cta" href="/savings-and-investments/with-profits-isa/before-you-begin" target="_blank">{{ primaryCtaText }}</a>
              <a *ngIf="secondaryCtaText" class="wes-promo__cta wes-promo__cta--secondary" href="/savings-and-investments/with-profits-isa/before-you-begin" target="_blank">{{ secondaryCtaText }}</a>
            </div>
            <div *ngIf="footnote" class="wes-promo__footnote" [innerHTML]="footnote">
              <!-- Rich text content -->
            </div>
            <div *ngIf="customContent == 'yes'" class="wes-promo__placeholder">
              <!-- Custom components -->
              <p>Custom content to go here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  props: {
    variant: select('Variant', variants, ''),
    withImage: optionsKnob('With image', {
      'Yes': 'yes', 
      'No': 'no'
    }, 'no', {
      display: 'inline-radio',
    }),
    title: text('Title', 'Not sure what’s right for you?'),
    message: text('Message', '<p>With so many different options for saving and investing your money, it can be a good idea to take expert advice. Why not book a no-obligation meeting with a Wesleyan Financial Services Consultant near you?</p>'),
    primaryCtaText: text('Primary CTA text', 'Open your ISA online'),
    secondaryCtaText: text('Secondary CTA text', 'Book your appointment'),
    footnote: text('Footnote', '<p>No initial charge when you open your ISA online.</p>'),
    customContent: optionsKnob('Custom content', {
      'Yes': 'yes', 
      'No': 'no'
    }, 'no', {
      display: 'inline-radio',
    }),
  },
});
