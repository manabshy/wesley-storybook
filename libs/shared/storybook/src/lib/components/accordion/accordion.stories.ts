import { AccordionComponent } from './accordion.component';
import { moduleMetadata } from '@storybook/angular';
import { AccordionModule } from './accordion.module';
import { text, withKnobs } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs';

const label = 'Colors';
const options = {
  white: '#F6F6F6',
  grey: '#D9DADC',
  none: null,
};
const defaultValue = options.white;
const groupId = 'GROUP-ID1';



export default {
  title: 'Components/Accordion',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        AccordionModule
      ]
    })
  ],
  component: AccordionComponent
};

export const accordionFullWidth= () => ({
  template: `
  <wes-accordion [type]="type" [value]="value"></wes-accordion>
  `,
  props: {
    text: text('text', 'Accordion'),
    value : select(label, options, defaultValue, groupId),
    type: 'fullwidth',
    toggle: (event: any) => {
      console.log('some bindings work');
      console.log(event);
    },
  },
  component: AccordionComponent
});


export const custom= () => ({
  template: `
  <wes-accordion [type]="type" [value]="value"></wes-accordion>
  `,
  props: {
    text: text('text', 'Accordion'),
    value : select(label, options, defaultValue, groupId),
    type: 'custom',
    toggle: (event: any) => {
      console.log('some bindings work');
      console.log(event);
    },
  },
  component: AccordionComponent
});

/***/
