import { AccordionComponent } from './accordion.component';
import { moduleMetadata } from '@storybook/angular';
import { AccordionModule } from './accordion.module';
import { text, withKnobs } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs';



const label = 'Colors';
const options = {
  grey: '#F6F6F6',
  white: '',
};
const defaultValue = options.grey;
const groupId = 'Colors';

const label_size = 'Size';
const size_options = {
  large: false,
  medium: true,
};
const defaultSize = size_options.large;
const sizeId = 'Size';


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
      console.log(event);
    },
  },
  component: AccordionComponent
});


export const custom= () => ({
  template: `
  <wes-accordion [type]="type" [value]="value" [size]="size"></wes-accordion>
  `,
  props: {
    text: text('text', 'Accordion'),
    value : select(label, options, defaultValue, groupId),
    size : select(label_size, size_options, defaultSize, sizeId),

    type: 'custom',
    toggle: (event: any) => {
      console.log(event);
    },
  },
  component: AccordionComponent
});

/***/
