import { boolean, optionsKnob, select, text } from '@storybook/addon-knobs';
import { OptionsKnobOptions } from '@storybook/addon-knobs/dist/components/types';

export default {
  title: 'Campaigns|Awards & Accreditations (Full Width)',
  parameters: { 
    knobs: {
      escapeHTML: false,
    },
  },
};

const variants = {
  'On White': '',
  'On Grey': 'wes-awards--grey-accent',
};

const awardsCount = {
  '1': '1',
  '2': '2',
};

const optionsObj = {
  display: 'inline-radio',
} as OptionsKnobOptions;

export const awardsAndAccreditations = () => ({
  template: `
    <div class="wes-awards {{ variant }}">
      <div class="wes-awards__wrapper">
        <div class="wes-awards__header">
          <div class="wes-awards__header-content">
            <h2 class="wes-awards__title">{{ title }}</h2>
            <div class="wes-awards__message" [innerHTML]="message">
              <!-- Rich text content -->
            </div>
          </div>
        </div>
        <div class="wes-awards__cards">
          <div class="wes-awards__cards-content">
            <article class="wes-awards__card">
              <div *ngIf="withIcons" class="wes-awards__card-icon">
                <img alt="" src="/assets/icons/svg/icon-award.svg" />
              </div>
              <h3 class="wes-awards__card-title">{{ awardTitle1 }}</h3>
              <div *ngIf="!withIcons" class="wes-awards__card-logo">
                <img src="/assets/images/rcgp-logo.svg" />
              </div>
            </article>
            <article *ngIf="awardCount === '2'" class="wes-awards__card">
              <div *ngIf="withIcons" class="wes-awards__card-icon">
                <img alt="" src="/assets/icons/svg/icon-award.svg" />
              </div>
              <h3 class="wes-awards__card-title">{{ awardTitle2 }}</h3>
              <div *ngIf="!withIcons" class="wes-awards__card-logo">
                <img src="/assets/images/insurance-awards.svg" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  `,
  props: {
    variant: select('Variant', variants, ''),
    title: text('Title', 'Awards and accreditations'),
    message: text('Message', '<p>Just some of our credentials in the medical field&hellip;</p>'),
    awardCount: optionsKnob('Number of awards', awardsCount, '2', optionsObj),
    awardTitle1: text('Award 1 title', 'Exclusive Financial Advice Provider to the RCGP (Royal College of General Practitioners)'),
    awardTitle2: text('Award 2 title', 'Investment Team of the Year at the Insurance Asset Risk Awards 2020'),
    withIcons: boolean('With icons', false),
  },
});
