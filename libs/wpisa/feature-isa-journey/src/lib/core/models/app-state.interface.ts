import { CurrentTaxPeriodISALimits } from '@wesleyan-frontend/wpisa/data-access';
import { AppForms } from './app-forms.interface';
import { PostcodeLookupAddress } from '@wesleyan-frontend/shared/data-access-api';

export interface AppState {
  attemptId: number;
  postcodeLookupAddressList: PostcodeLookupAddress[];
  currentTaxPeriod: CurrentTaxPeriodISALimits;
  forms: Partial<AppForms>;
}
