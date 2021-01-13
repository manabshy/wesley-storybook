export default {
  title: 'Components/Tooltip',
};

export const style1 = () => ({
  template: `
    <div class="container">
      <div class="col-md-6 offset-md-3" style="padding:20px 0">

      <div class="wes-tooltip d-block">
      <div class="wes-tooltip-content">
        <img
          src="/assets/icons/svg/icon-info.svg"
          class="wes-icon"
          alt="information icon"
        />
        <p class="wes-text-shortform">We're required to ask these questions by the Financial Conduct Authority, as we manage investments on your behalf.</p>
      </div>
    </div>

      </div>
    </div>
  `,
});
