import { boolean, select, optionsKnob, text } from '@storybook/addon-knobs';

export default {
  title: 'Core/Hero Banner (Full Width)',
};

export const heroBanner = () => ({
  template: `
    <div class="wes-hero-banner-2" role="banner">
      <div class="wes-hero-banner-2__wrapper">
        <div class="wes-hero-banner-2__body">
          <div class="wes-hero-banner-2__content">
            <h1 class="wes-hero-banner-2__title">{{heading}}</h1>
            <div class="wes-hero-banner-2__message">
              <p>{{subheading}}</p>
            </div>
            <div *ngIf="primaryCtaText.length > 0 || secondaryCtaText.length > 0" class="wes-hero-banner-2__actions">
              <a *ngIf="primaryCtaText.length > 0" class="wes-hero-banner-2__cta" href="#" [innerHTML]="primaryCtaText"></a>
              <a *ngIf="secondaryCtaText.length > 0" class="wes-hero-banner-2__cta wes-hero-banner-2__cta--secondary" href="#" [innerHTML]="secondaryCtaText"></a>
            </div>
            <div *ngIf="footnote" class="wes-hero-banner-2__footnote">
              <p>{{footnote}} <a *ngIf="supportingLinkText.length > 0" class="wes-hero-banner-2__support-link" href="#" [innerHTML]="supportingLinkText"></a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="wes-hero-banner-2__image" role="image" style="background-image: url(assets/images/hero-banner-2.jpg);">
      </div>
      <div class="wes-hero-banner-2__shapes">
      </div>
    </div>

    <div class="wes-hero-banner-2__trustpilot wes-bg-solid-grey-50" [ngClass]="{'d-none': showTrustPilot === 'no'}">
      <!-- TrustBox widget - Micro Combo -->
      <div class="trustpilot-widget container" data-locale="en-GB" data-template-id="5419b6ffb0d04a076446a9af" data-businessunit-id="5ac4a6cda605e9000153b13b" data-style-height="60" data-style-width="100%" data-theme="light" data-font-family="Open Sans" data-text-color="#40474F">
      <a href="https://uk.trustpilot.com/review/wesleyan.co.uk" target="_blank" rel="noopener">Trustpilot</a>
      </div>
      <!-- End TrustBox widget -->
    </div>
  `,
  props: {
    heading: text('Heading', 'Unit Trust Investment Account'),
    subheading: text('Subheading', 'Investing beyond the ISA limit'),
    primaryCtaText: text('Primary CTA text', 'Open your account'),
    secondaryCtaText: text('Secondary CTA text', 'Manage your account'),
    footnote: text('Footnote', 'Existing customer?'),
    supportingLinkText: text(
      'Supporting Link',
      'Manage your investment account here'
    ),
    showTrustPilot: optionsKnob(
      'Show trust pilot',
      {
        Yes: 'yes',
        No: 'no',
      },
      'yes',
      {
        display: 'inline-radio',
      }
    ),
  },
});

heroBanner.decorators = [
  (storyFnc) => {
    const story = storyFnc();
    (() => {
      let script = document.createElement('script');
      let head = document.querySelector('head');
      script.src =
        'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
      head.appendChild(script);
    })();
    return story;
  },
];
