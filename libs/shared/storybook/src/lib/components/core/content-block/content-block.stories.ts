import { select } from '@storybook/addon-knobs';

export default {
  title: 'Core/Content Block (Full Width)',
};

const variants = {
  'On White': '',
  'On White :: Collapsed': 'wes-content-block--collapse',
  'On White :: Right Aligned': 'wes-content-block--right',
  'On White :: Right Aligned :: Collapsed':
    'wes-content-block--right wes-content-block--collapse',
  'On Grey': 'wes-content-block--grey',
  'On Grey :: Collapsed': 'wes-content-block--grey wes-content-block--collapse',
  'On Grey :: Right Aligned':
    'wes-content-block--right wes-content-block--grey',
  'On Grey :: Right Aligned :: Collapsed':
    'wes-content-block--right wes-content-block--grey wes-content-block--collapse',
  'On White :: Campaign': 'wes-content-block--campaign',
  'On Grey :: Campaign': 'wes-content-block--campaign wes-content-block--grey',
};

export const contentBlock = () => ({
  template: `
  <div class="wes-content-block {{variant}}">
  <div class="wes-content-block__wrapper">
     <div class="wes-content-block__body">
        <div class="wes-content-block__body-content">
           <div class="wes-content-block__placeholder">
              <!-- Placeholder start -->
              <!-- Rich Text start -->
              <div class="component rich-text wes-rich-text-scope">
                 <h1 class="level1">L1 - Unit trusts</h1>
                 <p class="lead">Lead - Wesleyan Unit Trust Managers (WUTM) offers a trio of products that enable you to invest in fully managed unit trust funds, run by an award-winning team. Whether you’re looking to build your own investment or save for your children’s future, we’ve got a product for you.</p>

                 <div class="component wes-core-resource-link">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" height="16px" version="1.1" viewBox="0 0 14 16" width="14px" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd" id="Rework" stroke="none" stroke-linejoin="round" stroke-width="1">
         <g id="Product-Page_Doc-Links_XL" stroke="#1E2630" transform="translate(-96.000000, -270.000000)">
            <g id="Important-Information" transform="translate(0.000000, -1783.000000)">
               <g id="Contents" transform="translate(94.000000, 228.000000)">
                  <g id="Key-Documents" transform="translate(0.000000, 1603.000000)">
                     <g id="List-Bullet" transform="translate(0.000000, 112.000000)">
                        <g id="03-List-Item" transform="translate(1.000000, 104.000000)">
                           <g id="01-Bullet" transform="translate(1.000000, 6.000000)">
                              <polygon id="Rectangle" points="0.5 0.5 9.77007185 0.5 13.5 5.24323273 13.5 15.5 0.5 15.5"></polygon>
                              <path d="M8.5,0.5 C8.5,3.83333333 8.5,5.5 8.5,5.5 C8.5,5.5 10.1666667,5.5 13.5,5.5" id="Path-2"></path>
                           </g>
                        </g>
                     </g>
                  </g>
               </g>
            </g>
         </g>
      </g>
   </svg>
            <p class="wes-core-resource-link__body">
                <a class="wes-core-resource-link__link" href="/cookies">With Profits ISA Factsheet</a>

                    <span>&nbsp;</span><span class="wes-core-resource-link__meta">PDF (205KB)</span>

            </p>
        </div>
                 <h2 class="level2">Sitecore editor view</h2>

                 <span scfieldtype="rich text" scdefaulttext="[No text in field]" contenteditable="true" class="scWebEditInput scEnabledChrome" id="fld_19B4F22CCB8C47559203FFE23638C448_B195CB5DF68B421F8C731C4E0D4BDC0E_en_1_dde329a9728842cebab8eff1be684694_2359_edit" sc-part-of="field">
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </span>

                 <h2 class="level2">L2 - What is a stocks and shares ISA?</h2>

                 <table class="wes-core-table transparent">
                   <caption>England and Wales NHS pension contributions</caption>
                   <thead>
                     <tr>
                       <th>Salary Range</th>
                       <th>Your contribution (before tax relief)</th>
                       <th>Employer&rsquo;s contribution</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <th data-title="Salary Range">&pound;15,432 - &pound;21,477</th>
                       <td data-title="Your contribution (before tax relief)">5%</td>
                       <td data-title="Employer&rsquo;s contribution">20.68%</td>
                     </tr>
                     <tr>
                       <th data-title="Salary Range">&pound;21,477 - &pound;41,477</th>
                       <td data-title="Your contribution (before tax relief)">5.6%</td>
                       <td data-title="Employer&rsquo;s contribution">20.68%</td>
                     </tr>
                     <tr>
                       <th data-title="Salary Range">&pound;41,477 - &pound;100,000</th>
                       <td data-title="Your contribution (before tax relief)">7.1%</td>
                       <td data-title="Employer&rsquo;s contribution">20.68%</td>
                     </tr>
                   </tbody>
                 </table>

                 <h2 class="level2">L2 - What is a stocks and shares ISA?</h2>

                 <table class="wes-core-table wide transparent">
                   <caption>England and Wales NHS pension contributions</caption>
                   <thead>
                     <tr>
                       <th>Salary Range</th>
                       <th>Your contribution (before tax relief)</th>
                       <th>Employer&rsquo;s contribution</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <th data-title="Salary Range">&pound;15,432 - &pound;21,477</th>
                       <td data-title="Your contribution (before tax relief)">5%</td>
                       <td data-title="Employer&rsquo;s contribution">20.68%</td>
                     </tr>
                     <tr>
                       <th data-title="Salary Range">&pound;21,477 - &pound;41,477</th>
                       <td data-title="Your contribution (before tax relief)">5.6%</td>
                       <td data-title="Employer&rsquo;s contribution">20.68%</td>
                     </tr>
                     <tr>
                       <th data-title="Salary Range">&pound;41,477 - &pound;100,000</th>
                       <td data-title="Your contribution (before tax relief)">7.1%</td>
                       <td data-title="Employer&rsquo;s contribution">20.68%</td>
                     </tr>
                   </tbody>
                 </table>

                 <h2 class="level2">L2 - What is a stocks and shares ISA?</h2>
                 <p>I returned to the hotel for my midday cleaning and meditation. I ate some crackers, seaweed snacks and cashew nuts, and drank green tea from a vending machine outside my room. When I went out again after lunch the unclean receptionist gave me a map, and I chose a tourist spot to visit.</p>
                 <!--image-->
                 <img class="wes-image" src="assets/images/Male_Smiling.PNG" alt="icon" />
                 <h2 class="level2">L2 - What is a stocks and shares ISA?</h2>
                 <p>I returned to the hotel for my midday cleaning and meditation. I ate some crackers, seaweed snacks and cashew nuts, and drank green tea from a vending machine outside my room. When I went out again after lunch the unclean receptionist gave me a map, and I chose a tourist spot to visit.</p>
                 <!-- Repeatable nested video carousel components -->
                 <div class="wes-video-carousel__video">
                    <div class="wes-video-carousel__video-frame">
                       <iframe title="title of video" src="https://video.wesleyan.co.uk/v.ihtml/player.html?token=244588c11a6b9731d586512913ee3293&amp;source=embed&amp;photo%5fid=64659215" style="width:100%; height:100%; position: absolute; top: 0; left: 0;" frameborder="0" border="0" scrolling="no" mozallowfullscreen="1" webkitallowfullscreen="1" allowfullscreen="1" allow="autoplay; fullscreen"></iframe>
                    </div>
                 </div>
                 <div class="wes-video-carousel__controls">
                    <div class="wes-video-carousel__actions">
                       <button type="button" class="wes-video-carousel__action wes-video-carousel__action--prev" aria-label="Previous testimonial">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                             <g fill="none" fill-rule="evenodd">
                                <polyline stroke="#FEBD11" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="8 6 2 12 8 18"/>
                                <line x1="2" x2="22" y1="12" y2="12" stroke="#FEBD11" stroke-linecap="round" stroke-width="2"/>
                             </g>
                          </svg>
                       </button>
                       <button type="button" class="wes-video-carousel__action wes-video-carousel__action--next" aria-label="Next testimonial">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                             <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                                <polyline stroke="#FEBD11" stroke-linejoin="round" stroke-width="2" points="16 6 22 12 16 18"/>
                                <line x1="21" x2="2" y1="12" y2="12" stroke="#FEBD11" stroke-width="2"/>
                             </g>
                          </svg>
                       </button>
                    </div>
                    <div class="wes-video-carousel__counter">
                       <span class="wes-video-carousel__counter-current"></span>
                       <span class="wes-video-carousel__counter-divider"> / </span>
                       <span class="wes-video-carousel__counter-total"></span>
                    </div>
                 </div>
                 <h2 class="level2">L2 - What is a stocks and shares ISA?</h2>
                 <p>I returned to the hotel for my midday cleaning and meditation. I ate some crackers, seaweed snacks and cashew nuts, and drank green tea from a vending machine outside my room. When I went out again after lunch the unclean receptionist gave me a map, and I chose a tourist spot to visit.</p>
                 <div class="wes-callout__wrapper">
                    <div class="wes-callout__body">
                       <div class="wes-callout__body-content">
                          <div class="wes-callout__frame">
                             <h2 class="wes-callout__title">Stay in the saving habit</h2>
                             <div class="wes-callout__message">
                                <p>It can be a long road to your first house, but when you do finally have the keys to your own place, it’s important you keep the saving habit going. If you can keep putting a little money into your savings each month - once you’ve splashed out on that new sofa, anyway - you’ll be in a much stronger position when it comes to your next move. </p>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                 <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                 <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                 <h3 class="level3">L3 - The tax benefits of an investment ISA</h3>
                 <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                 <h4 class="level4">L4 - How long does the meeting last?</h4>
                 <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                 <ul class="ticked">
                    <li>How can I retire early?</li>
                    <li>How do I maximise my Pension Lifetime Allowance?</li>
                    <li>How much will my NHS Pension lump sum be?</li>
                    <li>Should I stay in the NHS Pension Scheme?</li>
                    <li>What should I do with my pension benefits when I take them?</li>
                 </ul>
                 <p>Limits, exclusions and charges do apply. Full <a href="#">terms and conditions</a> of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>

                 <p class="emphasis">Emphasis effect: I walked down the Kokusai Dori, the main street of the city, doubling back and weaving off to lose anybody who was trailing me. Unfortunately my alpha potential is still too weak to achieve invisibility, so I have to shake trailers the old-fashioned way.</p>

                 <p class="emphasis lead">Lead Emphasis effect: Poor weather precluding my morning outing, we yarned by the peat fire & the hours sped by like minutes. I spoke at length of Tilda & Jackson & also my fears of "gold fever" in San Francisco</p>
                 <h4 class="level3">L3 - Right</h4>
                 <p class="highlight" style="text-align: right">Limits, exclusions and charges do apply. Full <a href="#">terms and conditions</a> of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                 <h5 class="level4">L4 - Lorem ipsum</h5>
                 <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                 <ul class="bulleted">
                    <li>How can I retire early?</li>
                    <li>How do I maximise my Pension Lifetime Allowance?</li>
                    <li>How much will my NHS Pension lump sum be?</li>
                    <li>Should I stay in the NHS Pension Scheme?</li>
                    <li>What should I do with my pension benefits when I take them?</li>
                 </ul>
                 <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                 <ol class="numbered">
                    <li>Home emergency support – We have a network of registered tradespeople available 24/7, ready to help fix your domestic crises like a burst pipe or heating breakdown.</li>
                    <li>Pest removal cover – Covers the cost of calling an expert out to remove a pest infestation at home.</li>
                    <li>Family legal expenses – Protects you and your family from the costs of legal disputes, whether with a neighbour or your employer.</li>
                 </ol>
                 <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
              </div>
              <!-- Rich Text end -->
              <!-- Placeholder end -->
           </div>
        </div>
     </div>
  </div>
</div>
  `,
  props: {
    variant: select('Variant', variants, ''),
  },
});

