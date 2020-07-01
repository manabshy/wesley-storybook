import { text, number, boolean, array } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import {
  //   StepperComponent,
  SharedUiStepperModule,
} from '@wesleyan-frontend/shared/ui-stepper';
export default {
  title: 'Typography',
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      //   declarations: [StepperComponent],
      imports: [SharedUiStepperModule],
    }),
  ],
};

export const headings = () => ({
  template: `
  <div class="bg-solid-white" style="padding:2rem;">
  <h1 class="wes-text-mega">Mega About our Financial Consultants</h1>
  <h1>H1 About our Financial Consultants</h1>
  <h2>H2 About our Financial Consultants</h2>
  <h3>H3 About our Financial Consultants</h3>
  <h4>H4 About our Financial Consultants</h4>
  <h5>H5 About our Financial Consultants</h5>
  <h6>H6 About our Financial Consultants</h6>
  <p></p>
  </div>

  `,
});
export const paragraphs = () => ({
  template: `
    <div class="" style="padding:3rem">

  <p class="wes-text-intro">Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.</p>
  <p class="wes-text-intro">Intro sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.</p>

  <p class="wes-text-longform">Longform sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.</p>
  <p class="wes-text-longform">Longform sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.</p>

  <p class="wes-text-shortform">Shortform sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.</p>
  <p class="wes-text-shortform">Shortform sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.</p>

  <p class="wes-text-xs">Shortform sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.</p>
  <p class="wes-text-xs">Shortform sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.</p>
    </div>`,
});
export const lists = () => ({
  template: `
    <div class="" style="padding:3rem">
    <ul class="wes-list wes-list-bullets">
        <li class="">Tailored, one-to-one advice from our Financial Consultants available at your home or place of work</li>
        <li class="">First appointments typically last an hour and will help us understand your current financial situation and long-term goals</li>
        <li class="">After the appointment your Financial Consultant will create a plan of action to help you achieve your goals</li>
        <li class="">Your Financial Consultant will then guide you through the process of purchasing and monitoring the performance of these products</li>
    </ul>

    <ul class="wes-list wes-list-ticks">
        <li class="">Tailored, one-to-one advice from our Financial Consultants available at your home or place of work</li>
        <li class="">First appointments typically last an hour and will help us understand your current financial situation and long-term goals</li>
        <li class="">After the appointment your Financial Consultant will create a plan of action to help you achieve your goals</li>
        <li class="">Your Financial Consultant will then guide you through the process of purchasing and monitoring the performance of these products</li>
    </ul>
    </div>`,
});
