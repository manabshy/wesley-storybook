import { Component, OnInit, OnDestroy } from '@angular/core';
import { isaRoutesNames } from '../isa-journey.routes.names';
import { Subscription, Observable } from 'rxjs';
import { InvestmentOptionsFacade } from '../core/investment-options.facade';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Title } from '@angular/platform-browser';
import { Declaration } from '@wesleyan-frontend/wpisa/data-access';
import { DeclarationFacade } from '../core/declaration.facade';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalDetailsViewModel } from '../core/personsal-details-view-model.interface';

@Component({
  selector: 'wes-declaration-page',
  templateUrl: './declaration-page.component.html',
  styleUrls: ['./declaration-page.component.scss'],
})
export class DeclarationPageComponent implements OnInit, OnDestroy {
  pageContent: Declaration;
  personalDetailsContent$: Observable<PersonalDetailsViewModel> = this
    .declarationFacade.personalDetailsViewModelData$;
  investmentOptionLink = `/${isaRoutesNames.INVESTMENT_OPTIONS}`;
  submitAttempt = false;
  subscriptions$ = new Subscription();

  form: FormGroup = this.fb.group({
    authorise: [null, [Validators.requiredTrue]],
    declaration: [null, [Validators.requiredTrue]],
  });
  formValid$ = this.formsManager.validityChanges('declaration');

  constructor(
    private declarationFacade: DeclarationFacade,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title,
    private fb: FormBuilder
  ) {
    this.subscriptions$.add(
      this.declarationFacade.pageContent$.subscribe((content) => {
        this.pageContent = content;
        this.titleService.setTitle(content.metaTitle);
        console.log(this.pageContent);
      })
    );
  }
  ngOnInit(): void {
    this.formsManager.upsert('declaration', this.form, {
      withInitialValue: true,
    });
  }

  onSubmit() {
    this.submitAttempt = true;

    if (this.form.valid) {
      //   this.router.navigate([`/${isaRoutesNames.DECLARATION}`]);
    }
  }

  isFieldInvalid(fieldName: string) {
    return (
      (this.form.get(fieldName).invalid && this.form.get(fieldName).dirty) ||
      (this.form.get(fieldName).invalid && this.submitAttempt)
    );
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
    this.formsManager.unsubscribe('declaration');
  }
}
