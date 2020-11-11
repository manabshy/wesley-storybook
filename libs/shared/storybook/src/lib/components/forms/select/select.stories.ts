export default {
  title: 'Components|Form - Select',
};

export const base = () => ({
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 offset-md-1">

          <div class="wes-form-section wes-form-section--full-width wes-form-section--narrow">

            <!-- Example output from Sitecore Form Builder -->
            <div class="wes-form-field wes-form-field-type-wes-native-select">
              <div class="wes-form-field-label-wrapper">
                <label for="fxb_a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce_Fields_e8496906-389a-4c31-9809-a780e2e2b2f2__Value" class="wes-form-field-label " aria-owns="fxb_a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce_Fields_e8496906-389a-4c31-9809-a780e2e2b2f2__Value">
                    Title
                </label>
              </div>
              <div class="wes-form-field-wrapper ">
                <div class="wes-form-field-flex">
                  <div class="wes-form-field-infix">
                    <select class="wes-input-element form-control d-block" id="fxb_a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce_Fields_e8496906-389a-4c31-9809-a780e2e2b2f2__Value" name="fxb.a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce.Fields[e8496906-389a-4c31-9809-a780e2e2b2f2].Value" data-val-required="Please select one of the options above" data-sc-tracking="True" data-sc-field-name="Custom Dropdown List V2" data-val="true">
                      <option value="" disabled="" selected="">Please select</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div class="wes-form-field-subscript-wrapper ">
                <div role="alert" class="wes-error">
                  <div class="wes-form-field-error-message">
                    <p>
                      <svg _ngcontent-cme-c57="" height="16" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g _ngcontent-cme-c57="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g _ngcontent-cme-c57="" id="6_1_Declaration_Validation_768" transform="translate(-138.000000, -2139.000000)"><g _ngcontent-cme-c57="" id="Declaration" transform="translate(94.000000, 1575.000000)"><g _ngcontent-cme-c57="" id="Checkbox_1" transform="translate(0.000000, 522.000000)"><g _ngcontent-cme-c57="" id="Checkbox"><g _ngcontent-cme-c57="" id="Icon" transform="translate(44.000000, 42.000000)"><g _ngcontent-cme-c57="" id="Error-icon"><circle _ngcontent-cme-c57="" id="Oval" fill="#D72D41" cx="8" cy="8" r="8"></circle><path _ngcontent-cme-c57="" d="M8.76388889,9 L9,4 L7,4 L7.23611111,9 L8.76388889,9 Z M8.00956938,12 C8.32216906,12 8.56539075,11.9120975 8.73923445,11.7362924 C8.91307815,11.5604874 9,11.3159269 9,11.002611 C9,10.6858138 8.91626794,10.4395126 8.74880383,10.2637076 C8.58133971,10.0879025 8.33492823,10 8.00956938,10 C7.68102073,10 7.43062201,10.0879025 7.25837321,10.2637076 C7.0861244,10.4395126 7,10.6858138 7,11.002611 C7,11.3159269 7.08931419,11.5604874 7.26794258,11.7362924 C7.44657097,11.9120975 7.6937799,12 8.00956938,12 Z" id="!" fill="#FFFFFF" fill-rule="nonzero"></path></g></g></g></g></g></g></g></svg>
                      <span class="field-validation-valid" data-valmsg-for="fxb.a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce.Fields[e8496906-389a-4c31-9809-a780e2e2b2f2].Value" data-valmsg-replace="true">Please select one of the options above</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="wes-form-section wes-form-section--full-width">

            <div class="wes-form-field wes-form-field-type-wes-input  d-block">
              <div class="wes-form-field-label-wrapper">
                <label class="wes-form-field-label " id="wes-form-field-label-19" for="fxb_a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce_Fields_7b74e437-cb7b-4eb8-9d3f-f113c2098acd__Value" aria-owns="fxb_a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce_Fields_7b74e437-cb7b-4eb8-9d3f-f113c2098acd__Value">
                  <span labeltestid="lblPersonalEmail" class="">First name</span>
                </label>
              </div>
              <div class="wes-form-field-wrapper ">
                <div class="wes-form-field-flex ">
                  <div class="wes-form-field-infix ">
                    <input name="fxb.a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce.Fields[7b74e437-cb7b-4eb8-9d3f-f113c2098acd].Value" type="text" class="wes-input-element" id="fxb_a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce_Fields_7b74e437-cb7b-4eb8-9d3f-f113c2098acd__Value" value="" maxlength="255" placeholder="" data-sc-tracking="True" data-sc-field-name="Custom Input V2" data-val-required="First name is required." data-val="true">
                  </div>
                </div>
              </div>
              <div class="wes-form-field-subscript-wrapper ">
                <div role="alert" class="wes-error" id="wes-error-0" style="">
                  <div>
                    <div class="wes-form-field-error-message">
                      <p>
                        <svg _ngcontent-cme-c57="" height="18" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g _ngcontent-cme-c57="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g _ngcontent-cme-c57="" id="6_1_Declaration_Validation_768" transform="translate(-138.000000, -2139.000000)"><g _ngcontent-cme-c57="" id="Declaration" transform="translate(94.000000, 1575.000000)"><g _ngcontent-cme-c57="" id="Checkbox_1" transform="translate(0.000000, 522.000000)"><g _ngcontent-cme-c57="" id="Checkbox"><g _ngcontent-cme-c57="" id="Icon" transform="translate(44.000000, 42.000000)"><g _ngcontent-cme-c57="" id="Error-icon"><circle _ngcontent-cme-c57="" id="Oval" fill="#D72D41" cx="8" cy="8" r="8"></circle><path _ngcontent-cme-c57="" d="M8.76388889,9 L9,4 L7,4 L7.23611111,9 L8.76388889,9 Z M8.00956938,12 C8.32216906,12 8.56539075,11.9120975 8.73923445,11.7362924 C8.91307815,11.5604874 9,11.3159269 9,11.002611 C9,10.6858138 8.91626794,10.4395126 8.74880383,10.2637076 C8.58133971,10.0879025 8.33492823,10 8.00956938,10 C7.68102073,10 7.43062201,10.0879025 7.25837321,10.2637076 C7.0861244,10.4395126 7,10.6858138 7,11.002611 C7,11.3159269 7.08931419,11.5604874 7.26794258,11.7362924 C7.44657097,11.9120975 7.6937799,12 8.00956938,12 Z" id="!" fill="#FFFFFF" fill-rule="nonzero"></path></g></g></g></g></g></g></g></svg>
                        <span class="field-validation-valid" data-valmsg-for="fxb.a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce.Fields[7b74e437-cb7b-4eb8-9d3f-f113c2098acd].Value" data-valmsg-replace="true">Please complete the field above</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="wes-form-section wes-form-section--full-width">

            <!-- Example output from Sitecore Form Builder -->
            <div class="wes-form-field wes-form-field-type-wes-native-select">
              <div class="wes-form-field-label-wrapper">
                <label for="fxb_a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce_Fields_e8496906-389a-4c31-9809-a780e2e2b2f2__Value" class="wes-form-field-label " aria-owns="fxb_a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce_Fields_e8496906-389a-4c31-9809-a780e2e2b2f2__Value">
                    Profession
                </label>
              </div>
              <div class="wes-form-field-wrapper ">
                <div class="wes-form-field-flex">
                  <div class="wes-form-field-infix">
                    <select class="wes-input-element form-control d-block" id="fxb_a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce_Fields_e8496906-389a-4c31-9809-a780e2e2b2f2__Value" name="fxb.a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce.Fields[e8496906-389a-4c31-9809-a780e2e2b2f2].Value" data-val-required="Please select one of the options above" data-sc-tracking="True" data-sc-field-name="Custom Dropdown List V2" data-val="true">
                      <option value="" disabled="" selected="">Please select</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div class="wes-form-field-subscript-wrapper ">
                <div role="alert" class="wes-error">
                  <div class="wes-form-field-error-message">
                    <p>
                      <svg _ngcontent-cme-c57="" height="16" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g _ngcontent-cme-c57="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g _ngcontent-cme-c57="" id="6_1_Declaration_Validation_768" transform="translate(-138.000000, -2139.000000)"><g _ngcontent-cme-c57="" id="Declaration" transform="translate(94.000000, 1575.000000)"><g _ngcontent-cme-c57="" id="Checkbox_1" transform="translate(0.000000, 522.000000)"><g _ngcontent-cme-c57="" id="Checkbox"><g _ngcontent-cme-c57="" id="Icon" transform="translate(44.000000, 42.000000)"><g _ngcontent-cme-c57="" id="Error-icon"><circle _ngcontent-cme-c57="" id="Oval" fill="#D72D41" cx="8" cy="8" r="8"></circle><path _ngcontent-cme-c57="" d="M8.76388889,9 L9,4 L7,4 L7.23611111,9 L8.76388889,9 Z M8.00956938,12 C8.32216906,12 8.56539075,11.9120975 8.73923445,11.7362924 C8.91307815,11.5604874 9,11.3159269 9,11.002611 C9,10.6858138 8.91626794,10.4395126 8.74880383,10.2637076 C8.58133971,10.0879025 8.33492823,10 8.00956938,10 C7.68102073,10 7.43062201,10.0879025 7.25837321,10.2637076 C7.0861244,10.4395126 7,10.6858138 7,11.002611 C7,11.3159269 7.08931419,11.5604874 7.26794258,11.7362924 C7.44657097,11.9120975 7.6937799,12 8.00956938,12 Z" id="!" fill="#FFFFFF" fill-rule="nonzero"></path></g></g></g></g></g></g></g></svg>
                      <span class="field-validation-valid" data-valmsg-for="fxb.a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce.Fields[e8496906-389a-4c31-9809-a780e2e2b2f2].Value" data-valmsg-replace="true">Please select one of the options above</span>
                    </p>
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

export const invalid = () => ({
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-1">

          <!-- Example output from Sitecore Form Builder -->
          <div class="wes-form-field wes-form-field-type-wes-native-select">
            <div class="wes-form-field-label-wrapper">
              <label for="fxb_a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce_Fields_e8496906-389a-4c31-9809-a780e2e2b2f2__Value" class="wes-form-field-label " aria-owns="fxb_a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce_Fields_e8496906-389a-4c31-9809-a780e2e2b2f2__Value">
                  Title
              </label>
            </div>
            <div class="wes-form-field-wrapper ">
              <div class="wes-form-field-flex">
                <div class="wes-form-field-infix">
                  <select class="wes-input-element form-control d-block" id="fxb_a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce_Fields_e8496906-389a-4c31-9809-a780e2e2b2f2__Value" name="fxb.a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce.Fields[e8496906-389a-4c31-9809-a780e2e2b2f2].Value" data-val-required="Please select one of the options above" data-sc-tracking="True" data-sc-field-name="Custom Dropdown List V2" data-val="true">
                    <option value="" disabled="" selected="">Please select</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div class="wes-form-field-subscript-wrapper ">
              <div role="alert" class="wes-error">
                <div class="wes-form-field-error-message">
                  <p>
                    <svg _ngcontent-cme-c57="" height="18" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g _ngcontent-cme-c57="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g _ngcontent-cme-c57="" id="6_1_Declaration_Validation_768" transform="translate(-138.000000, -2139.000000)"><g _ngcontent-cme-c57="" id="Declaration" transform="translate(94.000000, 1575.000000)"><g _ngcontent-cme-c57="" id="Checkbox_1" transform="translate(0.000000, 522.000000)"><g _ngcontent-cme-c57="" id="Checkbox"><g _ngcontent-cme-c57="" id="Icon" transform="translate(44.000000, 42.000000)"><g _ngcontent-cme-c57="" id="Error-icon"><circle _ngcontent-cme-c57="" id="Oval" fill="#D72D41" cx="8" cy="8" r="8"></circle><path _ngcontent-cme-c57="" d="M8.76388889,9 L9,4 L7,4 L7.23611111,9 L8.76388889,9 Z M8.00956938,12 C8.32216906,12 8.56539075,11.9120975 8.73923445,11.7362924 C8.91307815,11.5604874 9,11.3159269 9,11.002611 C9,10.6858138 8.91626794,10.4395126 8.74880383,10.2637076 C8.58133971,10.0879025 8.33492823,10 8.00956938,10 C7.68102073,10 7.43062201,10.0879025 7.25837321,10.2637076 C7.0861244,10.4395126 7,10.6858138 7,11.002611 C7,11.3159269 7.08931419,11.5604874 7.26794258,11.7362924 C7.44657097,11.9120975 7.6937799,12 8.00956938,12 Z" id="!" fill="#FFFFFF" fill-rule="nonzero"></path></g></g></g></g></g></g></g></svg>
                    <span class="field-validation-valid" data-valmsg-for="fxb.a3d5cfd9-c0a4-4c57-9bae-91070e25a7ce.Fields[e8496906-389a-4c31-9809-a780e2e2b2f2].Value" data-valmsg-replace="true">Please select one of the options above</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `,
});