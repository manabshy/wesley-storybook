import { AccordionComponent } from './accordion.component';
import { moduleMetadata } from '@storybook/angular';
import { AccordionModule } from './accordion.module';
import { text, withKnobs } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs';

import * as jquery from 'jquery';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';

global = { ...global, ...{ $: jquery, jQuery: jquery, bootstrap: bootstrap } };

export default {
  title: 'Components/Accordion',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [AccordionModule],
    }),
  ],
  component: AccordionComponent,
};

const variants = {
  'On White': 'wes-bg-solid-white',
  'On Grey': 'wes-bg-solid-grey-50',
};

export const accordion = () => ({
  template: `
  <wes-accordion [background]="background" [idAttribute]="id" [title]="title"></wes-accordion>
  `,
  props: {
    background: select('Variant', variants, ''),
  },
  component: AccordionComponent,
});

export const sitecoreAccordion = () => ({
  template: `
  <div class="component wes-content-block wes-content-block--campaign">
  <div class="wes-content-block__wrapper">
    <div class="wes-content-block__body">
      <div class="wes-content-block__body-content">
        <div class="wes-content-block__placeholder">
          <div class="component wes-rich-text-campaign-scope">
            <h2 class="wes-accordion-header">Frequently asked questions</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="component snippet initialized">
<div class="component-content">
  <div class="snippet-inner">
    <div class="snippet-container">
      <div class="snippet initialized">
        <div class="component wes-bg-solid-white">
          <div class="component container">
            <div class="component col-sm-12 col-lg-10 offset-lg-1">
              <div
                class="component accordion initialized"
                data-properties='{"expandOnHover":false,"expandedByDefault":false,"speed":500,"easing":"swing","canOpenMultiple":true,"canToggle":true,"isControlEditable":false}'
              >
                <div class="component-content">
                  <div>
                    <ul class="items">
                      <li class="item active">
                        <div class="toggle-header" tabindex="0">
                          <div class="label">
                            <div class="component content">
                              <div class="component-content">
                                <div class="field-heading">
                                  <strong>
                                    What can I expect from this 15-minute
                                    call?
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="toggle-content">
                          <div class="component content">
                            <div class="component-content">
                              <div class="field-content">
                                <p
                                  style="
                                    box-sizing: inherit;
                                    font-size: 1.125rem;
                                    line-height: 1.688rem;
                                    font-weight: 400;
                                    margin-top: 10px;
                                    margin-bottom: 20px;
                                  "
                                >
                                  In this introductory call, a member of our
                                  support team will get to know you and ask
                                  you about your financial needs. We'll then
                                  match you with a Wesleyan Financial Services
                                  Consultant who can offer advice and
                                  recommendations tailored to you. From there,
                                  you can meet with them on a one-off or
                                  regular basis, whenever your circumstances
                                  change or you need help with you finances.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="item">
                        <div class="toggle-header" tabindex="-1">
                          <div class="label">
                            <div class="component content">
                              <div class="component-content">
                                <div class="field-heading">
                                  <strong>Is the advice free?</strong>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="toggle-content" style="display: none">
                          <div class="component content">
                            <div class="component-content">
                              <div class="field-content">
                                <p
                                  style="
                                    box-sizing: inherit;
                                    font-size: 1.125rem;
                                    line-height: 1.688rem;
                                    font-weight: 400;
                                    margin-top: 10px;
                                    margin-bottom: 20px;
                                  "
                                >
                                  There’s no cost to you when we call for the
                                  15-minute consultation, and the following
                                  meeting with your Financial Consultant is
                                  also no-obligation.
                                </p>
                                <p
                                  style="
                                    box-sizing: inherit;
                                    font-size: 1.125rem;
                                    line-height: 1.688rem;
                                    font-weight: 400;
                                    margin-top: 10px;
                                    margin-bottom: 20px;
                                  "
                                >
                                  Your Financial Consultant may make a
                                  recommendation to you during your financial
                                  review, but there's no expectation to take
                                  out any Wesleyan product or service. Just be
                                  aware that if you do choose to take out a
                                  Wesleyan financial product, there may be an
                                  initial fee to pay.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="item">
                        <div class="toggle-header" tabindex="-1">
                          <div class="label">
                            <div class="component content">
                              <div class="component-content">
                                <div class="field-heading">
                                  <strong>
                                    What should I prepare ahead of our call?
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="toggle-content" style="display: none">
                          <div class="component content">
                            <div class="component-content">
                              <div class="field-content">
                                <p
                                  style="
                                    box-sizing: inherit;
                                    font-size: 1.125rem;
                                    line-height: 1.688rem;
                                    font-weight: 400;
                                    margin-top: 10px;
                                    margin-bottom: 20px;
                                  "
                                >
                                  You don't need to prepare anything ahead of
                                  time, though it can help to have an idea of
                                  the questions you're looking to get
                                  answered.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
// sitecoreAccordion.decorators = [
//   (storyFnc) => {
//     const story = storyFnc();
//     setTimeout(()=> {
//     })
//   }
// ]
/***/
