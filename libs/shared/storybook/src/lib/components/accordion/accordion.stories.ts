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
  <div class="component wes-accordion">
        <div class="component container">
            <div class="component col-sm-12 col-lg-10 offset-lg-1">
                <div class="component rich-text">
                    <div class="component-content">
                        <h2 class="wes-accordion-header">Frequently Asked Questions</h2>
                    </div>
                </div>
                <div class="component accordion initialized" data-properties="{&quot;expandOnHover&quot;:false,&quot;expandedByDefault&quot;:false,&quot;speed&quot;:500,&quot;easing&quot;:&quot;swing&quot;,&quot;canOpenMultiple&quot;:true,&quot;canToggle&quot;:true,&quot;isControlEditable&quot;:false}">
                    <div class="component-content">
                        <div>
                            <div>
                                <ul class="items">
                                        <li class="item active">
                                                <div class="toggle-header" tabindex="0">
                                                    <div class="label">
                                                        
<div class="component content">
    <div class="component-content">
<div class="field-heading"><p><b>Is the With Profits ISA a stocks and shares ISA?</b></p></div>    </div>
</div>

                                                    </div>
                                                </div>
                                                <div class="toggle-content" style="">
                                                    
<div class="component content">
    <div class="component-content">
<div class="field-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>    </div>
</div>

                                                </div>
                                        </li>
                                        <li class="item">
                                                <div class="toggle-header" tabindex="0">
                                                    <div class="label">
                                                        
<div class="component content">
    <div class="component-content">
<div class="field-heading"><p><b>Am I eligible for a With Profits ISA?</b></p></div>    </div>
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
                                                <div class="toggle-header" tabindex="0">
                                                    <div class="label">
                                                        
<div class="component content">
    <div class="component-content">
<div class="field-heading"><p><b>How much can I invest in a With Profits ISA?</b></p></div>    </div>
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
                </div>
            </div>
        </div>
    </div>

    <div class="component wes-accordion wes-bg-solid-grey-50">
        <div class="component container">
            <div class="component col-sm-12 col-lg-10 offset-lg-1">
                <div class="component rich-text">
                    <div class="component-content">
                        <h2 class="wes-accordion-header">Frequently Asked Questions</h2>
                    </div>
                </div>
                <div class="component accordion initialized" data-properties="{&quot;expandOnHover&quot;:false,&quot;expandedByDefault&quot;:false,&quot;speed&quot;:500,&quot;easing&quot;:&quot;swing&quot;,&quot;canOpenMultiple&quot;:true,&quot;canToggle&quot;:true,&quot;isControlEditable&quot;:false}">
                    <div class="component-content">
                        <div>
                            <div>
                                <ul class="items">
                                        <li class="item">
                                                <div class="toggle-header" tabindex="0">
                                                    <div class="label">
                                                        
<div class="component content">
    <div class="component-content">
<div class="field-heading"><p><b>Is the With Profits ISA a stocks and shares ISA?</b></p></div>    </div>
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
                                        <li class="item active">
                                                <div class="toggle-header" tabindex="0">
                                                    <div class="label">
                                                        
<div class="component content">
    <div class="component-content">
<div class="field-heading"><p><b>Am I eligible for a With Profits ISA?</b></p></div>    </div>
</div>

                                                    </div>
                                                </div>
                                                <div class="toggle-content" style="">
                                                    
<div class="component content">
    <div class="component-content">
<div class="field-content">[No text in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.field]</div>    </div>
</div>

                                                </div>
                                        </li>
                                        <li class="item">
                                                <div class="toggle-header" tabindex="0">
                                                    <div class="label">
                                                        
<div class="component content">
    <div class="component-content">
<div class="field-heading"><p><b>How much can I invest in a With Profits ISA?</b></p></div>    </div>
</div>

                                                    </div>
                                                </div>
                                                <div class="toggle-content" style="display: none;">
                                                    
<div class="component content">
    <div class="component-content">
<div class="field-content">[No text in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.field]</div>    </div>
</div>

                                                </div>
                                        </li>
                                        <li class="item">
                                                <div class="toggle-header" tabindex="0">
                                                    <div class="label">
                                                        
<div class="component content">
    <div class="component-content">
<div class="field-heading"><p><b>How do bonuses work?</b></p></div>    </div>
</div>

                                                    </div>
                                                </div>
                                                <div class="toggle-content" style="display: none;">
                                                    
<div class="component content">
    <div class="component-content">
<div class="field-content">[No text in fiLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.eld]</div>    </div>
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
