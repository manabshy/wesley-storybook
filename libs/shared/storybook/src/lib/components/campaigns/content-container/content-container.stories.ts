import { text, select } from '@storybook/addon-knobs';

export default {
  title: 'Campaigns|Content Container (Full Width)',
  parameters: { 
    knobs: {
      escapeHTML: false,
    },
  },
};

const variants = {
  'Default': '',
  'With Image': 'wes-content-container--with-image',
  'With Header': ' wes-content-container--with-header',
};

export const contentContainer = () => ({
  template: `
    <div class="wes-content-container {{variant}}">
      <div class="wes-content-container__wrapper">
        <div *ngIf="!!variant" class="wes-content-container__header">
          <div *ngIf="variant.includes('with-image')" class="wes-content-container__bg" style="background-image: url(http://placekitten.com/700/320)"></div>
          <div *ngIf="variant.includes('with-header')" class="wes-content-container__header-content">
            <h2 class="wes-content-container__title">{{ title }}</h2>
            <div class="wes-content-container__message" [innerHTML]="subtitle">
              <!-- Rich text content -->
            </div>
          </div>
        </div>
        <div class="wes-content-container__body">
          <div class="wes-content-container__body-content">
            <div class="wes-content-container__frame">
              <div class="wes-content-container__frame-content">
                <div class="wes-content-container__main" [innerHTML]="message">
                  <!-- Rich text content -->
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
    title: text('Title', 'Insurance as unique as your home'),
    subtitle: text('Subtitle', '<p>When you own a high-value home, a standard insurance policy doesn\'t quite come up to scratch. That\'s why we work with a hand-picked panel of premium UK insurers to bring you the bespoke cover you need.</p>'),
    message: text('Content', '<h3>Key features:</h3>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dolor ac nisi sollicitudin feugiat. Integer vestibulum lectus vel lectus aliquet, vel suscipit turpis feugiat. Phasellus sagittis, elit eu congue finibus, arcu erat venenatis ligula, nec ullamcorper sapien dui et tortor. Curabitur eget magna id dui aliquam sagittis. Duis augue lectus, laoreet imperdiet hendrerit nec, tempus nec lorem. Proin est leo, venenatis quis urna vitae, consectetur luctus quam. Proin eget vulputate neque. Fusce aliquet condimentum sapien, non fringilla dui dictum ac. Ut interdum lectus nisl, vitae tincidunt ex aliquam id. Sed vel urna nec tortor aliquet eleifend. Mauris nec nibh elit. Nunc cursus eleifend leo sed ullamcorper. Vivamus sit amet massa nisi. Morbi pharetra molestie risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'),
  },
});
