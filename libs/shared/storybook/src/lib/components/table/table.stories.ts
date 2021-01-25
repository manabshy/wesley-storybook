import { addParameters } from '@storybook/angular';

addParameters({ docs: { iframeHeight: 500 } });

export default {
  title: 'Components/Table',
};

export const light_grey = () => ({
  template: `
  <div class="container wes-table-container">
  <table class="wes-table light-grey">
    <caption>England and Wales NHS pension contributions</caption>
    <thead>
      <tr>
        <th>Salary Range</th>
        <th>Your contribution (before tax relief)</th>
        <th>Employer’s contribution</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-title="Salary Range">£15,432 - £21,477</td>
        <td data-title="Your contribution (before tax relief)">5%</td>
        <td data-title="Employer’s contribution">20.68%</td>
      </tr>
      <tr>
        <td data-title="Salary Range">£15,432 - £21,477</td>
        <td data-title="Your contribution (before tax relief)">5.6%</td>
        <td data-title="Employer’s contribution">20.68%</td>
      </tr>
      <tr>
        <td data-title="Salary Range">£15,432 - £21,477</td>
        <td data-title="Your contribution (before tax relief)">7.1%</td>
        <td data-title="Employer’s contribution">20.68%</td>
      </tr>
    </tbody>
  </table>
</div>
  `,
});

export const dark_grey = () => ({
  template: `
  <div class="container wes-table-container">
  <table class="wes-table dark-grey">
    <caption>England and Wales NHS pension contributions</caption>
    <thead>
      <tr>
        <th>Salary Range</th>
        <th>Your contribution (before tax relief)</th>
        <th>Employer’s contribution</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-title="Salary Range">£15,432 - £21,477</td>
        <td data-title="Your contribution (before tax relief)">5%</td>
        <td data-title="Employer’s contribution">20.68%</td>
      </tr>
      <tr>
        <td data-title="Salary Range">£15,432 - £21,477</td>
        <td data-title="Your contribution (before tax relief)">5.6%</td>
        <td data-title="Employer’s contribution">20.68%</td>
      </tr>
      <tr>
        <td data-title="Salary Range">£15,432 - £21,477</td>
        <td data-title="Your contribution (before tax relief)">7.1%</td>
        <td data-title="Employer’s contribution">20.68%</td>
      </tr>
    </tbody>
  </table>
</div>
  `,
});

export const transparent = () => ({
  template: `
    <div class="container wes-table-container">
      <table class="wes-table transparent">
      <caption>England and Wales NHS pension contributions</caption>
      <thead>
        <tr>
          <th colspan="2"></th>
          <th>Annuities</th>
          <th>Cash lump sums</th>
          <th>Drawdown</th>
          <th>Taking your whole pot as cash</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th colspan="2">
            Provides an income?
          </th>
          <td data-title="Annuities">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Cash lump sums">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
          <td data-title="Drawdown">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Taking your whole pot as cash">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
        </tr>
        <tr>
          <th colspan="2">
          Provides a secure income for life?
          </th>
          <td data-title="Annuities">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Cash lump sums">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
          <td data-title="Drawdown">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Taking your whole pot as cash">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
        </tr>
        <tr>
          <th colspan="2">
          Allows you to change your income?
          </th>
          <td data-title="Annuities">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
          <td data-title="Cash lump sums">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Drawdown">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Taking your whole pot as cash">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
        </tr>
        <tr>
          <th colspan="2">
          Is your remaining pot still invested?
          </th>
          <td data-title="Annuities">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
          <td data-title="Cash lump sums">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Drawdown">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Taking your whole pot as cash">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
        </tr>
        <tr>
          <th colspan="2">
          Affected by the stock market?
          </th>
          <td data-title="Annuities">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Cash lump sums">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Drawdown">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Taking your whole pot as cash">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
  `,
});

export const alternate_columns = () => ({
  template: `
    <div class="container wes-table-container">
      <table class="wes-table transparent alternate-gold-columns">
      <caption>England and Wales NHS pension contributions</caption>
      <thead>
        <tr>
          <th colspan="2"></th>
          <th>Annuities</th>
          <th>Cash lump sums</th>
          <th>Drawdown</th>
          <th>Taking your whole pot as cash</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th colspan="2">
            Provides an income?
          </th>
          <td data-title="Annuities">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Cash lump sums">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
          <td data-title="Drawdown">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Taking your whole pot as cash">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
        </tr>
        <tr>
          <th colspan="2">
          Provides a secure income for life?
          </th>
          <td data-title="Annuities">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Cash lump sums">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
          <td data-title="Drawdown">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Taking your whole pot as cash">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
        </tr>
        <tr>
          <th colspan="2">
          Allows you to change your income?
          </th>
          <td data-title="Annuities">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
          <td data-title="Cash lump sums">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Drawdown">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Taking your whole pot as cash">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
        </tr>
        <tr>
          <th colspan="2">
          Is your remaining pot still invested?
          </th>
          <td data-title="Annuities">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
          <td data-title="Cash lump sums">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Drawdown">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Taking your whole pot as cash">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
        </tr>
        <tr>
          <th colspan="2">
          Affected by the stock market?
          </th>
          <td data-title="Annuities">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Cash lump sums">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Drawdown">
            <span aria-label="tick" class="icon-tick"></span>
          </td>
          <td data-title="Taking your whole pot as cash">
            <span aria-label="cross" class="icon-cross"></span>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
  `,
});
