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
                <div class="wes-radio-background">
                  <svg viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="wes-radio-checkmark"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-101.000000, -149.000000)" fill="#ffffff"><g transform="translate(0.000000, 72.000000)"><g transform="translate(97.000000, 72.000000)"><path d="M6.95084897,9.47966533 L5.01075876,7.41619317 C4.77953371,7.17026313 4.40464384,7.17026313 4.17341879,7.41619317 C3.94219374,7.6621232 3.94219374,8.06085457 4.17341879,8.3067846 L6.53217898,10.8155525 C6.76340403,11.0614825 7.13829391,11.0614825 7.36951896,10.8155525 L11.8265812,6.07503896 C12.0578063,5.82910892 12.0578063,5.43037756 11.8265812,5.18444752 C11.5953562,4.93851749 11.2204663,4.93851749 10.9892412,5.18444752 L6.95084897,9.47966533 Z" id="Path-2"></path></g></g></g></g></svg>
                  <div class="wes-radio-mixedmark"></div>
                </div>
              </div>
              <span class="wes-radio-label">Email</span>
            </label>
          </div>
          <div class="wes-radio" id="wes-radio-fxb_76605747-849b-49b9-a375-4ae7458fb24f_Fields_38b28032-aeb2-4f28-af6b-b90a2c99a61c__Value">
            <label class="wes-radio-layout" for="fxb_76605747-849b-49b9-a375-4ae7458fb24f_Fields_38b28032-aeb2-4f28-af6b-b90a2c99a61c__Value-1">
              <div class="wes-radio-inner-container">
                <input type="radio" disabled class="wes-radio-input cdk-visually-hidden" id="fxb_76605747-849b-49b9-a375-4ae7458fb24f_Fields_38b28032-aeb2-4f28-af6b-b90a2c99a61c__Value-1" name="fxb.76605747-849b-49b9-a375-4ae7458fb24f.Fields[38b28032-aeb2-4f28-af6b-b90a2c99a61c].Value" data-val-ischecked="" value="Phone" data-sc-tracking="True" data-sc-field-name="Custom Checkbox list V2" tabindex="0">
                <div class="wes-radio-frame"></div>
                <div class="wes-radio-background">
                  <svg viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="wes-radio-checkmark"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-101.000000, -149.000000)" fill="#ffffff"><g transform="translate(0.000000, 72.000000)"><g transform="translate(97.000000, 72.000000)"><path d="M6.95084897,9.47966533 L5.01075876,7.41619317 C4.77953371,7.17026313 4.40464384,7.17026313 4.17341879,7.41619317 C3.94219374,7.6621232 3.94219374,8.06085457 4.17341879,8.3067846 L6.53217898,10.8155525 C6.76340403,11.0614825 7.13829391,11.0614825 7.36951896,10.8155525 L11.8265812,6.07503896 C12.0578063,5.82910892 12.0578063,5.43037756 11.8265812,5.18444752 C11.5953562,4.93851749 11.2204663,4.93851749 10.9892412,5.18444752 L6.95084897,9.47966533 Z" id="Path-2"></path></g></g></g></g></svg>
                  <div class="wes-radio-mixedmark"></div>
                </div>
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
                <div class="wes-radio-background">
                  <svg viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="wes-radio-checkmark"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-101.000000, -149.000000)" fill="#ffffff"><g transform="translate(0.000000, 72.000000)"><g transform="translate(97.000000, 72.000000)"><path d="M6.95084897,9.47966533 L5.01075876,7.41619317 C4.77953371,7.17026313 4.40464384,7.17026313 4.17341879,7.41619317 C3.94219374,7.6621232 3.94219374,8.06085457 4.17341879,8.3067846 L6.53217898,10.8155525 C6.76340403,11.0614825 7.13829391,11.0614825 7.36951896,10.8155525 L11.8265812,6.07503896 C12.0578063,5.82910892 12.0578063,5.43037756 11.8265812,5.18444752 C11.5953562,4.93851749 11.2204663,4.93851749 10.9892412,5.18444752 L6.95084897,9.47966533 Z" id="Path-2"></path></g></g></g></g></svg>
                  <div class="wes-radio-mixedmark"></div>
                </div>
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
