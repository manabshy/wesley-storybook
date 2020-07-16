import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
  ConfigService,
  InactivityModal,
} from '@wesleyan-frontend/wpisa/data-access';

import { InactivityModalData } from './inactivity-modal-data.interface';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Observable } from 'rxjs';
import { tap, finalize, every, filter } from 'rxjs/operators';

@Component({
  selector: 'wes-inactivity-modal',
  templateUrl: './inactivity-modal.component.html',
  styleUrls: ['./inactivity-modal.component.scss'],
})
export class InactivityModalComponent {
  content: InactivityModal;
  countDownWithAlert$: Observable<number> = this.data.countDown.pipe(
    tap((seconds) =>
      seconds % 10 === 0
        ? this.liveAnnouncer.announce(`Session expires in ${seconds} seconds`)
        : ''
    ),
    finalize(() => this.liveAnnouncer.clear())
  );
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: InactivityModalData,
    private configService: ConfigService,
    private liveAnnouncer: LiveAnnouncer
  ) {
    this.content = this.configService.content.inactivityModal;
  }
}
