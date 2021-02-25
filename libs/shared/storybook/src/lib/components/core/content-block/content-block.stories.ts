import { select } from '@storybook/addon-knobs';

export default {
  title: 'Core/Content Block (Full Width)',
};

const variants = {
  'On White': '',
  //   'On White :: Collapsed': 'wes-content-block--collapse',
  'On White :: Right Aligned': 'wes-content-block--right',
  //   'On White :: Right Aligned :: Collapsed':
  //  'wes-content-block--right wes-content-block--collapse',
  'On Grey': 'wes-content-block--grey',
  //   'On Grey :: Collapsed': 'wes-content-block--grey wes-content-block--collapse',
  'On Grey :: Right Aligned':
    'wes-content-block--right wes-content-block--grey',
  //   'On Grey :: Right Aligned :: Collapsed':
  //     'wes-content-block--right wes-content-block--grey wes-content-block--collapse',
  //   'On White :: Campaign': 'wes-content-block--campaign',
  //   'On Grey :: Campaign': 'wes-content-block--campaign wes-content-block--grey',
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
