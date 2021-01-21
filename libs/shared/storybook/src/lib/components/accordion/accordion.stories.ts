import { AccordionComponent } from './accordion.component';
import { moduleMetadata } from '@storybook/angular';
import { AccordionModule } from './accordion.module';
export default {
  title: 'Components/Accordion',
  decorators: [
    moduleMetadata({
      imports: [
        AccordionModule
      ]
    })
  ],
  component: AccordionComponent
};

export const base = () => ({
  template: `
  <wes-accordion></wes-accordion>
  `,
});
export const accordionFullWidth= () => ({
  template: `
  <div class="component accordion initialized" data-properties="{&quot;expandOnHover&quot;:false,&quot;expandedByDefault&quot;:false,&quot;speed&quot;:500,&quot;easing&quot;:&quot;swing&quot;,&quot;canOpenMultiple&quot;:true,&quot;canToggle&quot;:true,&quot;isControlEditable&quot;:false}">
  <div class="component-content">
     <div>
        <ul class="items">
           <li class="item">
              <div class="toggle-header" (click)="toggle(0)" tabindex="0">
                 <div class="label">
                    <div class="component content">
                       <div class="component-content">
                          <div class="field-heading"><strong>{{text_one}}</strong></div>
                       </div>
                    </div>
                 </div>
              </div>
              <div *ngIf="opened" class="toggle-content" [ngClass]="{'hidden': !opened}">
                 <div class="component content">
                    <div class="component-content">
                       <div class="field-content">
                          <p style="box-sizing: inherit; font-size: 1.125rem; line-height: 1.688rem; font-weight: 400; margin-top: 10px; margin-bottom: 20px;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit. 1</p>
                       </div>
                    </div>
                 </div>
              </div>
           </li>
           <li class="item">
              <div class="toggle-header" (click)="toggleMenu(1)" tabindex="-1">
                 <div class="label">
                    <div class="component content">
                       <div class="component-content">
                          <div class="field-heading"><strong>Accordion Item 2</strong></div>
                       </div>
                    </div>
                 </div>
              </div>
              <div *ngIf="opened" class="toggle-content" [ngClass]="{'hidden': !opened}">
                 <div class="component content">
                    <div class="component-content">
                       <div class="field-content">
                          <p style="box-sizing: inherit; font-size: 1.125rem; line-height: 1.688rem; font-weight: 400; margin-top: 10px; margin-bottom: 20px;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit. 2</p>
                       </div>
                    </div>
                 </div>
              </div>
           </li>
        </ul>
     </div>
  </div>
</div>

  `,
  props: {
    text_one: 'Accordion item 1',
    text_two: 'Accordion item 2',
    opened: false,
    toggle: (event: any) => {
      console.log('some bindings work');
      console.log(event);
    },
  },
  component: AccordionComponent
});
export const accordionCustom = () => ({
  template: `
  <div class="component snippet initialized">
  <div class="component-content">
     <div class="snippet-inner">
        <div class="snippet-container">
           <div class="snippet initialized">
              <div class="component pb-3 pt-3 pt-md-4 wes-bg-solid-white">
                 <div class="component container">
                    <div class="component col-sm-12 col-lg-10 offset-lg-1">
                       <div class="component rich-text pb-4 pb-lg-6 pb-md-5">
                          <div class="component-content header">
                            Frequently Asked Questions
                          </div>
                       </div>
                       <div class="component accordion initialized" data-properties="{&quot;expandOnHover&quot;:false,&quot;expandedByDefault&quot;:false,&quot;speed&quot;:500,&quot;easing&quot;:&quot;swing&quot;,&quot;canOpenMultiple&quot;:true,&quot;canToggle&quot;:true,&quot;isControlEditable&quot;:false}">
                          <div class="component-content">
                             <div>
                                <ul class="items">
                                   <li class="item">
                                      <div class="toggle-header" tabindex="0" (click)="toggle()">
                                         <div class="label">
                                            <div class="component content">
                                               <div class="component-content">
                                                  <div class="field-heading"><strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem?</strong></div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                      <div *ngIf="opened" class="toggle-content">
                                         <div class="component content">
                                            <div class="component-content">
                                               <div class="field-content">
                                                  <p style="box-sizing: inherit; font-size: 1.125rem; line-height: 1.688rem; font-weight: 400; margin-top: 10px; margin-bottom: 20px;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.</p>
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
                                                  <div class="field-heading"><strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem?</strong></div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                      <div class="toggle-content" style="display: none;">
                                         <div class="component content">
                                            <div class="component-content">
                                               <div class="field-content">
                                                  <p style="box-sizing: inherit; font-size: 1.125rem; line-height: 1.688rem; font-weight: 400; margin-top: 10px; margin-bottom: 20px;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.</p>
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
  props: {
    text: 'Accordion',
    opened: false,
    toggle: (event: any) => {
      console.log('some bindings work');
    },
  },
});
