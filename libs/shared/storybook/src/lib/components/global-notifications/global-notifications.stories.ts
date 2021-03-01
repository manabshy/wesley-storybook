import { select, text, withKnobs, optionsKnob } from '@storybook/addon-knobs';
import * as jquery from 'jquery';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';

global = { ...global, ...{ $: jquery, jQuery: jquery, bootstrap: bootstrap } };
export default {
  title: 'Components/Global notifications',
  // decorators: [withKnobs],
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

const styleVariants = {
  'Emergency Broadcast': '',
  'Single Page': 'single-page',
};

const showNotification = function () {
  setTimeout(() => {
    const $ = global['$'];
    const globalnotification = $('#globalnotification');
    globalnotification.on('hidden.bs.collapse', function () {
      const tm = setTimeout(() => {
        globalnotification.collapse('show');
      }, 5000);
    });
  });
};

export const notifications = () => ({
  template: `<div class="wes-global-notification fade show {{variant}}" id="globalnotification" aria-expanded="true" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="container">
    <div class="wes-global-notification__header">
      <span class="me-auto">{{headerText}}</span>
      <button *ngIf="variant !== 'single-page'" type="button" data-toggle="collapse" href="#globalnotification" class="wes-global-notification__close" data-target="#globalnotification" aria-label="Close"></button>
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
