import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';

import { ConfigService } from '@wesleyan-frontend/find-my-fc/data-access';
import { routesNames } from '../find-my-fc-journey.routes.names';
import { AppForms } from '../shared/app-forms.interface';

@Component({
  selector: 'wes-postcode-page',
  templateUrl: './postcode-page.component.html',
  styleUrls: ['./postcode-page.component.scss'],
})
export class PostcodePageComponent implements OnInit {
  content;
  ukPostcodeValidatorPattern: RegExp = new RegExp(
    '(GIRs0AA)|((([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][ABCDEFGHJKSTUW])|([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][ABEHMNPRVWXY]))))s?[0-9][ABDEFGHJLNPQRSTUWXYZ]{2})$',
    'gi'
  );
  test =
    '/(GIRs0AA)|((([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][ABCDEFGHJKSTUW])|([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][ABEHMNPRVWXY]))))s?[0-9][ABDEFGHJLNPQRSTUWXYZ]{2})$/gi';

  form: FormGroup = this.builder.group({
    postcode: [null, [Validators.required, Validators.pattern(this.test)]],
  });

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager<AppForms>,
    private configService: ConfigService,
    private router: Router
  ) {
    this.content = this.configService.content;
  }

  ngOnInit(): void {
    this.formsManager.upsert('postcode', this.form);
  }

  onSubmit() {
    //Find fc
    // this.router.navigate([`/${routesNames.POSTCODE}`]);
  }
}
