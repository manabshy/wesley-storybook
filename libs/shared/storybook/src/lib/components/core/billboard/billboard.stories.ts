import { optionsKnob, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Core/Billboard (Full Width)',
  parameters: { 
    knobs: {
      escapeHTML: false,
    },
  },
};

const variants = {
  'On White': '',
  'On White :: Collapsed': 'wes-billboard--collapse',
  'On White :: Reversed': 'wes-billboard--reverse',
  'On White :: Reversed :: Collapsed': 'wes-billboard--reverse wes-billboard--collapse',
  'On Grey': 'wes-billboard--grey',
  'On Grey :: Collapsed': 'wes-billboard--grey wes-billboard--collapse',
  'On Grey :: Reversed': 'wes-billboard--reverse wes-billboard--grey',
  'On Grey :: Reversed :: Collapsed': 'wes-billboard--reverse wes-billboard--grey wes-billboard--collapse',
};

export const billboard = () => ({
  template: `
    <div class="wes-billboard {{variant}}">
      <div class="wes-billboard__wrapper">
        <div *ngIf="withHeader == 'yes'" class="wes-billboard__header">
          <div class="wes-billboard__header-content">
            <h2 class="wes-billboard__group-title">Featured products</h2>
            <div class="wes-billboard__group-message">
              <!-- Rich text content -->
              <p>Wesleyan Unit Trust Managers (WUTM) products allow you to invest in fully managed unit trust funds, run by an award-winning team.</p>
            </div>
          </div>
        </div>
        <div class="wes-billboard__body">
          <div class="wes-billboard__body-content">
            <div class="wes-billboard__content">
              <h2 class="wes-billboard__title">{{ billboardTitle }}</h2>
              <div class="wes-billboard__message" [innerHTML]="billboardMessage">
                <!-- Rich text content -->
              </div>
              <div class="wes-billboard__actions">
                <a class="wes-billboard__cta wes-button wes-button--on-light" href="/savings-and-investments/with-profits-isa/before-you-begin" target="_blank">{{ primaryCtaText }}</a>
              </div>
            </div>
          </div>
          <div class="wes-billboard__bg">
            <div class="wes-billboard__bg-image" style="background-image: url(http://placekitten.com/600/400)"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  props: {
    variant: select('Variant', variants, ''),
    withHeader: optionsKnob('With header', {
      'Yes': 'yes', 
      'No': 'no'
    }, 'no', {
      display: 'inline-radio',
    }),
    billboardTitle: text('Billboard title', 'Stocks and shares ISA'),
    billboardMessage: text('Billboard message', '<p>Offering a tax shelter for your savings, plus the potential for growth, a stocks and shares ISA is a popular way to invest. There are two stocks and shares ISAs available from Wesleyan Group – find the right product for you and apply online today.</p>'),
    primaryCtaText: text('Primary CTA text', 'Choose your ISA'),
  },
});

export const collapsible = () => ({
  template: `
    <div class="wes-billboard">
      <div class="wes-billboard__wrapper">
        <div class="wes-billboard__body">
          <div class="wes-billboard__body-content">
            <div class="wes-billboard__content">
              <h2 class="wes-billboard__title">{{ billboardTitle }}</h2>
              <div class="wes-billboard__message" [innerHTML]="billboardMessage">
                <!-- Rich text content -->
              </div>
              <div class="wes-billboard__actions">
                <a class="wes-billboard__cta wes-button wes-button--on-light" href="/savings-and-investments/with-profits-isa/before-you-begin" target="_blank">{{ primaryCtaText }}</a>
              </div>
            </div>
          </div>
          <div class="wes-billboard__bg">
            <div class="wes-billboard__bg-image" style="background-image: url(http://placekitten.com/600/400)"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="wes-billboard wes-billboard--reverse" [ngClass]="{'wes-billboard--collapse': collapse == 'yes', 'wes-billboard--grey': collapse == 'no'}">
      <div class="wes-billboard__wrapper">
        <div class="wes-billboard__body">
          <div class="wes-billboard__body-content">
            <div class="wes-billboard__content">
              <h2 class="wes-billboard__title">{{ billboardTitle }}</h2>
              <div class="wes-billboard__message" [innerHTML]="billboardMessage">
                <!-- Rich text content -->
              </div>
              <div class="wes-billboard__actions">
                <a class="wes-billboard__cta wes-button wes-button--on-light" href="/savings-and-investments/with-profits-isa/before-you-begin" target="_blank">{{ primaryCtaText }}</a>
              </div>
            </div>
          </div>
          <div class="wes-billboard__bg">
            <div class="wes-billboard__bg-image" style="background-image: url(http://placekitten.com/600/400)"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  props: {
    collapse: optionsKnob('Collapse', {
      'Yes': 'yes', 
      'No': 'no'
    }, 'no', {
      display: 'inline-radio',
    }),
    billboardTitle: text('Billboard title', 'Stocks and shares ISA'),
    billboardMessage: text('Billboard message', '<p>Offering a tax shelter for your savings, plus the potential for growth, a stocks and shares ISA is a popular way to invest. There are two stocks and shares ISAs available from Wesleyan Group – find the right product for you and apply online today.</p>'),
    primaryCtaText: text('Primary CTA text', 'Choose your ISA'),
  },
});
