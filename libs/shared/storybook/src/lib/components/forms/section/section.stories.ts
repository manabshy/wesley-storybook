export default {
  title: 'Components/Form - Section',
};

const affectedFormControl = `
  <!-- Input control -->
  <div class="wes-form-field wes-form-field-type-wes-input">
    <div class="wes-form-field-label-wrapper">
      <label class="wes-form-field-label" for="a1" aria-owns="a1">
        <span>Affected</span>
      </label>
    </div>
    <div class="wes-form-field-wrapper">
      <div class="wes-form-field-flex">
        <div class="wes-form-field-infix">
          <input name="a1" type="text" class="wes-input-element" id="a1" value="" maxlength="255" placeholder="" data-sc-tracking="True" data-sc-field-name="Custom Input V2" data-val-required="Sorry, the information you've entered is invalid or in the wrong format. Please check and try again" data-val-regex="Sorry, the information you've entered is invalid or in the wrong format. Please check and try again" data-val-regex-pattern="(GIR\s0AA)|((([ABCDEFGHIJKLMNOPRSTUWYZabcdefghijklmnoprstuwyz][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZabcdefghijklmnoprstuwyz][ABCDEFGHKLMNOPQRSTUVWXYabcdefghklmnopqrstuvwxy][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZabcdefghijklmnoprstuwyz][0-9][ABCDEFGHJKSTUWabcdefghjkstuw])|([ABCDEFGHIJKLMNOPRSTUWYZabcdefghijklmnoprstuwyz][ABCDEFGHKLMNOPQRSTUVWXYabcdefghklmnopqrstuvwxy][0-9][ABEHMNPRVWXYabehmnprvwxy]))))\s?[0-9][ABDEFGHJLNPQRSTUWXYZabdefghjlnpqrstuwxyz]{2})$" data-val="true" aria-required="true" aria-invalid="false">
        </div>
      </div>
    </div>
  </div>
`;

const unaffectedFormControl = `
  <!-- Input control -->
  <div class="wes-form-field wes-form-field-type-wes-input">
    <div class="wes-form-field-label-wrapper">
      <label class="wes-form-field-label" for="a1" aria-owns="a1">
        <span>Unaffected</span>
      </label>
    </div>
    <div class="wes-form-field-wrapper">
      <div class="wes-form-field-flex">
        <div class="wes-form-field-infix">
          <input name="a1" type="text" class="wes-input-element" id="a1" value="" maxlength="255" placeholder="" data-sc-tracking="True" data-sc-field-name="Custom Input V2" data-val-required="Sorry, the information you've entered is invalid or in the wrong format. Please check and try again" data-val-regex="Sorry, the information you've entered is invalid or in the wrong format. Please check and try again" data-val-regex-pattern="(GIR\s0AA)|((([ABCDEFGHIJKLMNOPRSTUWYZabcdefghijklmnoprstuwyz][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZabcdefghijklmnoprstuwyz][ABCDEFGHKLMNOPQRSTUVWXYabcdefghklmnopqrstuvwxy][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZabcdefghijklmnoprstuwyz][0-9][ABCDEFGHJKSTUWabcdefghjkstuw])|([ABCDEFGHIJKLMNOPRSTUWYZabcdefghijklmnoprstuwyz][ABCDEFGHKLMNOPQRSTUVWXYabcdefghklmnopqrstuvwxy][0-9][ABEHMNPRVWXYabehmnprvwxy]))))\s?[0-9][ABDEFGHJLNPQRSTUWXYZabdefghjlnpqrstuwxyz]{2})$" data-val="true" aria-required="true" aria-invalid="false">
        </div>
      </div>
    </div>
  </div>
`;

export const base = () => ({
  template: `
    <div class="sitecore-form">
      <h2>Affected controls have uniform spacing applied</h2>

      <div class="wes-form-section">
        ${affectedFormControl}
      </div>

      <div class="wes-form-section">
        ${affectedFormControl}
      </div>

    </div>
  `,
});

export const fullWidth = () => ({
  template: `
    <div class="sitecore-form">
      <h2>Affected control is 75% width of unaffected control on large viewports and when placed in a full width context</h2>

      <div class="wes-form-section wes-form-section--full-width">
        ${affectedFormControl}
      </div>

      <div class="wes-form-section">
        ${unaffectedFormControl}
      </div>

    </div>
  `,
});

export const narrow = () => ({
  template: `
    <div class="sitecore-form">
      <h2>Affected control is half width of unaffected control</h2>

      <div class="wes-form-section wes-form-section--narrow">
        ${affectedFormControl}
      </div>

      <div class="wes-form-section">
        ${unaffectedFormControl}
      </div>

    </div>
  `,
});

export const fullWidthAndNarrow = () => ({
  template: `
    <div class="sitecore-form">
      <h2>Affected control is half width of unaffected control</h2>

      <div class="wes-form-section wes-form-section--full-width wes-form-section--narrow">
        ${affectedFormControl}
      </div>

      <div class="wes-form-section wes-form-section--full-width">
        ${unaffectedFormControl}
      </div>

    </div>
  `,
});