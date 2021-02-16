import { addParameters, moduleMetadata } from '@storybook/angular';
import { array, select, text, withKnobs } from '@storybook/addon-knobs';
import { Pipe, PipeTransform } from '@angular/core';

import * as jquery from 'jquery';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';

global = { ...global, ...{ $: jquery, jQuery: jquery, bootstrap: bootstrap } };

@Pipe({ name: 'stripSpacesToLower' })
/*export*/
class StripSpacesToLower implements PipeTransform {
  transform(str: string): any {
    return str
      .replace(/\s/g, '')
      .replace(/[^a-zA-Z0-9]/g, '')
      .toLocaleLowerCase();
  }
}

addParameters({ docs: { iframeHeight: 500 } });

export default {
  title: 'Components/Tabs',
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [StripSpacesToLower],
    }),
  ],
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

const styleVariants = {
  'white background': 'container-white',
  'grey background': 'container-grey',
};

export const tabs1 = () => ({
  template: `
  <div class="wes-tabs {{variant}}">
    <div class="container">
      <h2 *ngIf="mainHeading.length > 0" class="text-md-center tab-header">{{mainHeading}}</h2>
      <!-- Nav tabs -->
      <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
        <ng-container *ngFor="let tabTitle of tabTitles; let i = index">
          <li class="nav-item" role="presentation" *ngIf="{ name: tabTitle | stripSpacesToLower } as data">
            <a class="nav-link" [ngClass]="{'active': i === 0}" id="{{data.name}}-tab" data-toggle="tab" href="#{{data.name}}" role="tab" [attr.aria-controls]="data.name" aria-selected="true">
              {{tabTitle}}
            </a>
          </li>
        </ng-container>
      </ul>
    </div>
    <!-- Tab panes -->
    <div class="tab-content" aria-live="polite">
      <ng-container *ngFor="let tabTitle of tabTitles; let i = index">
        <div *ngIf="{ name: tabTitle | stripSpacesToLower } as data" [ngClass]="{'active': i === 0}" class="tab-pane" id="{{data.name}}" role="tabpanel" [attr.aria-labelledby]="data.name+'-tab'">
          <div class="container">  
            <div class="panel-heading">
              <a class="panel-title" data-toggle="collapse" data-parent=".tab-pane" href="#collapse{{data.name}}">
              {{tabTitle}}
              </a>
            </div>
            <div id="collapse{{data.name}}" class="panel collapse">
              <div class="panel-text">
                <div class="panel-text-heading">{{tabTitle}}</div>
                <div [innerHtml]="tabText[i]"></div>
              </div>
              <div class="panel-image" [ngStyle]="{'background-image': 'url(' + tabImages[i] + ')'}" >
              </div>
            </div>
          </div>
        </div>
      </ng-container>
    </div>
  </div>
    `,
  props: {
    variant: select('variant', styleVariants, 'container-white'),
    mainHeading: text('main heading', 'Three stages of cover…'),
    tabTitles: array('tab titles', [
      'Share in our profits',
      'Find your financial consultant',
      'Save or invest?',
    ]),
    tabText: array(
      'tab text (*Note delimeter is ||)',
      [
        `
      <p>
        One of the key features of the Capital Investment Bond is that it provides
        access to our Life With Profits Fund. As the name suggests, the With Profits
        Fund includes Wesleyan’s profits and losses from across the business - so
        it’s a chance to share in our financial success.
      </p>
      <p><a href="javascript:void(0)">Find out more about the With Profits Fund here</a></p>
      `,
        `
      <p>
        Request an appointment to discuss your finances and we’ll match you with a
        Financial Consultant that’s local to you.
      </p>
      <p>
        Looking for a full financial review or just want to learn more about one of
        our products? You can meet us in-person or via video call, at a date and
        time that fits around your schedule. And if you’re a doctor, dentist, lawyer
        or teacher, we’ll pair you with a specialist adviser for your field.
      </p>
      `,
        `
      <p>
        When you’re saving for your child’s future, you might like the security of
        saving in cash - but if you want to be more adventurous with your money and
        look for potentially greater gains, you could choose to invest in a stocks
        and shares junior ISA instead. You can even contribute to both at once,
        though the £9,000 overall limit still applies.
      </p>
      <p>
        If you do choose to invest, remember that the value of investments can fall
        as well as rise, and you may get back less than you put in.
      </p>    
      `,
      ],
      `||`
    ),
    tabImages: array('tab images', [
      `http://placekitten.com/600/400`,
      `http://placekitten.com/408/287`,
      `http://placekitten.com/200/287`,
    ]),
  },
});
