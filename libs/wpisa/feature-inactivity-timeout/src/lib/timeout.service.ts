import { Injectable } from '@angular/core';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { MatDialog } from '@angular/material/dialog';
import { InactivityModalComponent } from './inactivity-modal/inactivity-modal.component';

@Injectable({
  providedIn: 'root',
})
export class TimeoutService {
  idleState = 'Not started.';
  timedOut = false;
  title = 'angular-idle-timeout';

  constructor(private idle: Idle, private dialog: MatDialog) {}

  initInactivityTimeout() {
    // sets an idle timeout of 5 seconds, for testing purposes.
    this.idle.setIdle(9 * 60);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    this.idle.setTimeout(60);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onIdleEnd.subscribe(() => {
      this.idleState = 'No longer idle.';
      console.log(this.idleState);
      this.reset();
    });

    this.idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      console.log(this.idleState);
      //   this.router.navigate(['/']);
    });

    this.idle.onIdleStart.subscribe(() => {
      this.idleState = "You've gone idle!";
      console.log(this.idleState);
      this.dialog.open(InactivityModalComponent, {
        data: {
          countDown: this.idle.onTimeoutWarning,
        },
      });
    });

    this.idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!';
      console.log(this.idleState);
    });

    this.reset();
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }
}
