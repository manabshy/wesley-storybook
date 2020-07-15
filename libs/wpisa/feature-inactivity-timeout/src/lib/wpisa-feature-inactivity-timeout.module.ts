import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NgIdleModule } from '@ng-idle/core';

import { InactivityModalComponent } from './inactivity-modal/inactivity-modal.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, NgIdleModule.forRoot()],
  providers: [],
  declarations: [InactivityModalComponent],
})
export class WpisaFeatureInactivityTimeoutModule {}
