import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';

import { InactivityModalComponent } from './inactivity-modal/inactivity-modal.component';
import { startWith, finalize } from 'rxjs/operators';
import { SessionStorageService } from '@wesleyan-frontend/wpisa/data-access';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeoutService {
  timedOut = false;

  constructor(
    private idle: Idle,
    private dialog: MatDialog,
    private sessionService: SessionStorageService
  ) {}

  initInactivityTimeout() {
    // Sets the idle timeout of 9 minutes
    this.idle.setIdle(9 * 60);
    // Sets a timeout period of 60 seconds
    this.idle.setTimeout(60);
    // Sets the default interrupts, in this case, things like
    // clicks, scrolls, touches to the document
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onIdleEnd.subscribe(() => {
      this.reset();
    });

    this.idle.onTimeout.subscribe(() => {
      this.timedOut = true;
      this.sessionService
        .clear()
        .pipe(
          finalize(() =>
            window.open(`/savings-and-investments/with-profits-isa`, '_self')
          )
        )
        .subscribe();
    });

    this.idle.onIdleStart.subscribe(() => {
      this.dialog.open(InactivityModalComponent, {
        panelClass: ['wes-modal', 'wes-inactivity-modal'],
        data: {
          countDown: this.idle.onTimeoutWarning.pipe(startWith(60)),
        },
      });
    });

    this.reset();
  }

  reset() {
    this.idle.watch();
    this.timedOut = false;
  }
}