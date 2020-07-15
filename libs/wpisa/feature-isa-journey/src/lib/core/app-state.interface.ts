import { CurrentTaxPeriodISALimits } from '@wesleyan-frontend/wpisa/data-access';
import { AppForms } from './app-forms.interface';

export interface AppState {
  attemptId: number;
  currentTaxPeriod: CurrentTaxPeriodISALimits;
  forms: Partial<AppForms>;
}
