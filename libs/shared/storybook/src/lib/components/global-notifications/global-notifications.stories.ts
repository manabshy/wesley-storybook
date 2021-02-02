export default {
  title: 'Components/Global notifications',
};

export const emergencyBroadcast = () => ({
  template: `<div class="wes-global-notification fade show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="wes-global-notification__header">
    <span class="me-auto">Our phone lines are down…</span>
    <button type="button" class="wes-global-notification__close" data-bs-dismiss="wes-global-notification" aria-label="Close"></button>
  </div>
  <div class="wes-global-notification__body">
    Trying to call us? We’re having some technical problems. Find out more.
  </div>
  <div class="wes-global-notification__timestamp">
    Updated 18th January 2021, 4pm
  </div>
</div>`,
});
