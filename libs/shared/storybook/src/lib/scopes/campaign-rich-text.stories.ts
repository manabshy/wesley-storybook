export default {
  title: 'Scopes/Rich Text Campaign',
};

export const headings = () => ({
  template: `
    <div class="bg-solid-white" style="padding:2rem;">

      <div class="wes-random-component__message wes-rich-text-campaign-scope" style="width:600px;margin:0 auto;">
        
        <!-- Output from Sitecore RTE -->
        <h1>NHS pensions advice, tailored to you</h1>
        <h2>NHS pensions advice, tailored to you</h2>
        <h3>NHS pensions advice, tailored to you</h3>
        <h4>NHS pensions advice, tailored to you</h4>
        <h5>NHS pensions advice, tailored to you</h5>
        <h6>NHS pensions advice, tailored to you</h6>
      
      </div>
    </div>
  `,
});

export const copyHighlight = () => ({
  template: `
    <div class="bg-solid-white" style="padding:2rem;">

      <div class="wes-random-component__message wes-rich-text-campaign-scope" style="width:600px;margin:0 auto;">
        
        <!-- Output from Sitecore RTE -->
        <p class="highlight">Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>

      </div>
    </div>
  `,
});

export const copyExtraSmall = () => ({
  template: `
    <div class="bg-solid-white" style="padding:2rem;">

      <div class="wes-random-component__message wes-rich-text-campaign-scope" style="width:600px;margin:0 auto;">
        
        <!-- Output from Sitecore RTE -->
        <p class="xs">Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>

      </div>
    </div>
  `,
});

export const copySmall = () => ({
  template: `
    <div class="bg-solid-white" style="padding:2rem;">

      <div class="wes-random-component__message wes-rich-text-campaign-scope" style="width:600px;margin:0 auto;">
        
        <!-- Output from Sitecore RTE -->
        <p class="s">Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>

      </div>
    </div>
  `,
});

export const copyMedium = () => ({
  template: `
    <div class="bg-solid-white" style="padding:2rem;">

      <div class="wes-random-component__message wes-rich-text-campaign-scope" style="width:600px;margin:0 auto;">
        
        <!-- Output from Sitecore RTE -->
        <p class="m">Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>

      </div>
    </div>
  `,
});

export const copyLarge = () => ({
  template: `
    <div class="bg-solid-white" style="padding:2rem;">

      <div class="wes-random-component__message wes-rich-text-campaign-scope" style="width:600px;margin:0 auto;">
        
        <!-- Output from Sitecore RTE -->
        <p class="l">Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>

      </div>
    </div>
  `,
});

export const example = () => ({
  template: `
    <div class="bg-solid-white" style="padding:2rem;">

      <!-- Add Rich Text scope class --> 
      <div class="wes-random-component__message wes-rich-text-campaign-scope" style="width:600px;margin:0 auto;">

        <!-- Output from Sitecore RTE -->
        <h2><span class="h2">NHS pensions advice, tailored to you</span></h2>
        <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
        <h2><span class="h3">NHS pensions advice, tailored to you</span></h2>
        <ul class="ticked">
          <li>How can I retire early?</li>
          <li>How do I maximise my Pension Lifetime Allowance?</li>
          <li>How much will my NHS Pension lump sum be?</li>
          <li>Should I stay in the NHS Pension Scheme?</li>
          <li>What should I do with my pension benefits when I take them?</li>
        </ul>
        <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
        <h3 class="level2">L2 - Highlight effect</h3>
        <h4 class="level3">L3 - Left</h4>
        <p class="highlight">Limits, exclusions and charges do apply. Full <a href="#">terms and conditions</a> of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
        
        <h4 class="level3">L3 - Right</h4>
        <p class="highlight" style="text-align: right">Limits, exclusions and charges do apply. Full <a href="#">terms and conditions</a> of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>        
        <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
        <ul class="bulleted">
          <li>How can I retire early?</li>
          <li>How do I maximise my Pension Lifetime Allowance?</li>
          <li>How much will my NHS Pension lump sum be?</li>
          <li>Should I stay in the NHS Pension Scheme?</li>
          <li>What should I do with my pension benefits when I take them?</li>
        </ul>
        <h2><span class="h4">NHS pensions advice, tailored to you</span></h2>
        <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
        <ol class="numbered">
          <li>Home emergency support ??? We have a network of registered tradespeople available 24/7, ready to help fix your domestic crises like a burst pipe or heating breakdown.</li>
          <li>Pest removal cover ??? Covers the cost of calling an expert out to remove a pest infestation at home.</li>
          <li>Family legal expenses ??? Protects you and your family from the costs of legal disputes, whether with a neighbour or your employer.</li>
        </ol>
        <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
        <p class="highlight">Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
        <p>Limits, exclusions and charges do apply. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</p>
        <p class="s"><em>Limits, exclusions <a href="#">and charges do apply</a>. Full terms and conditions of the policy and cover, including the policy benefits and exclusions, will be contained in the Policy Wording and Policy Summary.</em></p>

      </div>

    </div>
  `,
});