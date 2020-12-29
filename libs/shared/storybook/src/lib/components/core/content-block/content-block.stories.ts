import { select } from '@storybook/addon-knobs';

export default {
  title: 'Core|Content Block (Full Width)',
};

const variants = {
  'On White': '',
  'On White :: Collapsed': 'wes-content-block--collapse',
  'On White :: Right Aligned': 'wes-content-block--right',
  'On White :: Right Aligned :: Collapsed': 'wes-content-block--right wes-content-block--collapse',
  'On Grey': 'wes-content-block--grey',
  'On Grey :: Collapsed': 'wes-content-block--grey wes-content-block--collapse',
  'On Grey :: Right Aligned': 'wes-content-block--right wes-content-block--grey',
  'On Grey :: Right Aligned :: Collapsed': 'wes-content-block--right wes-content-block--grey wes-content-block--collapse',
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
                <h2 class="level2">L2 - What is a stocks and shares ISA?</h2>
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
                
                <h3 class="level3">L3 - Emphasis effect</h3>
                <p class="emphasis">I walked down the Kokusai Dori, the main street of the city, doubling back and weaving off to lose anybody who was trailing me. Unfortunately my alpha potential is still too weak to achieve invisibility, so I have to shake trailers the old-fashioned way.</p>
                
                <h3 class="level2">L2 - Highlight effect</h3>
                <h4 class="level3">L3 - Left</h4>
                <p class="highlight">Limits, exclusions and charges do apply. Full <a href="#">terms and conditions</a> of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
                
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
