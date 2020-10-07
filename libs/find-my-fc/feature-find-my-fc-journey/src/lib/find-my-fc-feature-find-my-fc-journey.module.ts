import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindMyFCJourneyRoutingModule } from './find-my-fc-journey-routing.module';
import { CustomerSelectPageComponent } from './customer-select-page/customer-select-page.component';

@NgModule({
  imports: [CommonModule, FindMyFCJourneyRoutingModule],
  declarations: [CustomerSelectPageComponent],
})
export class FindMyFcFeatureFindMyFcJourneyModule {}
