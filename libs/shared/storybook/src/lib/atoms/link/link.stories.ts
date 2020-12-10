export default {
  title: 'Atoms|Link',
};

const variants = {
  'On Light': 'wes-button--on-light',
  'On Gold': 'wes-button--on-gold',
  'On Dark': 'wes-button--on-dark',
};

export const core = () => ({
  template: `
    <div class="bg-solid-white" style="padding:2rem;">
      <div class="d-flex">
        <div class="pr-3">
          <a href="#" class="wes-link">Book an appointment</a>
        </div>
      </div>
    </div>

    <div class="wes-bg-solid-gold-900" style="padding:2rem;">
      <div class="d-flex">
        <div class="pr-3">
          <a href="#" class="wes-link wes-link--on-gold">Book an appointment</a>
        </div>
      </div>
    </div>

    <div class="wes-bg-solid-grey-900" style="padding:2rem;">
      <div class="d-flex">
        <div class="pr-3">
          <a href="#" class="wes-link wes-link--on-dark">Book an appointment</a>
        </div>
      </div>
    </div>
  `,
});

export const legacy = () => ({
  template: `
    <div class="bg-solid-white" style="padding:2rem;">
      <p>
        <button class="wes-button wes-button-link">Enter address manually</button>
        <button class="wes-link">Button semantics</button>
        <a href="#" class="wes-link">Link semantics</a>
      </p>
      <p>Wesleyan Unit Trust Managers Ltd and Wesleyan Financial Services are wholly owned by Wesleyan Assurance Society which is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority. <a href="#" class="wes-link">Click for more information</a> about the Wesleyan group of companies.© 2020 Wesleyan Assurance Society. All rights reserved, for UK use only.</p>
    </div>
    <div class="wes-bg-solid-gold-900 mt-2" style="padding: 2rem">
      <p>
        <a href="#" class="wes-link wes-link--over-background">Click for more information</a> about the Wesleyan group of companies.© 2020 Wesleyan Assurance Society. All rights reserved, for UK use only.
      </p>
    </div>
    <div class="wes-bg-solid-grey-900 mt-2" style="padding: 2rem">
      <p style="color:white">
        <a href="#" style="color:white" class="wes-link wes-link--white-on-grey">Click for more information</a> about the Wesleyan group of companies.© 2020 Wesleyan Assurance Society. All rights reserved, for UK use only.
      </p>
    </div>
  `,
});
