import {
  select,
  text,
  withKnobs,
  optionsKnob,
  object,
} from '@storybook/addon-knobs';
import mdx from './menu.mdx';

export default {
  title: 'Components/InPageMenu',
  decorators: [withKnobs],
  parameters: {
    knobs: {
      escapeHTML: false,
    },
    docs: { iframeHeight: 500, page: mdx },
  },
};

const styleVariants = {
  'white background': 'wes-bg-solid-white',
  'grey background': 'wes-bg-solid-grey-50',
};

export const inPageMenu = () => ({
  template: `
  <nav aria-label="in page menu" class="wes-in-page-menu {{variant}}">
    <div class="container">
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

export const wesIconFont = () => ({
  template: `
  <div class="container">
    <div class="row">
        <div class="col-12">
            <h2>using in css</h2>
            <div class="d-flex flex-wrap mb-3 justify-content-between">
            <span class="wes-font-icon-legal"></span>
            <span class="wes-font-icon-briefcase"></span>
            <span class="wes-font-icon-gp"></span>
            <span class="wes-font-icon-education"></span>
            <span class="wes-font-icon-web-link"></span>
            <span class="wes-font-icon-sheet"></span>

            <span class="wes-font-icon-user"></span>
            <span class="wes-font-icon-arrow-right"></span>
            <span class="wes-font-icon-alert"></span>
            <span class="wes-font-icon-chat"></span>
            <span class="wes-font-icon-plus"></span>
            <span class="wes-font-icon-minus"></span>
            <span class="wes-font-icon-close"></span>
            <span class="wes-font-icon-tick"></span>
            <span class="wes-font-icon-chevron-left"></span>
            <span class="wes-font-icon-chevron-up"></span>
            <span class="wes-font-icon-chevron-down"></span>
            <span class="wes-font-icon-link"></span>
            <span class="wes-font-icon-clock"></span>
            <span class="wes-font-icon-search"></span>
            <span class="wes-font-icon-menu"></span>
            <span class="wes-font-icon-medical"></span>
            <span class="wes-font-icon-dental"></span>
            </div>
            <h2>using as html entity</h2>
            <div class="d-flex flex-wrap justify-content-between">
            <span class="wes-font-icon">&#xe914;</span>
            <span class="wes-font-icon">&#xe915;</span>
            <span class="wes-font-icon">&#xe916;</span>
            <span class="wes-font-icon">&#xe917;</span>
            <span class="wes-font-icon">&#xe912;</span>
            <span class="wes-font-icon">&#xe913;</span>
            <span class="wes-font-icon">&#xe900;</span>
            <span class="wes-font-icon">&#xe901;</span>
            <span class="wes-font-icon">&#xe902;</span>
            <span class="wes-font-icon">&#xe903;</span>
            <span class="wes-font-icon">&#xe904;</span>
            <span class="wes-font-icon">&#xe905;</span>
            <span class="wes-font-icon">&#xe906;</span>
            <span class="wes-font-icon">&#xe907;</span>
            <span class="wes-font-icon">&#xe908;</span>
            <span class="wes-font-icon">&#xe909;</span>
            <span class="wes-font-icon">&#xe90a;</span>
            <span class="wes-font-icon">&#xe90b;</span>
            <span class="wes-font-icon">&#xe90c;</span>
            <span class="wes-font-icon">&#xe90d;</span>
            <span class="wes-font-icon">&#xe90e;</span>
            <span class="wes-font-icon">&#xe90f;</span>
            <span class="wes-font-icon">&#xe910;</span>
            <span class="wes-font-icon">&#xe911;</span>
            </div>
        </div>
    </div>
</div>
    `,
});
