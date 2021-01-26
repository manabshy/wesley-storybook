import { AccordionComponent } from './accordion.component';
import { moduleMetadata } from '@storybook/angular';
import { AccordionModule } from './accordion.module';
export default {
  title: 'Components/Accordion',
  decorators: [
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
  <wes-accordion [type]="type"></wes-accordion>
  `,
  props: {
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
  <wes-accordion [type]="type"></wes-accordion>
  `,
  props: {
    text: 'Accordion',
    type: 'custom',
    opened: false,
    toggle: (event: any) => {
      console.log('some bindings work');
    },
  },
});
