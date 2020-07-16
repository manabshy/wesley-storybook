import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
  ConfigService,
  InactivityModal,
} from '@wesleyan-frontend/wpisa/data-access';

import { InactivityModalData } from './inactivity-modal-data.interface';

@Component({
  selector: 'wes-inactivity-modal',
  templateUrl: './inactivity-modal.component.html',
  styleUrls: ['./inactivity-modal.component.scss'],
})
export class InactivityModalComponent implements OnInit {
  content: InactivityModal;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: InactivityModalData,
    private configService: ConfigService
  ) {
    this.content = this.configService.content.inactivityModal;
  }

  ngOnInit(): void {}
}
