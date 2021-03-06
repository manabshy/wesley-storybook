import { text, select } from '@storybook/addon-knobs';

export default {
  title: 'Campaigns/Next Steps (Full Width)',
  parameters: { 
    knobs: {
      escapeHTML: false,
    },
  },
};

const variants = {
  'On White': '',
  'On Grey': 'wes-next-steps--grey',
};

export const nextSteps = () => ({
  template: `
    <div class="wes-next-steps {{variant}}">
      <div class="wes-next-steps__wrapper">
        <div class="wes-next-steps__body">
          <div class="wes-next-steps__content">
            <h2 class="wes-next-steps__title">{{ title }}</h2>
            <div class="wes-next-steps__message" [innerHTML]="message">
              <!-- Rich text content -->
            </div>
            <div class="wes-next-steps__cta">
              <a class="wes-button wes-button-cta wes-button-cta--orange-hover" href="/savings-and-investments/with-profits-isa/before-you-begin" target="_blank">
                <span class="wes-button-label">{{ ctaText }}</span>
                
                <svg class="wes-icon wes-icon-size-m" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                    <g  transform="translate(-293.000000, -340.000000)" stroke="#FEBD11" stroke-width="2">
                      <g  transform="translate(0.000000, 72.000000)">
                        <g  transform="translate(97.000000, 88.000000)">
                          <g  transform="translate(0.000000, 160.000000)">
                            <g  transform="translate(32.000000, 20.000000)">
                              <g  transform="translate(164.000000, 0.000000)">
                                <polyline class="svg-path-color-change" id="Rectangle" stroke-linejoin="round" transform="translate(19.000000, 12.000000) rotate(-90.000000) translate(-19.000000, -12.000000) " points="25 9 19 15 13 9"></polyline>
                                <line class="svg-path-color-change" x1="21" y1="12" x2="2" y2="12" id="Line"></line>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div class="wes-next-steps__footnote" [innerHTML]="footnote">
              <!-- Rich text content -->
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  props: {
    variant: select('Variant', variants, ''),
    title: text('Title', 'Book your appointment now'),
    message: text('Message', '<p>To find out more about the NHS pension and discuss your financial future, book your appointment now. Your local Wesleyan Financial Consultant can come to see you at a time and place that\'s convenient for you (or speak to you via video call), with no charge for the meeting.</p>'),
    ctaText: text('CTA text', 'Book your appointment'),
    footnote: text('Footnote', '<p>Remember, there???s no obligation to use our services or invest in our products either. Just think of it as a helpful health-check for your pension plan.</p>'),
  },
});
