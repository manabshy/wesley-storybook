import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { startWith, finalize, take } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

import {
  SessionStorageService,
  ConfigService,
} from '@wesleyan-frontend/wpisa/data-access';

import { InactivityModalComponent } from './inactivity-modal/inactivity-modal.component';

@Injectable({
  providedIn: 'root',
})
export class InactivityTimeoutService {
  timedOut = false;
  private redirectUrl = '/';
  private idleTimeInSeconds = 9 * 60;
  private timeoutInSeconds = 60;

  constructor(
    private idle: Idle,
    private dialog: MatDialog,
    private sessionService: SessionStorageService,
    private configService: ConfigService
  ) {
    this.redirectUrl = this.configService.content.endPoints.bookmarkRedirectPage;
    this.idleTimeInSeconds =
      this.configService.content.inactivityModal.idleTimeInSeconds || 9 * 60;
    this.timeoutInSeconds =
      this.configService.content.inactivityModal.timeoutTimeInSeconds || 60;
  }

  initInactivityTimeout() {
    // Sets the idle timeout of 9 minutes
    this.idle.setIdle(this.idleTimeInSeconds);
    this.idle.setIdleName('inactivityTimeout');
    // Sets a timeout period of 60 seconds
    this.idle.setTimeout(this.timeoutInSeconds);

    this.idle.onTimeout.subscribe(() => {
      this.timedOut = true;
      this.sessionService
        .clear()
        .pipe(finalize(() => window.open(this.redirectUrl, '_self')))
        .subscribe();
    });

    this.idle.onIdleStart.subscribe(() => {
      //We don't want to interrupt the countdown in modal
      this.idle.clearInterrupts();

      const dialogRef = this.dialog.open(InactivityModalComponent, {
        panelClass: ['wes-modal', 'wes-inactivity-modal'],
        data: {
          countDown: this.idle.onTimeoutWarning.pipe(
            startWith(this.timeoutInSeconds)
          ),
        },
      });

      dialogRef
        .afterClosed()
        .pipe(take(1))
        .subscribe((result) => {
          this.reset();
        });
    });

    this.reset();
  }

  reset() {
    // Sets the default interrupts, in this case, things like
    // clicks, scrolls, touches to the document
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    this.idle.watch();
    this.timedOut = false;
  }
}
