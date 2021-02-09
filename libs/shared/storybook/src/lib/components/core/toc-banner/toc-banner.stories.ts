
import { text, array } from '@storybook/addon-knobs';

export default {
  title: 'Core/TOC Banner (Full Width)',
};

export const tocBanner = () => ({
  template: `
    <div class="wes-toc-banner">
      <div class="wes-toc-banner__wrapper">
        <div class="wes-toc-banner__body">
          <div class="wes-toc-banner__content">
            <h1 class="wes-toc-banner__title">{{heading}}</h1>
            <div class="wes-toc-banner__message">
              <p>{{subheading}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="wes-toc-banner__toc-background">
        <div class="wes-toc-banner__toc-wrapper">
            <div class="wes-toc-banner_toc-body wes-list wes-list-chevron column-2">
                <div class="wes-toc-banner__toc-link wes-toc-banner__toc-content">
                <h2 class="wes-toc-banner__toc-content-header">{{tocHeading}}</h2>
                <ul>
                    <li *ngFor="let link of links">
                        <a href="/" target="_blank">{{link}}</a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
      </div>
      <div class="wes-toc-banner__shapes">
        <svg id="wes-toc-banner__shapes-desktop" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1366 600">
        <defs>
            <rect id="toc-supergraphic_xl-a" width="1366" height="600" x="0" y="0"/>
            <linearGradient id="toc-supergraphic_xl-c" x1="36.892%" x2="63.109%" y1="0%" y2="100%">
            <stop offset="0%" stop-color="#FEBD11"/>
            <stop offset="42.422%" stop-color="#FEDD36" stop-opacity=".3"/>
            <stop offset="100%" stop-color="#FEDD36" stop-opacity=".1"/>
            </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <mask id="toc-supergraphic_xl-b" fill="#fff">
            <use xlink:href="#toc-supergraphic_xl-a"/>
            </mask>
            <use fill="#FFF" xlink:href="#toc-supergraphic_xl-a"/>
            <g mask="url(#toc-supergraphic_xl-b)">
            <g transform="translate(-269 -92)">
                <polygon fill="#FEBD11" points=".629 834 .629 0 957.082 0 1259.629 834"/>
                <polygon fill="url(#toc-supergraphic_xl-c)" points="0 0 764 0 382 1059" transform="translate(378 92)"/>
            </g>
            </g>
        </g>
        </svg>

        <svg id="wes-toc-banner__shapes-mobile" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 375 392">
        <defs>
          <rect id="toc-supergraphic_xs-a" width="375" height="392" x="0" y="0"/>
          <linearGradient id="toc-supergraphic_xs-c" x1="36.862%" x2="63.139%" y1="0%" y2="100%">
            <stop offset="0%" stop-color="#FEBD11"/>
            <stop offset="60%" stop-color="#FEDD36" stop-opacity=".3"/>
            <stop offset="100%" stop-color="#FEDD36" stop-opacity=".1"/>
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <mask id="toc-supergraphic_xs-b" fill="#fff">
            <use xlink:href="#toc-supergraphic_xs-a"/>
          </mask>
          <use fill="#FEBD11" xlink:href="#toc-supergraphic_xs-a"/>
          <rect width="375" height="148" fill="#FFF" mask="url(#toc-supergraphic_xs-b)"/>
          <rect width="375" height="244" y="148" fill="#FEBD11" mask="url(#toc-supergraphic_xs-b)" transform="matrix(1 0 0 -1 0 540)"/>
          <g mask="url(#toc-supergraphic_xs-b)">
            <g transform="translate(-49 4)">
              <polygon fill="#FEBD11" points="92.597 -92 573.403 -92 333 574" transform="rotate(-90 357.5 216.5)"/>
              <polygon fill="url(#toc-supergraphic_xs-c)" points="58.88 -58.5 365.12 -58.5 212 365.5" transform="matrix(0 -1 -1 0 365.5 381.5)"/>
            </g>
          </g>
        </g>
      </svg>
    </div>
    </div>
  `,
  props: {
    heading: text('Heading', 'NHS Pension Scheme Guide'),
    subheading: text(
      'Subheading',
      'The NHS pension scheme is a well-earned benefit for the hard workers of the health service.'
    ),
    tocHeading: text('Toc Heading', 'On this page'),
    links: array('Links', [
      'Where to start with saving for a house',
      'How to save for your deposit',
      'The best accounts for saving for a house',
      'The extra costs you’ll need to think about',
      'Other options for first-time buyers',
      'Maintaining the saving habit',
    ]),
  },
});
