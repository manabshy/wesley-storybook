import { boolean, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Core|Promo (Full Width)',
};

const variants = {
  'Whisper': 'wes-promo--whisper',
  'Shout': 'wes-promo--shout',
  'Shout On Grey': 'wes-promo--shout wes-promo--grey',
};
  
export const promo = () => ({
  template: `
    <div class="wes-promo {{variant}}">
      <div class="wes-promo__wrapper">
        <div *ngIf="withImage" class="wes-promo__header">
          <div class="wes-promo__bg" style="background-image:url(http://placekitten.com/500/300)"></div>
        </div>
        <div class="wes-promo__body">
          <div class="wes-promo__trapezoid"></div>
          <div class="wes-promo__content">
            <h2 class="wes-promo__title" [innerHTML]="title"></h2>
            <div class="wes-promo__message">
              <p [innerHTML]="message"></p>
            </div>
            <div class="wes-promo__actions">
              <a class="wes-promo__cta" href="/savings-and-investments/with-profits-isa/before-you-begin" target="_blank" [innerHTML]="primaryCtaText"></a>
              <a class="wes-promo__cta wes-promo__cta--secondary" href="/savings-and-investments/with-profits-isa/before-you-begin" target="_blank" [innerHTML]="secondaryCtaText"></a>
            </div>
            <div *ngIf="footnote" class="wes-promo__footnote">
              <!-- Rich text -->
              <p [innerHTML]="footnote"></p>
            </div>
            <div *ngIf="customContent" class="wes-promo__placeholder">
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
    withImage: boolean('With image', false),
    title: text('Title', 'Not sure what’s right for you?'),
    message: text('Message', 'With so many different options for saving and investing your money, it can be a good idea to take expert advice. Why not book a no-obligation meeting with a Wesleyan Financial Services Consultant near you?'),
    primaryCtaText: text('Primary CTA text', 'Book your appointment'),
    secondaryCtaText: text('Primary CTA text', 'Book your appointment'),
    footnote: text('Footnote', 'No initial charge when you open your ISA online.'),
    customContent: boolean('Custom content', false),
  },
});
