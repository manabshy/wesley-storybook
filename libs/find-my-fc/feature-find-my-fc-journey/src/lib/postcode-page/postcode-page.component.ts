import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';

import {
  ConfigService,
  NewCustomerPostcodeContent,
} from '@wesleyan-frontend/find-my-fc/data-access';
import { Observable } from 'rxjs';
import { PostcodeFacade } from '../core/services/postcode.facade';
import { routesNames } from '../find-my-fc-journey.routes.names';
import { AppForms } from '../shared/app-forms.interface';

@Component({
  selector: 'wes-postcode-page',
  templateUrl: './postcode-page.component.html',
  styleUrls: ['./postcode-page.component.scss'],
})
export class PostcodePageComponent implements OnInit {
  content: NewCustomerPostcodeContent;

  form: FormGroup = this.builder.group({
    postcode: [null, [Validators.required]],
  });
  headingContent$: Observable<{ title: string; description: string }>;

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager<AppForms>,
    private configService: ConfigService,
    private postcodeFacade: PostcodeFacade,
    private router: Router
  ) {
    this.content = this.configService.content.newCustomerPostcode;
    this.headingContent$ = this.postcodeFacade.postcodePageContent$;
  }

  ngOnInit(): void {
    this.formsManager.upsert('postcode', this.form);
  }

  onSubmit() {
    //Find fc
    // this.router.navigate([`/${routesNames.POSTCODE}`]);
  }
}
