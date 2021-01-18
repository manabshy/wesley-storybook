export default {
  title: 'Components/Accordion',
};

export const base = () => ({
  template: `
  <div class="component accordion initialized" data-properties="{&quot;expandOnHover&quot;:false,&quot;expandedByDefault&quot;:false,&quot;speed&quot;:500,&quot;easing&quot;:&quot;swing&quot;,&quot;canOpenMultiple&quot;:true,&quot;canToggle&quot;:true,&quot;isControlEditable&quot;:false}">
  <div class="component-content">
     <div>
        <ul class="items">
           <li class="item">
              <div class="toggle-header" tabindex="0">
                 <div class="label">
                    <div class="component content">
                       <div class="component-content">
                          <div class="field-heading"><strong>Accordion Item 1</strong></div>
                       </div>
                    </div>
                 </div>
              </div>
              <div class="toggle-content" style="display: none;">
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
              <div class="toggle-header" tabindex="-1">
                 <div class="label">
                    <div class="component content">
                       <div class="component-content">
                          <div class="field-heading"><strong>Accordion Item 2</strong></div>
                       </div>
                    </div>
                 </div>
              </div>
              <div class="toggle-content" style="display: none;">
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
});

export const withClose = () => ({
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
                          <div class="component-content">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </div>
                       </div>
                       <div class="component accordion initialized" data-properties="{&quot;expandOnHover&quot;:false,&quot;expandedByDefault&quot;:false,&quot;speed&quot;:500,&quot;easing&quot;:&quot;swing&quot;,&quot;canOpenMultiple&quot;:true,&quot;canToggle&quot;:true,&quot;isControlEditable&quot;:false}">
                          <div class="component-content">
                             <div>
                                <ul class="items">
                                   <li class="item">
                                      <div class="toggle-header" tabindex="0">
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
});