export const contentCampaign = () => ({
  template: `
   <div class="component campaign-content-container wes-content-block--campaign {{variant}}">
   <div class="wes-content-block__wrapper">
      <div class="wes-content-block__body">
         <div class="wes-content-block__body-content">
            <div class="wes-content-block__placeholder">
               <!-- Placeholder start -->
               <!-- Rich Text start -->
               <div class="component rich-text wes-rich-text-scope">
                  <h1 class="level1">L1 - Unit trusts</h1>
                  <p class="lead">Lead - Wesleyan Unit Trust Managers (WUTM) offers a trio of products that enable you to invest in fully managed unit trust funds, run by an award-winning team. Whether you’re looking to build your own investment or save for your children’s future, we’ve got a product for you.</p>

                  <h2 class="level2">Sitecore editor view</h2>

                  <span scfieldtype="rich text" scdefaulttext="[No text in field]" contenteditable="true" class="scWebEditInput scEnabledChrome" id="fld_19B4F22CCB8C47559203FFE23638C448_B195CB5DF68B421F8C731C4E0D4BDC0E_en_1_dde329a9728842cebab8eff1be684694_2359_edit" sc-part-of="field">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   </span>

                  <h2 class="level2">CTA Card</h2>
                  <div class="wes-cta-card">
                  <div class="wes-cta-card__wrapper">
                  <div class="wes-cta-card__frame">
                     <div class="wes-cta-card__body">
                        <div class="wes-cta-card__body-content">
                        <div class="wes-cta-card__icon">
                           <svg height="56" width="45" xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" fill-rule="evenodd">
                              <path
                                 d="M1 46.5h42.5"
                                 stroke="#FEBD11"
                                 stroke-linecap="square"
                              ></path>
                              <path
                                 d="M25.5.5v22.557L18 17.969l-7.5 5.088V.5h15z"
                                 stroke="#FEBD11"
                              ></path>
                              <path
                                 d="M.5.5h42a2 2 0 012 2v51a2 2 0 01-2 2H.5h0V.5z"
                                 stroke="#1E2630"
                                 stroke-linecap="round"
                              ></path>
                              <path
                                 d="M35.5.5v54"
                                 stroke="#1E2630"
                                 stroke-linecap="square"
                              ></path>
                              </g>
                           </svg>
                        </div>
                        <div class="wes-cta-card__content">
                           <div class="wes-cta-card__message">
                              <p>
                              Book today and we'll also send you our free guide to the NHS
                              pension - packed with useful information to help you make sense
                              of the scheme.
                              </p>
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

                  <h2 class="level2">L2 - What is a stocks and shares ISA?</h2>

                  <table class="wes-core-table transparent">
                    <caption>England and Wales NHS pension contributions</caption>
                    <thead>
                      <tr>
                        <th>Salary Range</th>
                        <th>Your contribution (before tax relief)</th>
                        <th>Employer&rsquo;s contribution</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th data-title="Salary Range">&pound;15,432 - &pound;21,477</th>
                        <td data-title="Your contribution (before tax relief)">5%</td>
                        <td data-title="Employer&rsquo;s contribution">20.68%</td>
                      </tr>
                      <tr>
                        <th data-title="Salary Range">&pound;21,477 - &pound;41,477</th>
                        <td data-title="Your contribution (before tax relief)">5.6%</td>
                        <td data-title="Employer&rsquo;s contribution">20.68%</td>
                      </tr>
                      <tr>
                        <th data-title="Salary Range">&pound;41,477 - &pound;100,000</th>
                        <td data-title="Your contribution (before tax relief)">7.1%</td>
                        <td data-title="Employer&rsquo;s contribution">20.68%</td>
                      </tr>
                    </tbody>
                  </table>

                  <h2 class="level2">L2 - What is a stocks and shares ISA?</h2>

                  <table class="wes-core-table wide transparent">
                    <caption>England and Wales NHS pension contributions</caption>
                    <thead>
                      <tr>
                        <th>Salary Range</th>
                        <th>Your contribution (before tax relief)</th>
                        <th>Employer&rsquo;s contribution</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th data-title="Salary Range">&pound;15,432 - &pound;21,477</th>
                        <td data-title="Your contribution (before tax relief)">5%</td>
                        <td data-title="Employer&rsquo;s contribution">20.68%</td>
                      </tr>
                      <tr>
                        <th data-title="Salary Range">&pound;21,477 - &pound;41,477</th>
                        <td data-title="Your contribution (before tax relief)">5.6%</td>
                        <td data-title="Employer&rsquo;s contribution">20.68%</td>
                      </tr>
                      <tr>
                        <th data-title="Salary Range">&pound;41,477 - &pound;100,000</th>
                        <td data-title="Your contribution (before tax relief)">7.1%</td>
                        <td data-title="Employer&rsquo;s contribution">20.68%</td>
                      </tr>
                    </tbody>
                  </table>

                  <h2 class="level2">L2 - What is a stocks and shares ISA?</h2>
                  <p>I returned to the hotel for my midday cleaning and meditation. I ate some crackers, seaweed snacks and cashew nuts, and drank green tea from a vending machine outside my room. When I went out again after lunch the unclean receptionist gave me a map, and I chose a tourist spot to visit.</p>
                  <!--image-->
                  <img class="wes-image" src="assets/images/Male_Smiling.PNG" alt="icon" />
                  <h2 class="level2">L2 - What is a stocks and shares ISA?</h2>
                  <p>I returned to the hotel for my midday cleaning and meditation. I ate some crackers, seaweed snacks and cashew nuts, and drank green tea from a vending machine outside my room. When I went out again after lunch the unclean receptionist gave me a map, and I chose a tourist spot to visit.</p>
                  <!-- Repeatable nested video carousel components -->
                  <div class="wes-video-carousel__video">
                     <div class="wes-video-carousel__video-frame">
                        <iframe title="title of video" src="https://video.wesleyan.co.uk/v.ihtml/player.html?token=244588c11a6b9731d586512913ee3293&amp;source=embed&amp;photo%5fid=64659215" style="width:100%; height:100%; position: absolute; top: 0; left: 0;" frameborder="0" border="0" scrolling="no" mozallowfullscreen="1" webkitallowfullscreen="1" allowfullscreen="1" allow="autoplay; fullscreen"></iframe>
                     </div>
                  </div>
                  <div class="wes-video-carousel__controls">
                     <div class="wes-video-carousel__actions">
                        <button type="button" class="wes-video-carousel__action wes-video-carousel__action--prev" aria-label="Previous testimonial">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <g fill="none" fill-rule="evenodd">
                                 <polyline stroke="#FEBD11" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="8 6 2 12 8 18"/>
                                 <line x1="2" x2="22" y1="12" y2="12" stroke="#FEBD11" stroke-linecap="round" stroke-width="2"/>
                              </g>
                           </svg>
                        </button>
                        <button type="button" class="wes-video-carousel__action wes-video-carousel__action--next" aria-label="Next testimonial">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                                 <polyline stroke="#FEBD11" stroke-linejoin="round" stroke-width="2" points="16 6 22 12 16 18"/>
                                 <line x1="21" x2="2" y1="12" y2="12" stroke="#FEBD11" stroke-width="2"/>
                              </g>
                           </svg>
                        </button>
                     </div>
                     <div class="wes-video-carousel__counter">
                        <span class="wes-video-carousel__counter-current"></span>
                        <span class="wes-video-carousel__counter-divider"> / </span>
                        <span class="wes-video-carousel__counter-total"></span>
                     </div>
                  </div>
                  <h2 class="level2">L2 - What is a stocks and shares ISA?</h2>
                  <p>I returned to the hotel for my midday cleaning and meditation. I ate some crackers, seaweed snacks and cashew nuts, and drank green tea from a vending machine outside my room. When I went out again after lunch the unclean receptionist gave me a map, and I chose a tourist spot to visit.</p>
                  <div class="wes-callout__wrapper">
                     <div class="wes-callout__body">
                        <div class="wes-callout__body-content">
                           <div class="wes-callout__frame">
                              <h2 class="wes-callout__title">Stay in the saving habit</h2>
                              <div class="wes-callout__message">
                                 <p>It can be a long road to your first house, but when you do finally have the keys to your own place, it’s important you keep the saving habit going. If you can keep putting a little money into your savings each month - once you’ve splashed out on that new sofa, anyway - you’ll be in a much stronger position when it comes to your next move. </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                  <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                  <h3 class="level3">L3 - The tax benefits of an investment ISA</h3>
                  <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                  <h4 class="level4">L4 - How long does the meeting last?</h4>
                  <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                  <ul class="ticked">
                     <li>How can I retire early?</li>
                     <li>How do I maximise my Pension Lifetime Allowance?</li>
                     <li>How much will my NHS Pension lump sum be?</li>
                     <li>Should I stay in the NHS Pension Scheme?</li>
                     <li>What should I do with my pension benefits when I take them?</li>
                  </ul>
                  <p>Limits, exclusions and charges do apply. Full <a href="#">terms and conditions</a> of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>

                  <p class="emphasis">Emphasis effect: I walked down the Kokusai Dori, the main street of the city, doubling back and weaving off to lose anybody who was trailing me. Unfortunately my alpha potential is still too weak to achieve invisibility, so I have to shake trailers the old-fashioned way.</p>

                  <p class="emphasis lead">Lead Emphasis effect: Poor weather precluding my morning outing, we yarned by the peat fire & the hours sped by like minutes. I spoke at length of Tilda & Jackson & also my fears of "gold fever" in San Francisco</p>
                  <h4 class="level3">L3 - Right</h4>
                  <p class="highlight" style="text-align: right">Limits, exclusions and charges do apply. Full <a href="#">terms and conditions</a> of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                  <h5 class="level4">L4 - Lorem ipsum</h5>
                  <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                  <ul class="bulleted">
                     <li>How can I retire early?</li>
                     <li>How do I maximise my Pension Lifetime Allowance?</li>
                     <li>How much will my NHS Pension lump sum be?</li>
                     <li>Should I stay in the NHS Pension Scheme?</li>
                     <li>What should I do with my pension benefits when I take them?</li>
                  </ul>
                  <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                  <ol class="numbered">
                     <li>Home emergency support – We have a network of registered tradespeople available 24/7, ready to help fix your domestic crises like a burst pipe or heating breakdown.</li>
                     <li>Pest removal cover – Covers the cost of calling an expert out to remove a pest infestation at home.</li>
                     <li>Family legal expenses – Protects you and your family from the costs of legal disputes, whether with a neighbour or your employer.</li>
                  </ol>
                  <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
               </div>
               <!-- Rich Text end -->
               <!-- Placeholder end -->
            </div>
         </div>
      </div>
   </div>
 </div>
   `,
  props: {
    variant: select('Variant', variants, ''),
  },
});

