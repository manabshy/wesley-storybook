import { select, text } from '@storybook/addon-knobs';

export default {
  title: 'Core Pages|Needs Based',
};

const variants = {
  'On White': 'wes-core-component--right',
  'On Grey': 'wes-core-component--right wes-core-component--grey',
};

export const basic = () => ({
  template: `
    <div class="wes-content-block {{ variant.replaceAll('wes-core-component', 'wes-content-block') }}">
      <div class="wes-content-block__wrapper">
        <div class="wes-content-block__body">
          <div class="wes-content-block__body-content">
            <div class="wes-content-block__placeholder">
              <div class="component rich-text wes-rich-text-scope">
                <h2><span class="h2">How much you might need to save</span></h2>
                <p>Taking the average house price in the UK as an example (£230,000 at April 2020), a 10% deposit would be £23,000. There are other costs like solicitors’ fees to add to that as well, but we’ll come to those later.</p>
                <p>Of course, depending on where you live in the country, house prices could be significantly higher or lower than the average, so you’ll need to do your research to see what property prices are like where you want to buy - and work out your target deposit from there.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wes-callout {{ variant.replaceAll('wes-core-component', 'wes-callout') }}">
      <div class="wes-callout__wrapper">
        <div class="wes-callout__body">
          <div class="wes-callout__body-content">
            <div class="wes-callout__frame">
              <h2 class="wes-callout__title">How to save for your deposit</h2>
              <div class="wes-callout__message">
                <p>Just as it\'s important to be realistic about what kind of house and mortgage you can afford, it\'s crucial to set a realistic timeframe for saving up the deposit. Estimates suggest it can take an average of 3.5 years for a couple to save their deposit, and that rises to 13.5 years if you\'re buying alone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wes-content-block {{ variant.replaceAll('wes-core-component', 'wes-content-block') }}">
      <div class="wes-content-block__wrapper">
        <div class="wes-content-block__body">
          <div class="wes-content-block__body-content">
            <div class="wes-content-block__placeholder">
              <div class="component rich-text wes-rich-text-scope">
                <h2><span class="h2">How much you might need to save</span></h2>
                <p>Taking the average house price in the UK as an example (£230,000 at April 2020), a 10% deposit would be £23,000. There are other costs like solicitors’ fees to add to that as well, but we’ll come to those later.</p>
                <p>Of course, depending on where you live in the country, house prices could be significantly higher or lower than the average, so you’ll need to do your research to see what property prices are like where you want to buy - and work out your target deposit from there.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wes-emphasis  {{ variant.replaceAll('wes-core-component', 'wes-emphasis') }}">
      <div class="wes-emphasis__wrapper">
        <div class="wes-emphasis__body">
          <div class="wes-emphasis__body-content">
            <div class="wes-emphasis__frame">
              <div class="wes-emphasis__message">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec scelerisque magna, et consequat magna. Nulla a lacus molestie, tristique sapien eu, auctor ipsum. Praesent purus libero, aliquet ut odio eu, consequat fermentum libero.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  props: {
    variant: select('Variant', variants, 'wes-core-component--right'),
  },
});