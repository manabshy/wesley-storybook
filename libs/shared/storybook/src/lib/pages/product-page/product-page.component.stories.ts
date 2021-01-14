import { ProductPageComponent } from './product-page.component';
import { BeforeYouBeginPageComponent } from '../before-you-begin-page/before-you-begin-page.component';
import { ConfirmationPageComponent } from '../confirmation-page/confirmation-page.component';
import { KcFailurePageComponent } from '../kc-failure-page/kc-failure-page.component';

export default {
  title: 'Sitecore Pages/ISA',
};

export const productPage = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: ProductPageComponent,
  props: {},
});

export const beforeYouBeginPage = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: BeforeYouBeginPageComponent,
  props: {},
});

export const knowledgeCheckFailurePage = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: KcFailurePageComponent,
  props: {},
});

export const confirmationPage = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: ConfirmationPageComponent,
  props: {},
});
