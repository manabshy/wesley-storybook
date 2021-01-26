import { addParameters } from '@storybook/angular';
import { array, select, object, text, withKnobs } from '@storybook/addon-knobs';

addParameters({ docs: { iframeHeight: 500 } });

const style1Variants = {
  'light grey': 'light-grey',
  'dark grey': 'dark-grey',
};

const style2Variants = {
  transparent: 'transparent',
  'transparent with alternate gold': 'transparent alternate-gold-columns',
};

export default {
  title: 'Components/Table',
  decorators: [withKnobs],
};

export const style1 = () => ({
  template: `
  <div class="container wes-table-container">
  <table class="wes-table {{variant}}">
    <caption *ngIf="caption">
      {{caption}}
    </caption>
    <thead>
      <tr>
        <th *ngFor="let tableHeader of tableHeaders">
        {{tableHeader}}
        </th>
      </tr>
    </thead>
    <tbody>
        <tr *ngFor="let tableRow of tableRowText;">
          <td *ngFor="let tableColumn of tableRow; let i = index" [attr.data-title]="tableHeaders[i]">
          {{tableColumn}}
          </td>
        </tr>
    </tbody>
  </table>
</div>
  `,
  props: {
    caption: text('caption', 'England and Wales NHS pension contributions'),
    variant: select('Variant', style1Variants, 'light-grey'),
    tableHeaders: array('table headers', [
      'Salary Range',
      'Your contribution (before tax relief)',
      'Employer’s contribution',
    ]),
    tableRowText: object('table row text', [
      ['£15,432 - £21,477', '5%', '20.68%'],
      ['£21,477 - £41,477', '5.6%', '20.68%'],
      ['£41,477 - £100,000', '7.1%', '20.68%'],
    ]),
  },
});

export const style2 = () => ({
  template: `
    <div class="container wes-table-container">
      <table class="wes-table {{variant}}">
      <caption *ngIf="caption">England and Wales NHS pension contributions</caption>
      <thead *ngIf="tableHeaders">
        <tr>
          <th *ngFor="let tableHeader of tableHeaders; let i = index" [attr.colspan]="i === 0? 2 : null">
            {{tableHeader}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let tableRow of tableRowText; let i = index">
          <ng-container *ngFor="let tableColumn of tableRow; let j = index">
         
            <th *ngIf="j===0; else normalColumn" colspan="2">
              {{tableColumn}}
            </th>

            <ng-template #normalColumn>
                <td [attr.data-title]="tableHeaders[j]">
                  <span [attr.aria-label]="tableColumn" class="icon-{{tableColumn}}"></span>
                </td>
            </ng-template>

          </ng-container>
        </tr>
        
      </tbody>
      </table>
    </div>
  `,
  props: {
    caption: text('caption', 'England and Wales NHS pension contributions'),
    variant: select('Variant', style2Variants, 'transparent'),
    tableHeaders: array('table headers', [
      '',
      'Annuities',
      'Cash lump sums',
      'Drawdown',
      'Taking your whole pot as cash',
    ]),
    tableRowText: object('table row text', [
      ['Provides an income?', 'tick', 'cross', 'tick', 'cross'],
      ['Provides a secure income for life?', 'tick', 'cross', 'tick', 'cross'],
      ['Allows you to change your income?', 'cross', 'tick', 'tick', 'cross'],
      [
        'Is your remaining pot still invested?',
        'cross',
        'tick',
        'tick',
        'cross',
      ],
      ['Affected by the stock market?', 'tick', 'tick', 'tick', 'cross'],
    ]),
  },
});
