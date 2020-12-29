import { number, text, select, optionsKnob } from '@storybook/addon-knobs';

export default {
  title: 'Core|Card Deck (Full Width)',
  parameters: { 
    knobs: {
      escapeHTML: false,
    },
  },
};

const variants = {
  'On White': '',
  'On White :: Collapsed': 'wes-card-deck--collapse',
  'On White :: With Icons': 'wes-card-deck--icons',
  'On White :: With Icons :: Collapsed': 'wes-card-deck--icons wes-card-deck--collapse',
  'On Grey': 'wes-card-deck--grey',
  'On Grey :: Collapsed': 'wes-card-deck--grey wes-card-deck--collapse',
  'On Grey :: With Icons': 'wes-card-deck--grey wes-card-deck--icons',
  'On Grey :: With Icons :: Collapsed': 'wes-card-deck--grey wes-card-deck--icons wes-card-deck--collapse',
};

export const cardDeck = () => ({
  template: `
    <div class="wes-card-deck {{variant}}">
      <div class="wes-card-deck__wrapper">
        <div *ngIf="!!title || !!message" class="wes-card-deck__header">
          <div class="wes-card-deck__header-content">
            <h2 *ngIf="!!title" class="wes-card-deck__title">{{ title }}</h2>
            <div *ngIf="!!message" class="wes-card-deck__message" [innerHTML]="message">
              <!-- Rich text content -->
            </div>
          </div>
        </div>
        <div class="wes-card-deck__deck">
          
          <div class="wes-card-deck__deck-item" *ngFor="let card of [].constructor(cardCount)">
            <article class="wes-card-deck__card">
              <div *ngIf="withImage == 'yes'" class="wes-card-deck__card-bg" style="background-image:url(http://placekitten.com/572/320)"></div>
              <div class="wes-card-deck__card-icon">
                <svg height="64" width="64" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <circle cx="10.333" cy="19.667" fill="#FEBD11" r="1"></circle>
                    <circle cx="6.333" cy="19.667" fill="#FEBD11" r="1"></circle>
                    <circle cx="14.333" cy="19.667" fill="#FEBD11" r="1"></circle>
                    <path d="M16.667 12.833c.69 0 1.315.28 1.767.733.453.452.733 1.077.733 1.767h0v8.711c0 .69-.28 1.316-.733 1.768a2.492 2.492 0 01-1.767.732h0H5.419L.833 32.048V15.333c0-.69.28-1.315.733-1.767a2.492 2.492 0 011.767-.733h0z" stroke="#1E2630" stroke-linejoin="round"></path>
                    <path d="M28.667.833c.69 0 1.315.28 1.767.733.453.452.733 1.077.733 1.767h0v8.711c0 .69-.28 1.316-.733 1.768a2.492 2.492 0 01-1.767.732h0-11.248l-4.586 5.504V3.333c0-.69.28-1.315.733-1.767a2.492 2.492 0 011.767-.733h0z" fill="#FFF" stroke="#1E2630" stroke-linejoin="round"></path>
                    <path d="M16.667 6h10.666M16.667 8.667h8" stroke="#FEBD11" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                </svg>
              </div>
              <div class="wes-card-deck__card-body">
                <div class="wes-card-deck__card-header">
                  <h2 class="wes-card-deck__card-title">{{ cardTitle }}</h2>
                </div>
                <div class="wes-card-deck__card-message" [innerHTML]="cardMessage">
                  <!-- Rich text content -->
                </div>
                <div class="wes-card-deck__card-footer">
                  <a class="wes-card-deck__card-cta" href="#">{{ cardLinkText }}</a>
                </div>
              </div>
            </article>
          </div>

        </div>
      </div>
    </div>
  `,
  props: {
    variant: select('Variant', variants, ''),
    cardCount: number('Number of cards', 6, {min:2}),
    withImage: optionsKnob('With image', {
      'Yes': 'yes', 
      'No': 'no'
    }, 'yes', {
      display: 'inline-radio',
    }),
    title: text('Title', 'Unit trust products from WUTM'),
    message: text('Message', '<p>Wesleyan Unit Trust Managers (WUTM) products allow you to invest in fully managed unit trust funds, run by an award-winning team.</p>'),
    cardTitle: text('Card title', 'With Profits ISA'),
    cardMessage: text('Card message', '<p>A stocks and shares ISA invested in Wesleyan’s With Profits Fund, the With Profits ISA lets you share in Wesleyan’s financial success.</p>'),
    cardLinkText: text('Card link text', 'Apply now'),
  },
});