import { addDecorator } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(withKnobs);
addDecorator(withA11y);
export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
