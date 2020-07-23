import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { startWith, finalize, take } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

import { SessionStorageService } from '@wesleyan-frontend/wpisa/data-access';

import { InactivityModalComponent } from './inactivity-modal/inactivity-modal.component';

@Injectable({
  providedIn: 'root',
})
export class InactivityTimeoutService {
  timedOut = false;

  constructor(
    private idle: Idle,
    private dialog: MatDialog,
    private sessionService: SessionStorageService
  ) {}

  initInactivityTimeout() {
    // Sets the idle timeout of 9 minutes
    this.idle.setIdle(9 * 60);
    this.idle.setIdleName('inactivityTimeout');
    // Sets a timeout period of 60 seconds
    this.idle.setTimeout(60);

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
      //We don't want to interrupt the countdown in modal
      this.idle.clearInterrupts();

      const dialogRef = this.dialog.open(InactivityModalComponent, {
        panelClass: ['wes-modal', 'wes-inactivity-modal'],
        data: {
          countDown: this.idle.onTimeoutWarning.pipe(startWith(60)),
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
