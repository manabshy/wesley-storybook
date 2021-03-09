import { addParameters } from '@storybook/angular';
import {
  select,
  text,
  withKnobs,
  optionsKnob,
  object,
} from '@storybook/addon-knobs';

addParameters({ docs: { iframeHeight: 500 } });

export default {
  title: 'Components/InPageMenu',
  decorators: [withKnobs],
  //   parameters: {
  //     knobs: {
  //       escapeHTML: false,
  //     },
  //   },
};

const styleVariants = {
  'white background': 'container-white',
  'grey background': 'container-grey',
};

export const inPageMenu = () => ({
  template: `
  <nav aria-label="in page menu" class="{{variant}}">
    <h2>{{mainHeading}}</h2>
    <ul>
        <ng-container *ngFor="let menuItem of menuItems">
            <li [ngClass]="(showIcons==='yes' && menuItem.iconcss) ? menuItem.iconcss : null">{{menuItem.text}}</li>
        </ng-container>
    </ul>
  </nav>
  `,
  variant: select('variant', styleVariants, 'container-white'),
  mainHeading: text('main heading', 'On this page'),
  menuItems: object('menu items', [
    { text: 'How it works', iconcss: '' },
    { text: 'Our funds', iconcss: '' },
    { text: 'Key features', iconcss: '' },
    { text: 'Apply for your ISA', iconcss: '' },
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
});
