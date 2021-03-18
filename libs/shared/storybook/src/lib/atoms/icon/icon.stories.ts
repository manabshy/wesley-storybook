import { color, number } from '@storybook/addon-knobs';

import { wesIconFont } from '../../components/in-page-menu/in-page-menu.stories';
import mdx from '../../components/in-page-menu/menu.mdx';

export default {
  title: 'Atoms/Icon',
  parameters: {
    knobs: {
      escapeHTML: false,
    },
    docs: { iframeHeight: 500, page: mdx },
  },
};

export const icons = wesIconFont;
