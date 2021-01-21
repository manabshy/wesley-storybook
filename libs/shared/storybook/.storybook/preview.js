import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsContainer, DocsPage } from '@storybook/addon-docs';
import { setCompodocJson } from '@storybook/addon-docs/dist/frameworks/angular';
import docJson from '../../../../documentation.json';

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: false,
  },
  layout: 'fullscreen',
};
setCompodocJson(docJson);
