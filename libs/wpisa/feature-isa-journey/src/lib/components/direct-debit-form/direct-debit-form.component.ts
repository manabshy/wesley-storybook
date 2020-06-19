import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  forwardRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms';
import {
  LumpSumPayment,
  DirectDebitDetails,
} from '@wesleyan-frontend/wpisa/data-access';
import { NgFormsManager } from '@ngneat/forms-manager';
import { InvestmentOptionsFacade } from '../../core/investment-options.facade';
import { DirectDebitFormValue } from './direct-debit-form-value.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wes-direct-debit-form',
  templateUrl: './direct-debit-form.component.html',
  styleUrls: ['./direct-debit-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DirectDebitFormComponent),
      multi: true,
    },
  ],
})
export class DirectDebitFormComponent
  implements ControlValueAccessor, OnChanges, OnInit, OnDestroy {
  @Input() submitAttempt = false;

  content: DirectDebitDetails;
  private subscription = new Subscription();

  form: FormGroup = this.builder.group(
    {
      accountHolderFullName: [
        null,
        [Validators.required, Validators.maxLength(100)],
      ],
      sortCode: [
        null,
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(6),
          Validators.maxLength(6),
        ],
      ],
      accountNumber: [
        null,
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(6),
          Validators.maxLength(8),
        ],
      ],
      bankName: [null, [Validators.required, Validators.maxLength(100)]],
    },
    { updateOn: 'blur' }
  );

  onChange: any = (_: DirectDebitFormValue) => {};
  onTouch: any = () => {};

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager,
    private investmentOptionsFacade: InvestmentOptionsFacade
  ) {
    this.investmentOptionsFacade.pageContent$.subscribe((content) => {
      this.content = content.directDebitDetails;
      console.log(content);
    });
  }

  ngOnInit(): void {
    this.subscription.add(
      this.form.valueChanges.subscribe((value: DirectDebitFormValue) => {
        this.onChange(value);
      })
    );

    this.formsManager.upsert('directDebit', this.form, {
      withInitialValue: true,
    });
  }

  isFieldInvalid(fieldName: string) {
    return (
      (this.form.get(fieldName).invalid && this.form.get(fieldName).dirty) ||
      (this.form.get(fieldName).invalid && this.submitAttempt)
    );
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['touched'] && simpleChanges['touched'].currentValue) {
      this.form.markAllAsTouched();
    }
  }

  writeValue(value: null | DirectDebitFormValue): void {
    if (value) {
      this.form.reset(value);
    }
  }

  registerOnChange(fn: () => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (_: DirectDebitFormValue) => {}): void {
    this.onTouch = fn;
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('directDebit');
    this.subscription.unsubscribe();
  }
}
