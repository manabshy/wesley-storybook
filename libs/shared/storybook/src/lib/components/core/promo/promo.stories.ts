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
            <ng-container *ngIf="variant.indexOf('wes-promo--shout') > -1">
            <a *ngIf="primaryCtaText.length > 0" class="wes-button wes-button--on-gold" href="javascript:void(0);">{{primaryCtaText}} <span aria-hidden="true" class="wes-icon-arrow-right"></span></a>

            <a *ngIf="secondaryCtaText.length > 0" class="wes-button wes-button--on-gold wes-button--outline" href="javascript:void(0);">{{secondaryCtaText}} <span aria-hidden="true" class="wes-icon-arrow-right"></span></a>
            </ng-container>
            <ng-container *ngIf="variant.indexOf('wes-promo--shout') == -1">
            <a  *ngIf="primaryCtaText.length > 0" class="wes-button wes-button--on-light wes-button--outline" href="javascript:void(0);">{{primaryCtaText}} <span aria-hidden="true" class="wes-icon-arrow-right"></span></a>

            <a *ngIf="secondaryCtaText.length > 0" class="wes-button wes-button--on-light" href="javascript:void(0);">{{secondaryCtaText}} <span aria-hidden="true" class="wes-icon-arrow-right"></span></a>
            </ng-container>
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

export const promo_CTA = () => ({
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
            <div class="wes-promo__message cta" [innerHTML]="message">
              <!-- Rich text content -->
            </div>
            <div class="wes-promo__actions">
            <ng-container *ngIf="variant.indexOf('wes-promo--shout') > -1">
            <a *ngIf="primaryCtaText.length > 0" class="wes-button wes-button--on-gold" href="javascript:void(0);">{{primaryCtaText}} <span aria-hidden="true" class="wes-icon-arrow-right"></span></a>

            <a *ngIf="secondaryCtaText.length > 0" class="wes-button wes-button--on-gold wes-button--outline" href="javascript:void(0);">{{secondaryCtaText}} <span aria-hidden="true" class="wes-icon-arrow-right"></span></a>
            </ng-container>
            <ng-container *ngIf="variant.indexOf('wes-promo--shout') == -1">
            <a  *ngIf="primaryCtaText.length > 0" class="wes-button wes-button--on-light wes-button--outline" href="javascript:void(0);">{{primaryCtaText}} <span aria-hidden="true" class="wes-icon-arrow-right"></span></a>

            <a *ngIf="secondaryCtaText.length > 0" class="wes-button wes-button--on-light" href="javascript:void(0);">{{secondaryCtaText}} <span aria-hidden="true" class="wes-icon-arrow-right"></span></a>
            </ng-container>
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
    title: text('Title', 'Ready to discuss your car insurance?'),
    message: text(
      'Message',
      '<p>Our experts are waiting to steer you in the right direction. Call us free on <a class="cta" href="tel:0808 159 6713">0808 159 6713</a>, or book a face-to-face appointment using the button below.</p>'
    ),
    primaryCtaText: text('Primary CTA text', 'Book your appointment'),
    secondaryCtaText: text('Secondary CTA text', ''),
    footnote: text(
      'Footnote',
      '<p>Phone lines are open Monday to Friday, 9am to 5pm.</p>'
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

export const wes_promo_icons = () => ({
  template: `
  <div class="d-flex flex-wrap">
    <div class="p-2">
      <span class="promo-icon-profile"></span>
    </div>
    <div class="p-2">
      <span class="promo-icon-medical"></span>
    </div>
    <div class="p-2">
      <span class="promo-icon-gp"></span>
    </div>
    <div class="p-2">
      <span class="promo-icon-dental"></span>
    </div>
    <div class="p-2">
      <span class="promo-icon-education"></span>
    </div>
    <div class="p-2">
      <span class="promo-icon-legal"></span>
    </div>
    <div class="p-2">
      <span class="promo-icon-other"></span>
    </div>
  </div>
  `,
});
