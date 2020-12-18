import { select, text } from '@storybook/addon-knobs';

export default {
  title: 'Core|Billboard (Full Width)',
};

const variants = {
  'On White': '',
  'On Grey': 'wes-billboard--grey',
  'On White (Reversed)': 'wes-billboard--reverse',
  'On Grey (Reversed)': 'wes-billboard--reverse wes-billboard--grey',
};
  
export const billboard = () => ({
  template: `
    <div class="wes-billboard {{variant}}">
      <div class="wes-billboard__wrapper">
        <div class="wes-billboard__body">
          <div class="wes-billboard__body-content">
            <div class="wes-billboard__content">
              <h2 class="wes-billboard__title" [innerHTML]="title"></h2>
              <div class="wes-billboard__message">
                <p [innerHTML]="message"></p>
              </div>
              <div class="wes-billboard__actions">
                <a class="wes-billboard__cta wes-button wes-button--on-light" href="/savings-and-investments/with-profits-isa/before-you-begin" target="_blank" [innerHTML]="primaryCtaText"></a>
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
    title: text('Title', 'Stocks and shares ISA'),
    message: text('Message', 'Offering a tax shelter for your savings, plus the potential for growth, a stocks and shares ISA is a popular way to invest. There are two stocks and shares ISAs available from Wesleyan Group – find the right product for you and apply online today.'),
    primaryCtaText: text('Primary CTA text', 'Choose your ISA'),
  },
});
