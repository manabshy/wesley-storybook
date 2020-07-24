import { Injectable, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Idle, LocalStorageExpiry, LocalStorage } from '@ng-idle/core';
import { startWith, finalize } from 'rxjs/operators';
import { differenceInSeconds } from 'date-fns';

import {
  SessionStorageService,
  ConfigService,
} from '@wesleyan-frontend/wpisa/data-access';

import { TotalSessionTimeoutModalComponent } from './total-session-timeout-modal/total-session-timeout-modal.component';

const LOCAL_STORAGE_SESSION_NAME = 'session';
@Injectable({
  providedIn: 'root',
})
export class TotalSessionTimeoutService {
  timedOut = false;
  private redirectUrl = '/';
  private idle: Idle;
  private session: {
    startTimestamp: Date;
    expiryTimestamp: Date;
  };
  private sessionIdleInSeconds = 39 * 60;
  private sessionTimeoutInSeconds = 60;
  private remainingSessionTimeInSeconds = 0;

  constructor(
    private dialog: MatDialog,
    private ngZone: NgZone,
    private sessionService: SessionStorageService,
    private configService: ConfigService
  ) {
    this.redirectUrl = this.configService.content.endPoints.bookmarkRedirectPage;

    this.idle = new Idle(
      new LocalStorageExpiry(new LocalStorage()),
      this.ngZone
    );
    this.idle.setIdleName('totalSessionTimeout');
    this.idle.clearInterrupts();
  }

  initSessionTimeout() {
    this.initSession();

    if (this.remainingSessionTimeInSeconds <= this.sessionTimeoutInSeconds) {
      //Less than 60 sec left
      this.idle.setIdle(1);

      // Sets a timeout period of remaining seconds
      this.idle.setTimeout(this.remainingSessionTimeInSeconds);
    } else {
      //More than 60 sec left
      this.idle.setIdle(
        this.remainingSessionTimeInSeconds - this.sessionTimeoutInSeconds
      );

      // Sets a timeout period of 60 seconds
      this.idle.setTimeout(this.sessionTimeoutInSeconds);
    }

    // this.idle.timeout();
    this.idle.onIdleEnd.subscribe(() => {
      this.reset();
    });

    this.idle.onTimeout.subscribe(() => {
      this.timedOut = true;
      localStorage.removeItem(LOCAL_STORAGE_SESSION_NAME);

      this.sessionService
        .clear()
        .pipe(finalize(() => window.open(this.redirectUrl, '_self')))
        .subscribe();
    });

    this.idle.onIdleStart.subscribe(() => {
      const timeoutStartWithSeconds =
        this.remainingSessionTimeInSeconds < this.sessionTimeoutInSeconds
          ? this.remainingSessionTimeInSeconds
          : this.sessionTimeoutInSeconds;

      this.dialog.open(TotalSessionTimeoutModalComponent, {
        disableClose: true,
        panelClass: ['wes-modal', 'wes-inactivity-modal'],
        data: {
          countDown: this.idle.onTimeoutWarning.pipe(
            startWith(timeoutStartWithSeconds)
          ),
        },
      });
    });

    this.reset();
  }

  reset() {
    this.idle.watch();
    this.timedOut = false;
  }

  private initSession() {
    this.session = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SESSION_NAME));
    if (this.isSessionExpired()) {
      this.resetSession();
    }
  }

  private resetSession() {
    localStorage.removeItem(LOCAL_STORAGE_SESSION_NAME);

    const now = new Date();

    this.session = {
      startTimestamp: now,
      expiryTimestamp: new Date(
        now.getTime() +
          (this.sessionTimeoutInSeconds + this.sessionIdleInSeconds) * 1000
      ),
    };

    localStorage.setItem(
      LOCAL_STORAGE_SESSION_NAME,
      JSON.stringify(this.session)
    );

    this.remainingSessionTimeInSeconds = differenceInSeconds(
      new Date(this.session.expiryTimestamp),
      new Date()
    );
  }

  private isSessionExpired() {
    if (!this.session) {
      return true;
    }

    this.remainingSessionTimeInSeconds = differenceInSeconds(
      new Date(this.session.expiryTimestamp),
      new Date()
    );
    return this.remainingSessionTimeInSeconds <= 0;
  }
}
