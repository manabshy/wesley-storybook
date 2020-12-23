import { text, optionsKnob } from '@storybook/addon-knobs';

export default {
  title: 'Campaigns|Support Block (Full Width)',
  parameters: { 
    knobs: {
      escapeHTML: false,
    },
  },
};
  
export const supportBlock = () => ({
  template: `
    <div class="wes-support-block">
      <div class="wes-support-block__wrapper">
        <div class="wes-support-block__header">
          <div *ngIf="withHeader == 'yes'" class="wes-support-block__header-content">
            <h2 class="wes-support-block__title">{{ title }}</h2>
            <div class="wes-support-block__message" [innerHTML]="subtitle">
              <!-- Rich text content -->
            </div>
          </div>
        </div>
        <div class="wes-support-block__body">
          <div class="wes-support-block__body-content">
            <div class="wes-support-block__frame">
              <div class="wes-support-block__main">
                <div class="wes-support-block__main-content">
                  <div class="wes-support-block__placeholder">
                    
                  <!-- Placeholder start -->

                    <!-- Rich Text start -->
                    <div class="component rich-text">
                      <div class="component-content">
                        <h3>Important Information</h3>
                        <p>Before you apply for high-value home insurance, please read the following documents:</p>
                      </div>
                    </div>
                    <!-- Rich Text end -->

                    <!-- Download Card 1 start -->
                    <a class="wes-download-card" href="/-/media/feature/isa/wp-isa-kfd.pdf" target="">
                      <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="wes-icon" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd" stroke="none" stroke-linejoin="round" stroke-width="1">
                          <g id="1_ISA-Product-Page_v2_1366" transform="translate(-113.000000, -8916.000000)">
                            <g id="Important-Information" transform="translate(0.000000, 6932.000000)">
                              <g id="Contents" transform="translate(95.000000, 228.000000)">
                                <g id="Key-Documents" transform="translate(0.000000, 1604.000000)">
                                  <g id="Doc-Card" transform="translate(0.000000, 120.000000)">
                                    <g id="Icon" transform="translate(18.000000, 32.000000)">
                                      <path d="M5.5,0.5 L21.75,0.5 L21.75,0.5 L27.5,7.28125 L27.5,30.5 C27.5,31.0522847 27.0522847,31.5 26.5,31.5 L16,31.5 L5.5,31.5 C4.94771525,31.5 4.5,31.0522847 4.5,30.5 L4.5,1.5 C4.5,0.94771525 4.94771525,0.5 5.5,0.5 Z" id="Rectangle" stroke="#1E2630"></path>
                                      <path d="M22.5,20.5 L22.5,23.5 C22.5,24.0522847 22.0522847,24.5 21.5,24.5 L10.5,24.5 C9.94771525,24.5 9.5,24.0522847 9.5,23.5 L9.5,20.5" id="Path" stroke="#1E2630" stroke-linecap="round"></path>
                                      <path d="M17.5,7.5 L17.5,15.5 L20.5,15.5 L16,20.5 L11.5,15.5 L14.5,15.5 L14.5,7.5 L17.5,7.5 Z" id="docCardArrow" stroke="#FEBD11"></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <span class="wes-download-card-text-container">
                        <span class="wes-download-card-label">Key Features Document</span>
                        <span class="wes-download-card-sub wes-text-xs">PDF (205KB)</span>
                      </span>
                    </a>
                    <!-- Download Card 1 end -->

                    <!-- Download Card 2 start -->
                    <a class="wes-download-card" href="/-/media/feature/isa/wp-isa-kfd.pdf" target="">
                      <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="wes-icon" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd" stroke="none" stroke-linejoin="round" stroke-width="1">
                          <g id="1_ISA-Product-Page_v2_1366" transform="translate(-113.000000, -8916.000000)">
                            <g id="Important-Information" transform="translate(0.000000, 6932.000000)">
                              <g id="Contents" transform="translate(95.000000, 228.000000)">
                                <g id="Key-Documents" transform="translate(0.000000, 1604.000000)">
                                  <g id="Doc-Card" transform="translate(0.000000, 120.000000)">
                                    <g id="Icon" transform="translate(18.000000, 32.000000)">
                                      <path d="M5.5,0.5 L21.75,0.5 L21.75,0.5 L27.5,7.28125 L27.5,30.5 C27.5,31.0522847 27.0522847,31.5 26.5,31.5 L16,31.5 L5.5,31.5 C4.94771525,31.5 4.5,31.0522847 4.5,30.5 L4.5,1.5 C4.5,0.94771525 4.94771525,0.5 5.5,0.5 Z" id="Rectangle" stroke="#1E2630"></path>
                                      <path d="M22.5,20.5 L22.5,23.5 C22.5,24.0522847 22.0522847,24.5 21.5,24.5 L10.5,24.5 C9.94771525,24.5 9.5,24.0522847 9.5,23.5 L9.5,20.5" id="Path" stroke="#1E2630" stroke-linecap="round"></path>
                                      <path d="M17.5,7.5 L17.5,15.5 L20.5,15.5 L16,20.5 L11.5,15.5 L14.5,15.5 L14.5,7.5 L17.5,7.5 Z" id="docCardArrow" stroke="#FEBD11"></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <span class="wes-download-card-text-container">
                        <span class="wes-download-card-label">Key Features Document</span>
                        <span class="wes-download-card-sub wes-text-xs">PDF (205KB)</span>
                      </span>
                    </a>
                    <!-- Download Card 2 end -->

                    <!-- Rich Text start -->
                    <div class="component rich-text">
                      <div class="component-content">
                        <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                        <p>Risk must be acceptable to underwriters at normal terms.</p>
                        <p>Wesleyan Financial Services Ltd is a broker and our insurance products are provided by a number of insurers.</p>
                        <p>Total Home Protection (except key care cover) is provided by Legal Protection Group who is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority. Key care cover is provided by Sparta Limited who is authorised and regulated by the Financial Conduct Authority.</p>
                        <p>Wesleyan Financial Services is a credit broker. Premium finance is provided by Premium Credit Ltd. who pay variable commission to us which could impact the interest rate you pay, now or in the future.</p>        
                      </div>
                    </div>
                    <!-- Rich Text end -->

                  <!-- Placeholder end -->

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
    withHeader: optionsKnob('With header', {
      'Yes': 'yes', 
      'No': 'no'
    }, 'no', {
      display: 'inline-radio',
    }),
    title: text('Title', 'Support Block'),
    subtitle: text('Subtitle', '<p>This component can conditionally have header content.</p>'),
  },
});
