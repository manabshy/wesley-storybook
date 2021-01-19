import { configure, addDecorator } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsContainer, DocsPage } from '@storybook/addon-docs';
import { setCompodocJson } from '@storybook/addon-docs/dist/frameworks/angular';
import docJson from '../../../../documentation.json';

addDecorator(withKnobs);
configure(require.context('../src/lib', true, /\.stories\.(j|t)sx?$/), module);
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
