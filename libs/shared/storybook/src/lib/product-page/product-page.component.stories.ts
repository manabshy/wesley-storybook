import { SharedUiSiteFooterModule } from '@wesleyan-frontend/shared/ui-site-footer';
import { SharedUiSiteHeaderModule } from '@wesleyan-frontend/shared/ui-site-header';

import { ProductPageComponent } from './product-page.component';

export default {
  title: 'ProductPageComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [SharedUiSiteFooterModule, SharedUiSiteHeaderModule],
  },
  component: ProductPageComponent,
  props: {},
});