export const contentBlockRegression = () => ({
  template: `
<div class="snippet initialized">

    <div class="component wes-toc-banner">

<div class="wes-toc-banner__wrapper"><div class="wes-toc-banner__body"><div class="wes-toc-banner__content"><h1 class="wes-toc-banner__title field-heading">NHS Pension Scheme Guide</h1><div class="wes-toc-banner__message"><p>
The NHS pension scheme is a well-earned benefit for the hard workers of the health service.</p></div></div></div></div><div class="wes-toc-banner__toc-background"><div class="wes-toc-banner__toc-wrapper"><div class="wes-toc-banner_toc-body wes-list wes-list-chevron column-2"><div class="wes-toc-banner__toc-link wes-toc-banner__toc-content"><h2 class="wes-toc-banner__toc-content-header field-tocheading">On this page</h2><ul>
  <li><a href="/" target="_blank">Where to start with saving for a house</a></li>
  <li><a href="/" target="_blank">How to save for your deposit</a></li>
  <li><a href="/" target="_blank">The best accounts for saving for a house</a></li>
  <li><a href="/" target="_blank">The extra costs you’ll need to think about</a></li>
  <li><a href="/" target="_blank">Other options for first-time buyers</a></li>
  <li><a href="/" target="_blank">Maintaining the saving habit</a></li>
</ul></div></div></div></div>
        <div class="wes-toc-banner__shapes">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" id="wes-toc-banner__shapes-desktop" viewBox="0 0 1366 600" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <rect height="600" id="toc-supergraphic_xl-a" width="1366" x="0" y="0"></rect>
                    <linearGradient id="toc-supergraphic_xl-c" x1="36.892%" x2="63.109%" y1="0%" y2="100%">
                        <stop offset="0%" stop-color="#FEBD11"></stop>
                        <stop offset="42.422%" stop-color="#FEDD36" stop-opacity=".3"></stop>
                        <stop offset="100%" stop-color="#FEDD36" stop-opacity=".1"></stop>
                    </linearGradient>
                </defs>
                <g fill="none" fill-rule="evenodd">
                    <mask fill="#fff" id="toc-supergraphic_xl-b">
                        <use xlink:href="#toc-supergraphic_xl-a"></use>
                    </mask>
                    <use xlink:href="#toc-supergraphic_xl-a" fill="#FFF"></use>
                    <g mask="url(#toc-supergraphic_xl-b)">
                        <g transform="translate(-269 -92)">
                            <polygon fill="#FEBD11" points=".629 834 .629 0 957.082 0 1259.629 834"></polygon>
                            <polygon fill="url(#toc-supergraphic_xl-c)" points="0 0 764 0 382 1059" transform="translate(378 92)"></polygon>
                        </g>
                    </g>
                </g>
            </svg>
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" id="wes-toc-banner__shapes-mobile" viewBox="0 0 375 392" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <rect height="392" id="toc-supergraphic_xs-a" width="375" x="0" y="0"></rect>
                    <linearGradient id="toc-supergraphic_xs-c" x1="36.862%" x2="63.139%" y1="0%" y2="100%">
                        <stop offset="0%" stop-color="#FEBD11"></stop>
                        <stop offset="60%" stop-color="#FEDD36" stop-opacity=".3"></stop>
                        <stop offset="100%" stop-color="#FEDD36" stop-opacity=".1"></stop>
                    </linearGradient>
                </defs>
                <g fill="none" fill-rule="evenodd">
                    <mask fill="#fff" id="toc-supergraphic_xs-b">
                        <use xlink:href="#toc-supergraphic_xs-a"></use>
                    </mask>
                    <use xlink:href="#toc-supergraphic_xs-a" fill="#FEBD11"></use>
                    <rect fill="#FFF" height="148" mask="url(#toc-supergraphic_xs-b)" width="375"></rect>
                    <rect fill="#FEBD11" height="244" mask="url(#toc-supergraphic_xs-b)" transform="matrix(1 0 0 -1 0 540)" width="375" y="148"></rect>
                    <g mask="url(#toc-supergraphic_xs-b)">
                        <g transform="translate(-49 4)">
                            <polygon fill="#FEBD11" points="92.597 -92 573.403 -92 333 574" transform="rotate(-90 357.5 216.5)"></polygon>
                            <polygon fill="url(#toc-supergraphic_xs-c)" points="58.88 -58.5 365.12 -58.5 212 365.5" transform="matrix(0 -1 -1 0 365.5 381.5)"></polygon>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>
    <div class="component wes-content-block wes-content-block--grey">
<div class="wes-content-block__wrapper"><div class="wes-content-block__body"><div class="wes-content-block__body-content"><div class="wes-content-block__placeholder">

    <div class="component wes-rich-text-scope">
<h1>L1 Heading</h1>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<h2>L2 Heading</h2>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p class="highlight">HIGHLIGHT: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;</p>
<h3>L3 Heading</h3>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<h4>L4 Heading</h4>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<ul class="bulleted">
    <li>bullet 1</li>
    <li>bullet 2</li>
    <li>bullet 3</li>
    <li>bullet 4</li>
</ul>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<ol class="numbered">
    <li>number 1</li>
    <li>number 2</li>
    <li>number 3</li>
    <li>number 4</li>
</ol>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p><img height="1200" alt="man with child looking at laptop" width="1800" src="/-/media/project/wesleyan/wesleyan/manchildlaptop.jpg"></p>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<div class="wes-video-carousel__video"><div class="wes-video-carousel__video-frame"><iframe allow="autoplay; fullscreen" allowfullscreen="1" border="0" frameborder="0" mozallowfullscreen="1" scrolling="no" src="https://video.wesleyan.co.uk/v.ihtml/player.html?token=244588c11a6b9731d586512913ee3293&amp;source=embed&amp;photo%5fid=64659215" style="width:100%; height:100%; position: absolute; top: 0; left: 0;" webkitallowfullscreen="1"></iframe></div></div>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<table class="wes-core-table transparent standard">
    <caption>England and Wales NHS pension contributions</caption>
    <thead>
        <tr>
            <th>Salary Range</th>
            <th>Your contribution (before tax relief)</th>
            <th>Employer’s contribution</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th data-title="Salary Range">£15,432 - £21,477</th>
            <td data-title="Your contribution (before tax relief)">5%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
        <tr>
            <th data-title="Salary Range">£21,477 - £41,477</th>
            <td data-title="Your contribution (before tax relief)">5.6%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
        <tr>
            <th data-title="Salary Range">£41,477 - £100,000</th>
            <td data-title="Your contribution (before tax relief)">7.1%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
    </tbody>
</table>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<table class="wes-core-table transparent wide">
    <caption>England and Wales NHS pension contributions</caption>
    <thead>
        <tr>
            <th>Salary Range</th>
            <th>Your contribution (before tax relief)</th>
            <th>Employer’s contribution</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th data-title="Salary Range">£15,432 - £21,477</th>
            <td data-title="Your contribution (before tax relief)">5%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
        <tr>
            <th data-title="Salary Range">£21,477 - £41,477</th>
            <td data-title="Your contribution (before tax relief)">5.6%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
        <tr>
            <th data-title="Salary Range">£41,477 - £100,000</th>
            <td data-title="Your contribution (before tax relief)">7.1%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
    </tbody>
</table>    </div>
</div></div></div></div>    </div>
    <div class="component wes-content-block wes-content-block--right">
<div class="wes-content-block__wrapper"><div class="wes-content-block__body"><div class="wes-content-block__body-content"><div class="wes-content-block__placeholder">

    <div class="component wes-rich-text-scope">
<h1>L1 Heading</h1>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<h2>L2 Heading</h2>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p class="highlight">HIGHLIGHT: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;</p>
<h3>L3 Heading</h3>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<h4>L4 Heading</h4>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<ul class="bulleted">
    <li>bullet 1</li>
    <li>bullet 2</li>
    <li>bullet 3</li>
    <li>bullet 4</li>
</ul>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<ol class="numbered">
    <li>number 1</li>
    <li>number 2</li>
    <li>number 3</li>
    <li>number 4</li>
</ol>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p><img height="1200" alt="man with child looking at laptop" width="1800" src="/-/media/project/wesleyan/wesleyan/manchildlaptop.jpg"></p>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<div class="wes-video-carousel__video"><div class="wes-video-carousel__video-frame"><iframe allow="autoplay; fullscreen" allowfullscreen="1" border="0" frameborder="0" mozallowfullscreen="1" scrolling="no" src="https://video.wesleyan.co.uk/v.ihtml/player.html?token=244588c11a6b9731d586512913ee3293&amp;source=embed&amp;photo%5fid=64659215" style="width:100%; height:100%; position: absolute; top: 0; left: 0;" webkitallowfullscreen="1"></iframe></div></div><p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<table class="wes-core-table transparent standard">
    <caption>England and Wales NHS pension contributions</caption>
    <thead>
        <tr>
            <th>Salary Range</th>
            <th>Your contribution (before tax relief)</th>
            <th>Employer’s contribution</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th data-title="Salary Range">£15,432 - £21,477</th>
            <td data-title="Your contribution (before tax relief)">5%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
        <tr>
            <th data-title="Salary Range">£21,477 - £41,477</th>
            <td data-title="Your contribution (before tax relief)">5.6%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
        <tr>
            <th data-title="Salary Range">£41,477 - £100,000</th>
            <td data-title="Your contribution (before tax relief)">7.1%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
    </tbody>
</table>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<table class="wes-core-table transparent wide">
    <caption>England and Wales NHS pension contributions</caption>
    <thead>
        <tr>
            <th>Salary Range</th>
            <th>Your contribution (before tax relief)</th>
            <th>Employer’s contribution</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th data-title="Salary Range">£15,432 - £21,477</th>
            <td data-title="Your contribution (before tax relief)">5%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
        <tr>
            <th data-title="Salary Range">£21,477 - £41,477</th>
            <td data-title="Your contribution (before tax relief)">5.6%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
        <tr>
            <th data-title="Salary Range">£41,477 - £100,000</th>
            <td data-title="Your contribution (before tax relief)">7.1%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
    </tbody>
</table>    </div>
</div></div></div></div>    </div>
    <div class="component wes-content-block wes-content-block--grey">
<div class="wes-content-block__wrapper"><div class="wes-content-block__body"><div class="wes-content-block__body-content"><div class="wes-content-block__placeholder">

    <div class="component wes-rich-text-scope">
<h2>L2 Heading</h2>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>    </div>
</div></div></div></div>    </div>

    <div class="component wes-callout wes-callout--grey wes-callout--collapse">
<div class="wes-callout__wrapper"><div class="wes-callout__body"><div class="wes-callout__body-content"><div class="wes-callout__frame"><h2 class="field-callout-title">How to save for your deposit</h2><div class="wes-callout__message"><p>Just as it's important to be realistic about what kind of house and mortgage you can afford, it's crucial to set a realistic timeframe for saving up the deposit. Estimates suggest it can take an average of 3.5 years for a couple to save their deposit, and that rises to 13.5 years if you're buying alone.</p></div></div></div></div></div>    </div>

    <div class="component wes-content-block wes-content-block--grey wes-content-block--collapse">
<div class="wes-content-block__wrapper"><div class="wes-content-block__body"><div class="wes-content-block__body-content"><div class="wes-content-block__placeholder">

    <div class="component wes-rich-text-scope">
<h2>L2 Heading</h2>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>    </div>
</div></div></div></div>    </div>

    <div class="component wes-emphasis wes-emphasis--grey wes-emphasis--collapse">

<div class="wes-emphasis__wrapper"><div class="wes-emphasis__body"><div class="wes-emphasis__body-content"><div class="wes-emphasis__frame"><div class="wes-emphasis__message"><p>Emphasis - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec scelerisque magna, et consequat magna. Nulla a lacus molestie, tristique sapien eu, auctor ipsum. Praesent purus libero, aliquet ut odio eu, consequat fermentum libero.</p></div></div></div></div></div>    </div>
    <div class="component wes-content-block wes-content-block--grey wes-content-block--collapse">
<div class="wes-content-block__wrapper"><div class="wes-content-block__body"><div class="wes-content-block__body-content"><div class="wes-content-block__placeholder">

    <div class="component wes-rich-text-scope">
<h2>L2 Heading</h2>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>    </div>
</div></div></div></div>    </div>
    <div class="component wes-content-block wes-content-block--grey wes-content-block--collapse">
<div class="wes-content-block__wrapper"><div class="wes-content-block__body"><div class="wes-content-block__body-content"><div class="wes-content-block__placeholder">

    <div class="component wes-rich-text-scope">
<table class="wes-core-table transparent standard">
    <caption>England and Wales NHS pension contributions</caption>
    <thead>
        <tr>
            <th>Salary Range</th>
            <th>Your contribution (before tax relief)</th>
            <th>Employer’s contribution</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th data-title="Salary Range">£15,432 - £21,477</th>
            <td data-title="Your contribution (before tax relief)">5%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
        <tr>
            <th data-title="Salary Range">£21,477 - £41,477</th>
            <td data-title="Your contribution (before tax relief)">5.6%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
        <tr>
            <th data-title="Salary Range">£41,477 - £100,000</th>
            <td data-title="Your contribution (before tax relief)">7.1%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
    </tbody>
</table>    </div>
</div></div></div></div>    </div>
    <div class="component wes-content-block wes-content-block--grey wes-content-block--collapse">
<div class="wes-content-block__wrapper"><div class="wes-content-block__body"><div class="wes-content-block__body-content"><div class="wes-content-block__placeholder">

    <div class="component wes-rich-text-scope">
<h2>L2 Heading</h2>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>    </div>
</div></div></div></div>    </div>
    <div class="component wes-content-block wes-content-block--grey wes-content-block--collapse">
<div class="wes-content-block__wrapper"><div class="wes-content-block__body"><div class="wes-content-block__body-content"><div class="wes-content-block__placeholder">

    <div class="component wes-rich-text-scope">
<table class="wes-core-table transparent wide">
    <caption>England and Wales NHS pension contributions</caption>
    <thead>
        <tr>
            <th>Salary Range</th>
            <th>Your contribution (before tax relief)</th>
            <th>Employer’s contribution</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th data-title="Salary Range">£15,432 - £21,477</th>
            <td data-title="Your contribution (before tax relief)">5%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
        <tr>
            <th data-title="Salary Range">£21,477 - £41,477</th>
            <td data-title="Your contribution (before tax relief)">5.6%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
        <tr>
            <th data-title="Salary Range">£41,477 - £100,000</th>
            <td data-title="Your contribution (before tax relief)">7.1%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
    </tbody>
</table>    </div>
</div></div></div></div>    </div>
    <div class="component wes-content-block wes-content-block--right wes-content-block--collapse">
<div class="wes-content-block__wrapper"><div class="wes-content-block__body"><div class="wes-content-block__body-content"><div class="wes-content-block__placeholder">

    <div class="component wes-rich-text-scope">
<h2>L2 Heading</h2>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>    </div>
</div></div></div></div>    </div>

    <div class="component wes-callout wes-callout--right wes-callout--collapse">
<div class="wes-callout__wrapper"><div class="wes-callout__body"><div class="wes-callout__body-content"><div class="wes-callout__frame"><h2 class="wes-callout__title field-callout-title">How to save for your deposit</h2><div class="wes-callout__message"><p>Just as it's important to be realistic about what kind of house and mortgage you can afford, it's crucial to set a realistic timeframe for saving up the deposit. Estimates suggest it can take an average of 3.5 years for a couple to save their deposit, and that rises to 13.5 years if you're buying alone.</p></div></div></div></div></div>    </div>

    <div class="component wes-content-block wes-content-block--right wes-content-block--collapse">
<div class="wes-content-block__wrapper"><div class="wes-content-block__body"><div class="wes-content-block__body-content"><div class="wes-content-block__placeholder">

    <div class="component wes-rich-text-scope">
<h2>L2 Heading</h2>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>    </div>
</div></div></div></div>    </div>

    <div class="component wes-emphasis wes-emphasis--right wes-emphasis--collapse">

<div class="wes-emphasis__wrapper"><div class="wes-emphasis__body"><div class="wes-emphasis__body-content"><div class="wes-emphasis__frame"><div class="wes-emphasis__message"><p>Emphasis: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec scelerisque magna, et consequat magna. Nulla a lacus molestie, tristique sapien eu, auctor ipsum. Praesent purus libero, aliquet ut odio eu, consequat fermentum libero.</p></div></div></div></div></div>    </div>
    <div class="component wes-content-block wes-content-block--right wes-content-block--collapse">
<div class="wes-content-block__wrapper"><div class="wes-content-block__body"><div class="wes-content-block__body-content"><div class="wes-content-block__placeholder">

    <div class="component wes-rich-text-scope">
<h2>L2 Heading</h2>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>    </div>
</div></div></div></div>    </div>
    <div class="component wes-content-block wes-content-block--right wes-content-block--collapse">
<div class="wes-content-block__wrapper"><div class="wes-content-block__body"><div class="wes-content-block__body-content"><div class="wes-content-block__placeholder">

    <div class="component wes-rich-text-scope">
<table class="wes-core-table transparent standard">
    <caption>England and Wales NHS pension contributions</caption>
    <thead>
        <tr>
            <th>Salary Range</th>
            <th>Your contribution (before tax relief)</th>
            <th>Employer’s contribution</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th data-title="Salary Range">£15,432 - £21,477</th>
            <td data-title="Your contribution (before tax relief)">5%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
        <tr>
            <th data-title="Salary Range">£21,477 - £41,477</th>
            <td data-title="Your contribution (before tax relief)">5.6%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
        <tr>
            <th data-title="Salary Range">£41,477 - £100,000</th>
            <td data-title="Your contribution (before tax relief)">7.1%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
    </tbody>
</table>    </div>
</div></div></div></div>    </div>
    <div class="component wes-content-block wes-content-block--right wes-content-block--collapse">
<div class="wes-content-block__wrapper"><div class="wes-content-block__body"><div class="wes-content-block__body-content"><div class="wes-content-block__placeholder">

    <div class="component wes-rich-text-scope">
<h2>L2 Heading</h2>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>    </div>
</div></div></div></div>    </div>
    <div class="component wes-content-block wes-content-block--right wes-content-block--collapse">
<div class="wes-content-block__wrapper"><div class="wes-content-block__body"><div class="wes-content-block__body-content"><div class="wes-content-block__placeholder">

    <div class="component wes-rich-text-scope">
<table class="wes-core-table transparent wide">
    <caption>England and Wales NHS pension contributions</caption>
    <thead>
        <tr>
            <th>Salary Range</th>
            <th>Your contribution (before tax relief)</th>
            <th>Employer’s contribution</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th data-title="Salary Range">£15,432 - £21,477</th>
            <td data-title="Your contribution (before tax relief)">5%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
        <tr>
            <th data-title="Salary Range">£21,477 - £41,477</th>
            <td data-title="Your contribution (before tax relief)">5.6%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
        <tr>
            <th data-title="Salary Range">£41,477 - £100,000</th>
            <td data-title="Your contribution (before tax relief)">7.1%</td>
            <td data-title="Employer’s contribution">20.68%</td>
        </tr>
    </tbody>
</table>    </div>
</div></div></div></div>    </div>
    <div class="component wes-content-block wes-content-block--grey">
<div class="wes-content-block__wrapper"><div class="wes-content-block__body"><div class="wes-content-block__body-content"><div class="wes-content-block__placeholder">

    <div class="component wes-rich-text-scope">
<h2>L2 Heading</h2>
<p>paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>    </div>



<div class="component accordion initialized" data-properties="{&quot;expandOnHover&quot;:false,&quot;expandedByDefault&quot;:false,&quot;speed&quot;:500,&quot;easing&quot;:&quot;swing&quot;,&quot;canOpenMultiple&quot;:true,&quot;canToggle&quot;:true,&quot;isControlEditable&quot;:false}">
    <div class="component-content">
                            <div>
                <ul class="items">
                        <li class="item">
                                <div class="toggle-header" tabindex="0">
                                    <div class="label">

<div class="component content">
    <div class="component-content">
<div class="field-heading">accordion item 1</div>    </div>
</div>

                                    </div>
                                </div>
                                <div class="toggle-content" style="display: none;">

<div class="component content">
    <div class="component-content">
<div class="field-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>    </div>
</div>

                                </div>
                        </li>
                        <li class="item">
                                <div class="toggle-header" tabindex="-1">
                                    <div class="label">

<div class="component content">
    <div class="component-content">
<div class="field-heading">accordion item 1</div>    </div>
</div>

                                    </div>
                                </div>
                                <div class="toggle-content" style="display: none;">

<div class="component content">
    <div class="component-content">
<div class="field-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>    </div>
</div>

                                </div>
                        </li>
                </ul>
            </div>
    </div>
</div>
</div></div></div></div>    </div>

    <div class="component wes-promo">

<div class="wes-promo__wrapper"><div class="wes-promo__body"><div class="wes-promo__trapezoid"></div><div class="wes-promo__content"><h2 class="wes-promo__title field-promo-title">Lorem ipsum dolor sit amet</h2><div class="wes-promo__message"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div><div class="wes-promo__actions"><a data-variantitemid="{55B82D19-121A-4F96-B87C-E2A2DFC7A75C}" class="wes-button wes-button--on-light wes-button--outline button-icon-arrow-right" href="/404" data-variantfieldname="Promo Link One">Promo Link One</a><a data-variantitemid="{55B82D19-121A-4F96-B87C-E2A2DFC7A75C}" class="wes-button wes-button--on-light button-icon-arrow-right" href="/404" data-variantfieldname="Promo Link Two">Promo Link Two</a></div><div><p class="field-promo-footnote"></p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p><p></p></div></div></div></div>    </div>


    <div class="component wes-card-deck wes-card-deck--grey">

<div class="wes-card-deck__wrapper"><div class="wes-card-deck__header"><div class="wes-card-deck__header-content"><h2 class="wes-card-deck__title field-carddecktitle">Unit trust products from WUTM</h2><div class="wes-card-deck__message"><p>Wesleyan Unit Trust Managers (WUTM) products allow you to invest in fully managed unit trust funds, run by an award-winning team.</p></div></div></div><div class="wes-card-deck__deck"></div></div>    </div>
</div>`,
});
