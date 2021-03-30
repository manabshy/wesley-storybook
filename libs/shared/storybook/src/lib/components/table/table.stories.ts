import { addParameters, Meta } from '@storybook/angular';
import { array, select, object, text, withKnobs } from '@storybook/addon-knobs';
import mdx from './table.mdx';

const viewVariants = {
  standard: 'standard',
  wide: 'wide',
};

const style1Variants = {
  transparent: '',
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
  parameters: {
    docs: {
      iframeHeight: 500,
      page: mdx,
    },
  },
} as Meta;

export const style1 = () => ({
  template: `
  <div class="container wes-core-table-container">
  <table class="wes-core-table {{variant}} {{view}}">
    <caption *ngIf="caption">
      {{caption}}
    </caption>
    <thead>
      <tr *ngFor="let tr of tableHeaders">
        <ng-container *ngFor="let th of tr">
          <th [attr.colSpan]="th.colSpan > 1 ? th.colSpan : null">
          <div>
            {{th?.headerText}}
          </div>
          </th>
        </ng-container>
      </tr>
    </thead>
    <tbody>
        <tr *ngFor="let tableRow of tableRowText;">
          <ng-container *ngFor="let tableColumn of tableRow; let i = index">
              <td *ngIf="i > 0; else thTemplate" [attr.data-title]="tableHeaders[tableHeaders.length -1][i]?.headerText">
              <div>{{tableColumn}}</div>
              </td>
              <ng-template #thTemplate>
                <th [attr.data-title]="tableHeaders[tableHeaders.length -1][i]?.headerText">
                <div>{{tableColumn}}</div>
                </th>
              </ng-template>
          </ng-container>
        </tr>
    </tbody>
  </table>
</div>
  `,
  props: {
    caption: text('caption', 'England and Wales NHS pension contributions'),
    view: select('view', viewVariants, 'standard'),
    variant: select('variant', style1Variants, 'transparent'),
    tableHeaders: object('table headers', [
      [
        { headerText: 'Salary Range', colSpan: 1 },
        { headerText: 'Your contribution (before tax relief)', colSpan: 1 },
        { headerText: 'Employer’s contribution', colSpan: 1 },
      ],
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
    <div class="container wes-core-table-container">
      <table class="wes-core-table centred-columns {{variant}} {{view}}">
      <caption *ngIf="caption">{{caption}}</caption>
      <thead *ngIf="tableHeaders">
        <tr>
          <ng-container *ngFor="let tableHeader of tableHeaders; let i = index" [attr.colspan]="i === 0? 2 : null">
            <td *ngIf="i === 0" [attr.colspan]="i === 0? 2 : null">
            </td>
            <th *ngIf="i > 0" [attr.colspan]="i === 0? 2 : null">
              {{tableHeader}}
            </th>
          </ng-container>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let tableRow of tableRowText; let i = index">
          <ng-container *ngFor="let tableColumn of tableRow; let j = index">
         
            <th *ngIf="j===0; else normalColumn" colspan="2" [attr.data-title]="tableHeaders[j] ? tableHeaders[j] : null">
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
    view: select('view', viewVariants, 'standard'),
    variant: select('variant', style2Variants, 'transparent'),
    tableHeaders: array('table headers', [
      ,
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
