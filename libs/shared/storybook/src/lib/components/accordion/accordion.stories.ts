import { AccordionComponent } from './accordion.component';
import { moduleMetadata } from '@storybook/angular';
import { AccordionModule } from './accordion.module';
import { text, withKnobs } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'Components/Accordion',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [AccordionModule],
    }),
  ],
  component: AccordionComponent,
};

const variants = {
  'On White': 'wes-bg-solid-white',
  'On Grey': 'wes-bg-solid-grey-50',
};

export const accordion = () => ({
  template: `
  <wes-accordion [background]="background" [idAttribute]="id" [title]="title"></wes-accordion>
  `,
  props: {
    title: text('title', 'Frequently Asked Question'),
    id: text('id', 'frequentlyAskedQuestions'),
    background: select('Variant', variants, ''),
  },
  component: AccordionComponent,
});

/***/
