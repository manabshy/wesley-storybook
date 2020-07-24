import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
  ConfigService,
  SessionTimeoutModal,
} from '@wesleyan-frontend/wpisa/data-access';

import { TotalSessionTimeoutModalData } from './total-session-timeout-modal-data.interface';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Observable } from 'rxjs';
import { tap, finalize, every, filter } from 'rxjs/operators';

@Component({
  selector: 'wes-total-session-timeout-modal',
  templateUrl: './total-session-timeout-modal.component.html',
  styleUrls: ['./total-session-timeout-modal.component.scss'],
})
export class TotalSessionTimeoutModalComponent {
  content: SessionTimeoutModal;
  countDownWithAlert$: Observable<number> = this.data.countDown.pipe(
    tap((seconds) =>
      seconds % 10 === 0
        ? this.liveAnnouncer.announce(`Session expires in ${seconds} seconds`)
        : ''
    ),
    finalize(() => this.liveAnnouncer.clear())
  );
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TotalSessionTimeoutModalData,
    private configService: ConfigService,
    private liveAnnouncer: LiveAnnouncer
  ) {
    this.content = this.configService.content.sessionTimeoutModal;
  }
}
