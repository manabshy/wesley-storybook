import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindMyFCFeatureShellRoutingModule } from './find-my-fc-feature-shell-routing.module';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [CommonModule, FindMyFCFeatureShellRoutingModule],
  declarations: [ShellComponent],
})
export class FindMyFcFeatureShellModule {}
