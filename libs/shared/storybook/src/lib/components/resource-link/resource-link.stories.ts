export default {
  title: 'Components/Resource Link',
};

export const resourceLink = () => ({
  template: `
    <div class="container" style="padding-top:32px">
      <div class="row">
        <div class="col-8">

          <div class="wes-resource-link">
            <svg width="14px" height="16px" viewBox="0 0 14 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Rework" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
                <g id="Product-Page_Doc-Links_XL" transform="translate(-96.000000, -270.000000)" stroke="#1E2630">
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
            <p class="wes-resource-link__body">
              <a class="wes-resource-link__link" href="#" target="_blank">With Profits ISA Factsheet</a>
              <span>&nbsp;</span>
              <span class="wes-resource-link__meta">PDF (205KB)</span>
            </p>
          </div>

          <div class="wes-resource-link">
            <svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Rework" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                <g id="Product-Page_Doc-Links_XL" transform="translate(-94.000000, -321.000000)" stroke="#1E2630">
                  <g id="Important-Information" transform="translate(0.000000, -1783.000000)">
                    <g id="Contents" transform="translate(94.000000, 228.000000)">
                      <g id="Key-Documents" transform="translate(0.000000, 1603.000000)">
                       <g id="List-Bullet" transform="translate(0.000000, 112.000000)">
                          <g id="03-List-Item-Copy" transform="translate(0.000000, 156.000000)">
                            <g id="01-Bullet" transform="translate(0.000000, 5.000000)">
                              <path d="M12.2103355,9.4801407 L14.8293831,6.86109308 C15.9865512,5.70392504 15.9865512,3.82778494 14.8293831,2.67061689 C13.6722151,1.51344885 11.796075,1.51344885 10.6389069,2.67061689 L8.0198593,5.28966451 C6.86269125,6.44683256 6.86269125,8.32297266 8.0198593,9.4801407" id="Rectangle"></path>
                              <path d="M5.63890692,7.67061689 L3.0198593,10.2896645 C1.86269125,11.4468326 1.86269125,13.3229727 3.0198593,14.4801407 C4.17702734,15.6373087 6.05316744,15.6373087 7.21033549,14.4801407 L9.82938311,11.8610931 C10.9865512,10.703925 10.9865512,8.82778494 9.82938311,7.67061689" id="Rectangle"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <p class="wes-resource-link__body">
              <a class="wes-resource-link__link" href="#" target="_blank">How our With Profits Fund works</a>
              
              <!-- Omit for link types -->
              <!-- 
              <span>&nbsp;</span>
              <span class="wes-resource-link__meta">PDF (205KB)</span>
              -->

            </p>
          </div>

        </div>    
      </div>
    </div>
  `,
});

export const contentBlockResourceLink = () => ({
  template: `
  <div class="component wes-content-block">
  <div class="wes-content-block__wrapper">
    <div class="wes-content-block__body">
      <div class="wes-content-block__body-content">
        <div class="wes-content-block__placeholder">
          <div class="component wes-rich-text-scope">
            <ul class="wes-core-resource-link">
              <li class="pdf"><a href="#">List item 1</a> PDF 300KB</li>
              <li class="link"><a href="#">List item 2</a></li>
              <li class="link"><a href="#">List item 3</a></li>
            </ul>
            <ul class="wes-core-resource-link">
              <li class="pdf"><a href="#">List item 1</a> PDF 300KB</li>
              <li class="link"><a href="#">List item 2</a></li>
              <li class="link"><a href="#">List item 3</a></li>
            </ul>
            <ul class="wes-core-resource-link">
              <li class="pdf"><a href="#">List item 1</a> PDF 300KB</li>
              <li class="link"><a href="#">List item 2</a></li>
              <li class="link"><a href="#">List item 3</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
});
