import { select, text, withKnobs, optionsKnob } from '@storybook/addon-knobs';
import * as jquery from 'jquery';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
import mdx from './notifications.mdx';

global = { ...global, ...{ $: jquery, jQuery: jquery, bootstrap: bootstrap } };
export default {
  title: 'Components/Global notifications',
  // decorators: [withKnobs],
  parameters: {
    knobs: {
      escapeHTML: false,
    },
    docs: {
      iframeHeight: 500,
      page: mdx,
    },
  },
};

const styleVariants = {
  'Emergency Broadcast': '',
  'Single Page': 'single-page',
};

const showNotification = () => {
  setTimeout(() => {
    const $ = global['$'];
    const gn = $('#wes-globalnotification');
    gn.on('hidden.bs.collapse', function () {
      document.cookie = 'WesleyanGlobalNotification=true; path=/';
      const tm = setTimeout(() => {
        gn.collapse('show');
      }, 5000);
    });
  });
};

export const notifications = () => ({
  template: `<div class="wes-global-notification fade show {{variant}}" [attr.id]="variant !== 'single-page' ? 'wes-globalnotification': null" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="container">
    <div class="wes-global-notification__header">
      <span class="me-auto">{{headerText}}</span>
      <button *ngIf="variant !== 'single-page'" type="button" data-toggle="collapse" class="wes-global-notification__close" data-target="#wes-globalnotification" aria-expanded="true" aria-label="Close"></button>
    </div>
    <div *ngIf="bodyText.length > 0" class="wes-global-notification__body" [innerHtml]="bodyText"></div>
    <div *ngIf="timeStamp.length > 0 && withDateStamp == 'yes'" class="wes-global-notification__timestamp">
      {{timeStamp}}
    </div>
  </div>
</div>`,
  props: {
    variant: select('Variant', styleVariants, ''),
    headerText: text('header text', 'Our phone lines are down…'),
    bodyText: text(
      'body text',
      `Trying to call us? We’re having some technical problems. <a href="javascript:void(0);">Find out more</a>`
    ),
    timeStamp: text('date stamp', 'Updated 18th January 2021, 4pm'),
    withDateStamp: optionsKnob(
      'with date stamp',
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

notifications.decorators = [
  withKnobs,
  (storyFunc) => {
    const story = storyFunc();
    showNotification();
    return {
      ...story,
      // template: `${story.template}`,
    };
  },
];
