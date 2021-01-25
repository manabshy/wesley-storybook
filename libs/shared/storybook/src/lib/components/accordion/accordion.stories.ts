import { AccordionComponent } from './accordion.component';
import { moduleMetadata } from '@storybook/angular';
import { AccordionModule } from './accordion.module';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { color } from '@storybook/addon-knobs';

const label = 'Color';
const defaultValue = '#F6F6F6';
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

export const base = () => ({
  template: `
  <wes-accordion></wes-accordion>
  `,
});
export const accordionFullWidth= () => ({
  template: `
  <wes-accordion [type]="type" [value]="value"></wes-accordion>
  `,
  props: {
    text: text('text', 'Accordion'),
    value : color(label, defaultValue, groupId),
    text_one: 'Accordion item 1',
    text_two: 'Accordion item 2',
    type: 'fullwidth',
    opened: false,
    toggle: (event: any) => {
      console.log('some bindings work');
      console.log(event);
    },
  },
  component: AccordionComponent
});
export const accordionCustom = () => ({
  template: `
  <wes-accordion [type]="type" [value]="value"></wes-accordion>
  `,
  props: {
    text: 'Accordion',
    value : color(label, defaultValue, groupId),
    type: 'custom',
    opened: false,
    toggle: (event: any) => {
      console.log('some bindings work');
    },
  },
});

/***/
