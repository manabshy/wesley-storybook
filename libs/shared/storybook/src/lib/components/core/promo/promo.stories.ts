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
  Whisper: '',
  Shout: 'wes-promo--shout',
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
              <a *ngIf="primaryCtaText.length > 0" class="wes-button-cta wes-button wes-button--outline" [ngClass]="variant.indexOf('wes-promo--shout') > -1 ? 'wes-button--on-gold': 'wes-button--on-light wes-button-cta--orange-hover'" href="javascript:void(0)" target="_blank">
              <span class="wes-button-label">{{ primaryCtaText }}</span>
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="wes-icon wes-icon-size-m" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="none" stroke-linecap="round" stroke-width="1"><g stroke="#FEBD11" stroke-width="2" transform="translate(-293.000000, -340.000000)"><g transform="translate(0.000000, 72.000000)"><g transform="translate(97.000000, 88.000000)"><g transform="translate(0.000000, 160.000000)"><g transform="translate(32.000000, 20.000000)"><g transform="translate(164.000000, 0.000000)"><polyline class="svg-path-color-change" id="Rectangle" points="25 9 19 15 13 9" stroke-linejoin="round" transform="translate(19.000000, 12.000000) rotate(-90.000000) translate(-19.000000, -12.000000) "></polyline><line class="svg-path-color-change" id="Line" x1="21" x2="2" y1="12" y2="12"></line></g></g></g></g></g></g></g></svg>
              </a>
              <a *ngIf="secondaryCtaText.length > 0" class="mt-3 mt-md-0 ml-0 ml-md-8 ml-lg-10 wes-button-cta wes-button" [ngClass]="variant.indexOf('wes-promo--shout') > -1 ? 'wes-button--on-gold wes-button--outline' : 'wes-button-cta--orange-with-grey-hover'" href="javascript:void(0)" target="_blank">
              <span class="wes-button-label">{{ secondaryCtaText }}</span>
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="wes-icon wes-icon-size-m" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="none" stroke-linecap="round" stroke-width="1"><g stroke="#FEBD11" stroke-width="2" transform="translate(-293.000000, -340.000000)"><g transform="translate(0.000000, 72.000000)"><g transform="translate(97.000000, 88.000000)"><g transform="translate(0.000000, 160.000000)"><g transform="translate(32.000000, 20.000000)"><g transform="translate(164.000000, 0.000000)"><polyline class="svg-path-color-change" id="Rectangle" points="25 9 19 15 13 9" stroke-linejoin="round" transform="translate(19.000000, 12.000000) rotate(-90.000000) translate(-19.000000, -12.000000) "></polyline><line class="svg-path-color-change" id="Line" x1="21" x2="2" y1="12" y2="12"></line></g></g></g></g></g></g></g></svg>
              </a>
            </div>
            <div *ngIf="footnote" class="wes-promo__footnote" [innerHTML]="footnote">
              <!-- Rich text content -->
            </div>
            <div *ngIf="fcDetail == 'yes'" class="wes-promo__placeholder">
              <div class="d-flex flex-column flex-md-row">
                <div class="wes-promo__fc-details">
                    <p class="wes-promo__fc-details-title">Your Financial Consultant is:</p>
                    <span class="promo-icon-profile wes-promo__fc-details-label">David Llewelyn-Smith</span>
                </div>
                <div class="wes-promo__fc-details">
                    <p class="wes-promo__fc-details-title">Specialist in:</p>
                    <span class="promo-icon-medical wes-promo__fc-details-label">Medical</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  props: {
    variant: select('Variant', variants, ''),
    withImage: optionsKnob(
      'With image',
      {
        Yes: 'yes',
        No: 'no',
      },
      'no',
      {
        display: 'inline-radio',
      }
    ),
    title: text('Title', 'Not sure what’s right for you?'),
    message: text(
      'Message',
      '<p>With so many different options for saving and investing your money, it can be a good idea to take expert advice. Why not book a no-obligation meeting with a Wesleyan Financial Services Consultant near you?</p>'
    ),
    primaryCtaText: text('Primary CTA text', 'Book your appointment'),
    secondaryCtaText: text('Secondary CTA text', 'Open your ISA online'),
    footnote: text(
      'Footnote',
      '<p>No initial charge when you open your ISA online.</p>'
    ),
    fcDetail: optionsKnob(
      'FC detail',
      {
        Yes: 'yes',
        No: 'no',
      },
      'no',
      {
        display: 'inline-radio',
      }
    ),
  },
});
