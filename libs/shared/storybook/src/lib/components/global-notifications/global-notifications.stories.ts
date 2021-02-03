import { select, text, withKnobs, optionsKnob } from '@storybook/addon-knobs';
export default {
  title: 'Components/Global notifications',
  decorators: [withKnobs],
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

const hideNotification = function (e: Event) {
  const target: HTMLButtonElement = e.target as HTMLButtonElement;
  const selector = target.getAttribute('data-bs-dismiss');
  const notification = target.closest(`.${selector}`);
  notification.classList.remove('show');

  const tm = setTimeout(() => {
    notification.classList.add('show');
    clearTimeout(tm);
  }, 5000);
};

export const notifications = () => ({
  template: `<div class="wes-global-notification fade show {{variant}}" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="container">
    <div class="wes-global-notification__header">
      <span class="me-auto">{{headerText}}</span>
      <button *ngIf="variant !== 'single-page'" type="button" (click)="clickClose($event)" class="wes-global-notification__close" data-bs-dismiss="wes-global-notification" aria-label="Close"></button>
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
    clickClose: hideNotification,
  },
});
