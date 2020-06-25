import { Component, Input } from '@angular/core';

@Component({
  selector: 'wes-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss'],
})
export class ProgressSpinnerComponent {
  @Input() spinnerLocation: 'overlay' | 'button' = 'overlay';
}
