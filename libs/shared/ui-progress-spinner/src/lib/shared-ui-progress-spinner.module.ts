import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { OverlayProgressSpinnerService } from './overlay-progress-spinner.service';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [CommonModule, OverlayModule],
  providers: [OverlayProgressSpinnerService],
  declarations: [ProgressSpinnerComponent],
})
export class SharedUiProgressSpinnerModule {}
