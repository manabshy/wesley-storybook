import { RadioComponent } from './radio.component';

export default {
  title: 'Components/Form - Radio',
};

export const base = () => ({
  template: `
    <div class="wes-form-section">

      <fieldset class="wes-form-field wes-form-field--radio-list">
        <legend class="wes-form-field-label sr-only">Contact preferences</legend>
        <div class="wes-form-field-content">
          <div class="wes-radio" id="wes-radio-fxb_76605747-849b-49b9-a375-4ae7458fb24f_Fields_38b28032-aeb2-4f28-af6b-b90a2c99a61c__Value">
            <label class="wes-radio-layout" for="fxb_76605747-849b-49b9-a375-4ae7458fb24f_Fields_38b28032-aeb2-4f28-af6b-b90a2c99a61c__Value-0">
              <div class="wes-radio-inner-container">
                <input type="radio" checked class="wes-radio-input cdk-visually-hidden valid" id="fxb_76605747-849b-49b9-a375-4ae7458fb24f_Fields_38b28032-aeb2-4f28-af6b-b90a2c99a61c__Value-0" name="fxb.76605747-849b-49b9-a375-4ae7458fb24f.Fields[38b28032-aeb2-4f28-af6b-b90a2c99a61c].Value" data-val-ischecked="" value="Email" data-sc-tracking="True" data-sc-field-name="Custom Checkbox list V2" tabindex="0" aria-invalid="false">
                <div class="wes-radio-frame"></div>
                <div class="wes-radio-background"></div>
              </div>
              <span class="wes-radio-label">Email</span>
            </label>
          </div>
          <div class="wes-radio" id="wes-radio-fxb_76605747-849b-49b9-a375-4ae7458fb24f_Fields_38b28032-aeb2-4f28-af6b-b90a2c99a61c__Value">
            <label class="wes-radio-layout" for="fxb_76605747-849b-49b9-a375-4ae7458fb24f_Fields_38b28032-aeb2-4f28-af6b-b90a2c99a61c__Value-1">
              <div class="wes-radio-inner-container">
                <input type="radio" disabled class="wes-radio-input cdk-visually-hidden" id="fxb_76605747-849b-49b9-a375-4ae7458fb24f_Fields_38b28032-aeb2-4f28-af6b-b90a2c99a61c__Value-1" name="fxb.76605747-849b-49b9-a375-4ae7458fb24f.Fields[38b28032-aeb2-4f28-af6b-b90a2c99a61c].Value" data-val-ischecked="" value="Phone" data-sc-tracking="True" data-sc-field-name="Custom Checkbox list V2" tabindex="0">
                <div class="wes-radio-frame"></div>
                <div class="wes-radio-background"></div>
              </div>
              <span class="wes-radio-label">
                <span style="display: none;">&nbsp;</span>Phone
              </span>
            </label>
          </div>
          <div class="wes-radio" id="wes-radio-fxb_76605747-849b-49b9-a375-4ae7458fb24f_Fields_38b28032-aeb2-4f28-af6b-b90a2c99a61c__Value">
            <label class="wes-radio-layout" for="fxb_76605747-849b-49b9-a375-4ae7458fb24f_Fields_38b28032-aeb2-4f28-af6b-b90a2c99a61c__Value-2">
              <div class="wes-radio-inner-container">
                <input type="radio" class="wes-radio-input cdk-visually-hidden" id="fxb_76605747-849b-49b9-a375-4ae7458fb24f_Fields_38b28032-aeb2-4f28-af6b-b90a2c99a61c__Value-2" name="fxb.76605747-849b-49b9-a375-4ae7458fb24f.Fields[38b28032-aeb2-4f28-af6b-b90a2c99a61c].Value" data-val-ischecked="" value="Post" data-sc-tracking="True" data-sc-field-name="Custom Checkbox list V2" tabindex="0">
                <div class="wes-radio-frame"></div>
                <div class="wes-radio-background"></div>
              </div>
              <span class="wes-radio-label">
                <span style="display: none;">&nbsp;</span>Post
              </span>
            </label>
          </div>
        </div>
      </fieldset>

    </div>
  `,
});
