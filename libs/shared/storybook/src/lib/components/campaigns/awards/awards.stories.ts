export default {
  title: 'Campaigns|Awards (Full Width)',
};

export const base = () => ({
  template: `
    <div class="wes-awards">
      <div class="wes-awards__wrapper">
        <div class="wes-awards__header">
          <div class="wes-awards__header-content">
            <h2 class="wes-awards__title">Awards and accreditations</h2>
            <div class="wes-awards__message">
              <!-- Rich text -->
              <p>Just some of our credentials in the medical field&hellip;</p>
            </div>
          </div>
        </div>
        <div class="wes-awards__cards">
          <div class="wes-awards__cards-content">
            <article class="wes-awards__card">
              <h3 class="wes-awards__card-title">Exclusive Financial Advice Provider to the RCGP (Royal College of General Practitioners)</h3>
              <div class="wes-awards__card-logo">
                <img src="/assets/images/rcgp-logo.svg" />
              </div>
            </article>
            <article class="wes-awards__card">
              <h3 class="wes-awards__card-title">Investment Team of the Year at the Insurance Asset Risk Awards 2020</h3>
              <div class="wes-awards__card-logo">
                <img src="/assets/images/insurance-awards.svg" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  `,
});

export const withGreyAccent = () => ({
  template: `
    <!-- Awards component root -->
    <div class="wes-awards wes-awards--grey-accent">
      <div class="wes-awards__wrapper">
        <div class="wes-awards__header">
          <div class="wes-awards__header-content">
            <h2 class="wes-awards__title">Awards and accreditations</h2>
            <div class="wes-awards__message">
              <!-- Rich text -->
              <p>Just some of our credentials in the medical field&hellip;</p>
            </div>
          </div>
        </div>
        <div class="wes-awards__cards">
          <div class="wes-awards__cards-content">
            <article class="wes-awards__card">
              <h3 class="wes-awards__card-title">Exclusive Financial Advice Provider to the RCGP (Royal College of General Practitioners)</h3>
              <div class="wes-awards__card-logo">
                <img src="/assets/images/rcgp-logo.svg" />
              </div>
            </article>
            <article class="wes-awards__card">
              <h3 class="wes-awards__card-title">Investment Team of the Year at the Insurance Asset Risk Awards 2020</h3>
              <div class="wes-awards__card-logo">
                <img src="/assets/images/insurance-awards.svg" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  `,
});

export const withIcons = () => ({
  template: `
    <!-- Awards component root -->
    <div class="wes-awards">
      <div class="wes-awards__wrapper">
        <div class="wes-awards__header">
          <div class="wes-awards__header-content">
            <h2 class="wes-awards__title">Awards and accreditations</h2>
            <div class="wes-awards__message">
              <!-- Rich text -->
              <p>Just some of our credentials in the medical field&hellip;</p>
            </div>
          </div>
        </div>
        <div class="wes-awards__cards">
          <div class="wes-awards__cards-content">
            <article class="wes-awards__card">
              <div class="wes-awards__card-icon">
                <img alt="" src="/assets/icons/svg/icon-award.svg" />
              </div>
              <h3 class="wes-awards__card-title">Exclusive Financial Advice Provider to the RCGP (Royal College of General Practitioners)</h3>
            </article>
            <article class="wes-awards__card">
              <div class="wes-awards__card-icon">
                <img alt="" src="/assets/icons/svg/icon-award.svg" />
              </div>
              <h3 class="wes-awards__card-title">Investment Team of the Year at the Insurance Asset Risk Awards 2020</h3>
            </article>
          </div>
        </div>
      </div>
    </div>
  `,
});

export const single = () => ({
  template: `
    <!-- Awards component root -->
    <div class="wes-awards">
      <div class="wes-awards__wrapper">
        <div class="wes-awards__header">
          <div class="wes-awards__header-content">
            <h2 class="wes-awards__title">Awards and accreditations</h2>
            <div class="wes-awards__message">
              <!-- Rich text -->
              <p>Just some of our credentials in the medical field&hellip;</p>
            </div>
          </div>
        </div>
        <div class="wes-awards__cards">
          <div class="wes-awards__cards-content">
            <article class="wes-awards__card">
              <h3 class="wes-awards__card-title">Investment Team of the Year at the Insurance Asset Risk Awards 2020</h3>
              <div class="wes-awards__card-logo">
                <img src="/assets/images/insurance-awards.svg" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  `,
});

