import { addDecorator } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsContainer, DocsPage } from '@storybook/addon-docs';
import { setCompodocJson } from '@storybook/addon-docs/dist/frameworks/angular';
import docJson from '../../../../documentation.json';
addDecorator(withKnobs);
addDecorator(withA11y);
export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  layout: 'fullscreen',
};
setCompodocJson(docJson);
