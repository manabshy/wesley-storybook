import {
  select,
  text,
  withKnobs,
  optionsKnob,
  object,
} from '@storybook/addon-knobs';

export default {
  title: 'Components/InPageMenu',
  decorators: [withKnobs],
  parameters: {
    knobs: {
      escapeHTML: false,
    },
    docs: { iframeHeight: 500 },
  },
};

const styleVariants = {
  'white background': 'wes-bg-solid-white',
  'grey background': 'wes-bg-solid-grey-50',
};

export const inpagemenu = () => ({
  template: `
  <nav aria-label="in page menu" class="wes-in-page-menu container {{variant}}">
    <div class="row">
        <div class="col-12">
            <h2 class="heading">{{mainHeading}}</h2>
            <ul>
                <ng-container *ngFor="let menuItem of menuItems">
                    <li><a [ngClass]="(showIcons==='yes' && menuItem.iconcss) ? menuItem.iconcss : null" href="#">{{menuItem.text}}</a></li>
                </ng-container>
            </ul>
        </div>
    </div>
  </nav>
  `,
  props: {
    variant: select('variant', styleVariants, 'wes-bg-solid-white'),
    mainHeading: text('main heading', 'On this page'),
    menuItems: object('menu items', [
      { text: 'How it works', iconcss: 'wes-font-icon-chat' },
      { text: 'Our funds', iconcss: 'wes-font-icon-user' },
      { text: 'Key features', iconcss: 'wes-font-icon-alert' },
      { text: 'Apply for your ISA', iconcss: 'wes-font-icon-clock' },
      {
        text: 'What’s Total Home Protection?',
        iconcss: 'wes-font-icon-chevron-down',
      },
    ]),
    showIcons: optionsKnob(
      'show icons',
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
