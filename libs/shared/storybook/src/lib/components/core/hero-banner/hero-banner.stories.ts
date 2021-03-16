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
            <div class="wes-hero-banner-2__actions">
              <a *ngIf="primaryCtaText.length > 0" class="wes-hero-banner-2__cta" href="#" [innerHTML]="primaryCtaText"></a>
              <a *ngIf="secondaryCtaText.length > 0" class="wes-hero-banner-2__cta wes-hero-banner-2__cta--secondary" href="#" [innerHTML]="secondaryCtaText"></a>
            </div>
            <div *ngIf="footnote" class="wes-hero-banner-2__footnote">
              <p>{{footnote}} <a *ngIf="supportingLinkText.length > 0" class="wes-hero-banner-2__support-link" href="#" [innerHTML]="supportingLinkText"></a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="wes-hero-banner-2__shapes">
        <div class="wes-hero-banner-2__image" style="background-image: url(assets/images/hero-banner-2.jpg);">
        </div>
        <svg id="wes-hero-banner-2__shapes-desktop" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 912 600">
            <defs>
            <rect id="*banner-supergrphic_xl-a" width="912" height="600" x="0" y="0"/>
            <linearGradient id="*banner-supergrphic_xl-c" x1="36.892%" x2="63.109%" y1="0%" y2="100%">
                <stop offset="0%" stop-color="#FEBD11"/>
                <stop offset="60%" stop-color="#FEDD36" stop-opacity=".3"/>
                <stop offset="100%" stop-color="#FEDD36" stop-opacity=".1"/>
            </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
            <mask id="*banner-supergrphic_xl-b" fill="#fff">
                <use xlink:href="#*banner-supergrphic_xl-a"/>
            </mask>
            <g mask="url(#*banner-supergrphic_xl-b)">
                <polygon fill="#FFF" points="0 0 764 0 382 1059" transform="translate(142)"/>
                <path fill="#FEBD11" d="M0,600 L0,0 L688,0 L688,0.003 L905.628705,600 L0,600 Z"/>
                <polygon fill="url(#*banner-supergrphic_xl-c)" points="0 0 764 0 382 1059" transform="translate(142)"/>
            </g>
            </g>
        </svg>

        <svg id="wes-hero-banner-2__shapes-mobile" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 375 324">
            <defs>
                <rect id="*banner-supergrphic_xs-a" width="375" height="324" x="0" y="0"/>
                <linearGradient id="*banner-supergrphic_xs-c" x1="36.862%" x2="63.139%" y1="0%" y2="100%">
                <stop offset="0%" stop-color="#FEBD11"/>
                <stop offset="60%" stop-color="#FEDD36" stop-opacity=".3"/>
                <stop offset="100%" stop-color="#FEDD36" stop-opacity=".1"/>
                </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
                <mask id="*banner-supergrphic_xs-b" fill="#fff">
                <use xlink:href="#*banner-supergrphic_xs-a"/>
                </mask>
                <g mask="url(#*banner-supergrphic_xs-b)">
                <g transform="translate(-49)">
                    <polygon fill="#FFF" points="52.083 -51.747 322.917 -51.747 187.5 323.253" transform="matrix(0 -1 -1 0 372.253 323.253)"/>
                    <polygon fill="#FEBD11" points="99.14 -98.5 614.86 -98.5 357 615.5" transform="rotate(-90 381.5 234)"/>
                    <polygon fill="#FEBD11" points="119.624 255.376 119.624 -119.624 255.376 255.376" transform="matrix(0 -1 -1 0 304.376 255.376)"/>
                    <polygon fill="url(#*banner-supergrphic_xs-c)" points="58.88 -58.5 365.12 -58.5 212 365.5" transform="matrix(0 -1 -1 0 365.5 365.5)"/>
                </g>
                </g>
            </g>
            </svg>
    </div>
    <div [ngClass]="{'d-none': showTrustPilot === 'no'}">
    <!-- TrustBox widget - Micro Combo -->
    <div class="trustpilot-widget" data-locale="en-GB" data-template-id="5419b6ffb0d04a076446a9af" data-businessunit-id="5ac4a6cda605e9000153b13b" data-style-height="60" data-style-width="100%" data-theme="light" data-font-family="Open Sans" data-text-color="#40474F">
    <a href="https://uk.trustpilot.com/review/wesleyan.co.uk" target="_blank" rel="noopener">Trustpilot</a>
    </div>
    <!-- End TrustBox widget -->
    </div>
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
