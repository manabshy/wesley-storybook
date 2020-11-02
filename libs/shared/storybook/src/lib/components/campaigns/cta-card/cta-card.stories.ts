export default {
  title: 'Campaigns|CTA Card (Full Width)',
};

export const base = () => ({
  template: `
    <!-- Component root -->
    <div class="wes-cta-card">
      <div class="wes-cta-card__wrapper">
        <div class="wes-cta-card__frame">
          <div class="wes-cta-card__body">
            <div class="wes-cta-card__body-content">
              <div class="wes-cta-card__icon">
                <svg width="45" height="56" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <path stroke="#FEBD11" stroke-linecap="square" d="M1 46.5h42.5"/>
                    <path d="M25.5.5v22.557L18 17.969l-7.5 5.088V.5h15z" stroke="#FEBD11"/>
                    <path d="M.5.5h42a2 2 0 012 2v51a2 2 0 01-2 2H.5h0V.5z" stroke="#1E2630" stroke-linecap="round"/>
                    <path stroke="#1E2630" stroke-linecap="square" d="M35.5.5v54"/>
                  </g>
                </svg>
              </div>
              <div class="wes-cta-card__content">
                <div class="wes-cta-card__message">
                  <p>Book today and we'll also send you our free guide to the NHS pension - packed with useful information to help you make sense of the scheme.</p>
                </div>
                <div class="wes-cta-card__action">
                  <a class="wes-link" href="#">Get your free NHS pension guide</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});

export const grey = () => ({
  template: `
    <!-- Component root -->
    <div class="wes-cta-card wes-cta-card--grey">
      <div class="wes-cta-card__wrapper">
        <div class="wes-cta-card__frame">
          <div class="wes-cta-card__body">
            <div class="wes-cta-card__body-content">
              <div class="wes-cta-card__icon">
                <svg width="45" height="56" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <path stroke="#FEBD11" stroke-linecap="square" d="M1 46.5h42.5"/>
                    <path d="M25.5.5v22.557L18 17.969l-7.5 5.088V.5h15z" stroke="#FEBD11"/>
                    <path d="M.5.5h42a2 2 0 012 2v51a2 2 0 01-2 2H.5h0V.5z" stroke="#1E2630" stroke-linecap="round"/>
                    <path stroke="#1E2630" stroke-linecap="square" d="M35.5.5v54"/>
                  </g>
                </svg>
              </div>
              <div class="wes-cta-card__content">
                <div class="wes-cta-card__message">
                  <p>Book today and we'll also send you our free guide to the NHS pension - packed with useful information to help you make sense of the scheme.</p>
                </div>
                <div class="wes-cta-card__action">
                  <a class="wes-link" href="#">Get your free NHS pension guide</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});
