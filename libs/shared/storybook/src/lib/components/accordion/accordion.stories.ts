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
  

<div class="component campaign-content-container wes-content-block--campaign">
<div class="wes-content-block__wrapper">
  <div class="wes-content-block__body">
    <div class="wes-content-block__body-content">
      <div class="wes-content-block__placeholder">
        <div class="component wes-rich-text-campaign-scope">
          <h2 class="wes-accordion-header">Frequently asked questions</h2>
        </div>

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
                          <div class="field-heading">Accordion Item 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="toggle-content" style="">
                    <div class="component content">
                      <div class="component-content">
                        <div class="field-content">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta
                          sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione
                          voluptatem sequi nesciunt. Neque porro quisquam est,
                          qui dolorem ipsum quia dolor sit amet consectetur
                          adipisci velit.
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
                          <div class="field-heading">Accordion Item 2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="toggle-content" style="display: none">
                    <div class="component content">
                      <div class="component-content">
                        <div class="field-content">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta
                          sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione
                          voluptatem sequi nesciunt. Neque porro quisquam est,
                          qui dolorem ipsum quia dolor sit amet consectetur
                          adipisci velit.
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
                          <div class="field-heading">Accordion Item 3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="toggle-content" style="display: none">
                    <div class="component content">
                      <div class="component-content">
                        <div class="field-content">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta
                          sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione
                          voluptatem sequi nesciunt. Neque porro quisquam est,
                          qui dolorem ipsum quia dolor sit amet consectetur
                          adipisci velit.
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
                          <div class="field-heading">Accordion Item 4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="toggle-content" style="display: none">
                    <div class="component content">
                      <div class="component-content">
                        <div class="field-content">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta
                          sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione
                          voluptatem sequi nesciunt. Neque porro quisquam est,
                          qui dolorem ipsum quia dolor sit amet consectetur
                          adipisci velit.
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
