import { Input, Component } from '@angular/core';

@Component({
  selector: 'wes-form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.scss'],
})
export class FormFieldErrorComponent {
  @Input() hasError = true;
}
