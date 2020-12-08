import { boolean } from '@storybook/addon-knobs';

export default {
  title: 'Campaigns|Hero',
};

export const base = () => ({
  template: `
    <div class="wes-hero-banner wes-hero-banner--campaign pb-11">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-lg-6">
            <div class="wes-hero-banner__text">
              <div class="text-container">
                <h1 class="wes-hero-banner__title">NHS Pension Advice</h1>

                <p class="wes-hero-banner__sub-title">Let us help you retire early&hellip;</p>

                <a class="wes-hero-banner__cta wes-button wes-button-cta" href="/savings-and-investments/with-profits-isa/before-you-begin" target="_blank">
                  <span class="wes-button-label">Speak to our experts</span>
                  <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="wes-icon wes-icon-size-m" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="none" stroke-linecap="round" stroke-width="1"><g stroke="#FEBD11" stroke-width="2" transform="translate(-293.000000, -340.000000)"><g transform="translate(0.000000, 72.000000)"><g transform="translate(97.000000, 88.000000)"><g transform="translate(0.000000, 160.000000)"><g transform="translate(32.000000, 20.000000)"><g transform="translate(164.000000, 0.000000)"><polyline class="svg-path-color-change" id="Rectangle" points="25 9 19 15 13 9" stroke-linejoin="round" transform="translate(19.000000, 12.000000) rotate(-90.000000) translate(-19.000000, -12.000000) "></polyline><line class="svg-path-color-change" id="Line" x1="21" x2="2" y1="12" y2="12"></line></g></g></g></g></g></g></g></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wes-hero-banner__shapes">
        <div class="wes-hero-banner__image" style="background-image: url(/-/media/project/wesleyan/website/manwithglassesjpg.jpg);"></div>
        <svg id="desktop" viewBox="0 0 871 600" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <rect id="path-1" x="0" y="0" width="871" height="600"></rect>
            <linearGradient x1="36.9092429%" y1="0%" x2="63.0913396%" y2="100%" id="linearGradient-3">
              <stop stop-color="#FEBD11" offset="0%"></stop>
              <stop stop-color="#FEDD36" stop-opacity="0.3" offset="60%"></stop>
              <stop stop-color="#FEDD36" stop-opacity="0.1" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g id="🔴-1.-Product-Page" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="1_ISA-Product-Page_1366" transform="translate(0.000000, -72.000000)">
              <g id="Hero" transform="translate(0.000000, 72.000000)">
                <g id="Background">
                  <g id="Shapes-Group">
                    <mask id="mask-2" fill="white">
                        <use xlink:href="#path-1"></use>
                    </mask>
                    <g id="Rectangle"></g>
                    <g id="Trianlge_White" mask="url(#mask-2)" fill="#FFFFFF">
                      <g transform="translate(329.000000, 0.000000)" id="Triangle">
                        <polygon points="0 0 541.403287 0 270.701643 750"></polygon>
                      </g>
                    </g>
                    <rect id="Rectangle" fill="#FEBD11" mask="url(#mask-2)" x="0" y="0" width="654" height="600"></rect>
                    <g id="Triangle_Half" mask="url(#mask-2)" fill="#FEBD11">
                      <g transform="translate(653.000000, 0.000000)" id="Trapezoid">
                        <polygon points="-1.87156911e-15 600 -1.64488885e-13 0 217.5 600"></polygon>
                      </g>
                    </g>
                    <g id="Triangle_Gradient" mask="url(#mask-2)" fill="url(#linearGradient-3)">
                      <g transform="translate(330.000000, 0.000000)" id="Triangle">
                        <polygon points="0 0 540.719697 0 270.359848 750"></polygon>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <svg id="mobile" viewBox="0 0 320 448" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <linearGradient x1="36.8275583%" y1="0%" x2="63.1730279%" y2="100%" id="linearGradient-1">
              <stop stop-color="#FEBD11" offset="0%"></stop>
              <stop stop-color="#FEDD36" stop-opacity="0.3" offset="60%"></stop>
              <stop stop-color="#FEDD36" stop-opacity="0.1" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g id="🔴-1.-Product-Page" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="1_ISA-Product-Page_320" transform="translate(0.000000, -172.000000)">
              <g id="Hero" transform="translate(0.000000, 60.000000)">
                <g id="Background">
                  <g id="Shapes-Group" transform="translate(0.000000, 112.000000)">
                    <g id="Trianlge_White" transform="translate(40.000000, 0.000000)" fill="#FFFFFF">
                      <polygon id="Triangle" transform="translate(140.000000, 101.362007) scale(-1, 1) rotate(270.000000) translate(-140.000000, -101.362007) " points="38.8888889 -38.6379928 241.111111 -38.6379928 140 241.362007"></polygon>
                    </g>
                    <rect id="Rectangle" fill="#FEBD11" x="0" y="115" width="320" height="333"></rect>
                    <g id="Triangle_Half" transform="translate(160.000000, 58.000000) scale(-1, 1) translate(-160.000000, -58.000000) " fill="#FEBD11">
                      <polygon id="Trapezoid" transform="translate(160.000000, 57.921147) rotate(-90.000000) translate(-160.000000, -57.921147) " points="102.078853 217.921147 102.078853 -102.078853 217.921147 217.921147"></polygon>
                    </g>
                    <g id="Triangle_Gradient" fill="url(#linearGradient-1)">
                      <polygon id="Triangle" transform="translate(160.000000, 116.000000) scale(-1, 1) rotate(270.000000) translate(-160.000000, -116.000000) " points="44.2871287 -44 275.712871 -44 160 276"></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>

    <div class="wes-value-proposition" [ngClass]="{'wes-value-proposition--grey':valuePropositionOnGrey}">
      <div class="wes-value-proposition__wrapper">
        <div class="wes-value-proposition__body">
          <div class="wes-value-proposition__body-content">
            <div class="wes-value-proposition__frame">
              <div class="wes-value-proposition__main">
                <div class="wes-value-proposition__main-content">
                  <div class="wes-value-proposition__message">

                    <!-- RTE content -->
                    <p class="highlight">Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  props: {
    valuePropositionOnGrey: boolean('Value proposition on grey', false),
  },
});
  
export const grey = () => ({
  template: `
    <div class="wes-hero-banner wes-hero-banner--campaign-full-width">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-lg-6">
            <div class="wes-hero-banner__text">
              <div class="text-container">
                <h1 class="wes-hero-banner__title">High-value home insurance</h1>

                <p class="wes-hero-banner__sub-title">High-value home cover, for priceless peace of mind</p>

                <a class="wes-hero-banner__cta wes-button-cta--orange-with-grey-hover wes-button wes-button-cta" href="/savings-and-investments/with-profits-isa/before-you-begin" target="_blank">
                  <span class="wes-button-label">Get a quote</span>
                  <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="wes-icon wes-icon-size-m" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="none" stroke-linecap="round" stroke-width="1"><g stroke="#FEBD11" stroke-width="2" transform="translate(-293.000000, -340.000000)"><g transform="translate(0.000000, 72.000000)"><g transform="translate(97.000000, 88.000000)"><g transform="translate(0.000000, 160.000000)"><g transform="translate(32.000000, 20.000000)"><g transform="translate(164.000000, 0.000000)"><polyline class="svg-path-color-change" id="Rectangle" points="25 9 19 15 13 9" stroke-linejoin="round" transform="translate(19.000000, 12.000000) rotate(-90.000000) translate(-19.000000, -12.000000) "></polyline><line class="svg-path-color-change" id="Line" x1="21" x2="2" y1="12" y2="12"></line></g></g></g></g></g></g></g></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wes-hero-banner__image" style="background-image: url(https://via.placeholder.com/1445x963.jpg);"></div>
    </div>

    <div class="wes-value-proposition wes-value-proposition--wide">
      <div class="wes-value-proposition__wrapper">
        <div class="wes-value-proposition__body">
          <div class="wes-value-proposition__body-content">
            <div class="wes-value-proposition__frame">
              <div class="wes-value-proposition__main">
                <div class="wes-value-proposition__main-content">
                  <div class="wes-value-proposition__message">

                    <!-- RTE content -->
                    <p class="highlight" style="text-align: right">Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});
  