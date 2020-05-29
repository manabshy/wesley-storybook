import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, Component, Input, QueryList } from '@angular/core';
import { CdkStep, CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'wes-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: CustomStepperComponent }],
})
export class CustomStepperComponent extends CdkStepper {}
