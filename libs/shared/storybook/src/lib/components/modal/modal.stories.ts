export default {
  title: 'Components/Modal',
};

export const base = () => ({
  template: `
    <div class="modal show" id="wes-pre-banner" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false" aria-modal="true" style="padding-right: 17px; display: block;">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body wes-rich-text-scope">
            <h4>We use cookies</h4>
            <p>We use cookies to make sure this website works properly and to help us understand how people use it. Cookies also help to improve your experience on the site, by personalising content and showing information that is relevant to you. Data from cookies may be shared with third parties. You can find out more by reading our <a target="_blank" href="http://www2.wesleyan.co.uk/cookies">cookie policy</a>.</p>
            <p>To continue using the site, please accept these cookies or manage your cookie settings below.</p>
          </div>
          <div class="modal-footer">
            <button class="pre-banner-button wes-link" id="view-options-text">Manage your cookie settings</button>
            <button class="accept_all pre-banner-button wes-button wes-button-cta wes-button-cta--orange-with-grey-hover modal-footer-action-primary" id="accept-all-text">Accept</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop show"></div>
  `,
});

export const withClose = () => ({
  template: `
    <div class="modal show" id="wes-pre-banner" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false" aria-modal="true" style="padding-right: 17px; display: block;">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <span class="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                <path fill="none" stroke="#B3B5B9" stroke-linecap="round" stroke-width="2" d="M4.83883476,4.83883476 L18.8492424,18.8492424 M18.7175144,4.83883476 L4.70710678,18.8492424" transform="translate(-3 -3)"></path>
              </svg>
            </button>
          </div>
          <div class="modal-body wes-rich-text-scope">
            <h4>We use cookies</h4>
            <p>We use cookies to make sure this website works properly and to help us understand how people use it. Cookies also help to improve your experience on the site, by personalising content and showing information that is relevant to you. Data from cookies may be shared with third parties. You can find out more by reading our <a target="_blank" href="http://www2.wesleyan.co.uk/cookies">cookie policy</a>.</p>
            <p>To continue using the site, please accept these cookies or manage your cookie settings below.</p>
          </div>
          <div class="modal-footer">
            <button class="pre-banner-button wes-link" id="view-options-text">Manage your cookie settings</button>
            <button class="accept_all pre-banner-button wes-button wes-button-cta wes-button-cta--orange-with-grey-hover modal-footer-action-primary" id="accept-all-text">Accept</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop show"></div>
  `,
});