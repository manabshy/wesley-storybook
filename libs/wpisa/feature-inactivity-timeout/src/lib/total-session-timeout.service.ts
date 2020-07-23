import { Injectable, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Idle, LocalStorageExpiry, LocalStorage } from '@ng-idle/core';

import { InactivityModalComponent } from './inactivity-modal/inactivity-modal.component';
import { startWith, finalize } from 'rxjs/operators';
import { SessionStorageService } from '@wesleyan-frontend/wpisa/data-access';
import { TotalSessionTimeoutModalComponent } from './total-session-timeout-modal/total-session-timeout-modal.component';

@Injectable({
  providedIn: 'root',
})
export class TotalSessionTimeoutService {
  timedOut = false;
  private idle;
  constructor(
    // private idle: Idle,
    private dialog: MatDialog,
    private sessionService: SessionStorageService,
    private ngZone: NgZone
  ) {
    this.idle = new Idle(
      new LocalStorageExpiry(new LocalStorage()),
      this.ngZone
    );
  }

  initInactivityTimeout() {
    // Sets the idle timeout of 39 minutes
    this.idle.setIdle(39 * 60);
    this.idle.setIdleName('totalSessionTimeout');
    this.idle.clearInterrupts();

    // Sets a timeout period of 60 seconds
    this.idle.setTimeout(60);

    // this.idle.timeout();
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
      this.dialog.open(TotalSessionTimeoutModalComponent, {
        disableClose: true,
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
