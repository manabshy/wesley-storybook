import { SharedUiSiteFooterModule } from '@wesleyan-frontend/shared/ui-site-footer';
import { SharedUiSiteHeaderModule } from '@wesleyan-frontend/shared/ui-site-header';

import { ProductPageComponent } from './product-page.component';
import { BeforeYouBeginPageComponent } from '../before-you-begin-page/before-you-begin-page.component';
import { ConfirmationPageComponent } from '../confirmation-page/confirmation-page.component';
import { KcFailurePageComponent } from '../kc-failure-page/kc-failure-page.component';

export default {
  title: 'Sitecore Pages',
};

export const productPage = () => ({
  moduleMetadata: {
    imports: [SharedUiSiteFooterModule, SharedUiSiteHeaderModule],
  },
  component: ProductPageComponent,
  props: {},
});

export const beforeYouBeginPage = () => ({
  moduleMetadata: {
    imports: [SharedUiSiteFooterModule, SharedUiSiteHeaderModule],
  },
  component: BeforeYouBeginPageComponent,
  props: {},
});

export const knowledgeCheckFailurePage = () => ({
  moduleMetadata: {
    imports: [SharedUiSiteFooterModule, SharedUiSiteHeaderModule],
  },
  component: KcFailurePageComponent,
  props: {},
});

export const confirmationPage = () => ({
  moduleMetadata: {
    imports: [SharedUiSiteFooterModule, SharedUiSiteHeaderModule],
  },
  component: ConfirmationPageComponent,
  props: {},
});
